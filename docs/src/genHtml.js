const generateHTML = function (teamString) {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    </head>
    
    <body>
        
    <div class="header text-center" style="color: white; padding-top: 100px; padding-bottom: 100px; background-color:#ce4846">
        <div class="">
            <h1>My Team</h1>
        </div>
    </div>
    
    <div class="container-body container-fluid">
        <div class="row">
        ${teamString} 
    </div>
</div>

</body>

</html>`

}

const generateCard = function (arr) {

    let titleInfo;

    if (arr.title === "Manager") {
        titleInfo = `Office Number: ${arr.officeNumber}`
    } else if (arr.title === "Engineer") {
        titleInfo = `GitHub Username: <a href="https://github.com/${arr.github}" target="_blank">${arr.github}</a>`
    } else if (arr.title === "Intern") {
        titleInfo = `School: ${arr.school}`
    }

    return `
    
<div class="col-md-4 col-sm-6 col-12 col-lg-3">    
    <div class="card shadow-lg mb-5 bg-white rounded">
        <div class="card-header bg-primary">
            <h3 class="text-white text-center">${arr.name}</h3>  
            <h4 class="text-white text-center">${arr.title}</h4>
        </div>

        <div class="card-body">
            <ul class="list-unstyled">
                <li>Employee ID: ${arr.id}</li>
                <li>Email: <a href="mailto:${arr.email}">${arr.email}</a></li>
                <li>${titleInfo}</li>
            </ul>
        </div>
    </div>
</div>
`
}

// module.exports = generateHTML;
// module.exports = generateCard;

exports.generateHTML = generateHTML;
exports.generateCard = generateCard;