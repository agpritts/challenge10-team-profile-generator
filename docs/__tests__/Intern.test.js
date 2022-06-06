const Intern = require ("../lib/Intern")

test ("Set Intern School from constructor", () => {
    const testSchool = "Belmont";
    const employeeE = new Intern("Angie", 1, "angie@email.com", testSchool);
    expect (employeeE.school).toBe(testSchool);
})

test ("Get Intern Title from getTitle()", () => {
    const testTitle = "Intern";
    const employeeE = new Intern("Angie", 1, "angie@email.com", "Belmont");
    expect (employeeE.getTitle()).toBe(testTitle);
})

test ("Get Intern School from getSchool()", () => {
    const testSchool = "Belmont";
    const employeeE = new Intern("Angie", 1, "angie@email.com", testSchool);
    expect (employeeE.getSchool()).toBe(testSchool);
})