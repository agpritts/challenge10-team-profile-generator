const inquirer = require("inquirer");
const validator = require("email-validator");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = ``;

console.clear();
console.log("---------------------------------------------");
console.log("Team Portfolio Generator")

async function init() {
    try {
        await prompt()

        for(let i = 0; i < teamArray.length; i++) {
            teamString = teamString + html.generateCard(teamArray[i]);
        }

        let finalHtml = html.generateHTML(teamString)

        console.clear();
        console.log("---------------------------------------------");
        console.log("Generating index.html file....");
        console.log("---------------------------------------------");

        writeFileAsync("./dist/index.html", finalHtml);

        console.clear();
        console.log("---------------------------------------------");
        console.log("index.html file created");
        console.log("---------------------------------------------");

    } catch (err) {
        return console.log(err);
    }
}

async function prompt() {
    let responseDone = "";

    do {
        try {
            console.log("---------------------------------------------");
            let response = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the employee's name?: ",
                    validate: function validateName(name){
                        return name !== '';
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter the employee's ID: ",
                    validate: function validateName(name){
                        return name !== '';
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter the employee's email address: ",
                    validate: function validateEmail(name){
                        return validator.validate(name);
                    }
                },
                {
                    type: "list",
                    name: "title",
                    message: "What what is the employee's title:",
                    choices: [
                         "Engineer",
                         "Intern",
                         "Manager"
                    ]
                }
            ]);

            let response2 = ""

               if (response.title === "Engineer") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "github",
                         message: "What is the employee's github username?:",
                         validate: function validateName(name){
                            return name !== '';
                        },
                    }, ]);

                    const engineer = new Engineer(response.name, response.id, response.email, response2.github);
                    teamArray.push(engineer);

               } else if (response.title === "Intern") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "school",
                         message: "What school is the employee attending?:",
                         validate: function validateName(name){
                            return name !== '';
                        },
                    }, ]);

                    const intern = new Intern(response.name, response.id, response.email, response2.school);
                    teamArray.push(intern);

               } else if (response.title === "Manager") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "officeNumber",
                         message: "What is the employee's office number?:",
                         validate: function validateName(name){
                            return name !== '';
                        },
                    }, ]);

                    const manager = new Manager(response.name, response.id, response.email, response2.officeNumber);
                    teamArray.push(manager);
               }

        } catch (err) {
            return console.log(err);
        }

          responseDone = await inquirer.prompt([{
               type: "list",
               name: "finish",
               message: "Do you want to continue?: ",
               choices: [
                    "Yes",
                    "No"
               ]
            },]);

     } while (responseDone.finish === "Yes");
}

init();