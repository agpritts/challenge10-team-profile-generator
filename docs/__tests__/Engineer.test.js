const Engineer = require ("../lib/Engineer")

test ("Set Engineer GitHub from constructor", () => {
    const testGH = "agpritts";
    const employeeE = new Engineer("Noah", 1, "noah@email.com", testGH);
    expect (employeeE.github).toBe(testGH);
})

test ("Get Engineer Title from getTitle()", () => {
    const testTitle = "Engineer";
    const employeeE = new Engineer("Noah", 1, "noah@email.com", "agpritts");
    expect (employeeE.getTitle()).toBe(testTitle);
})

test ("Get Engineer GitHub from getGithub()", () => {
    const testGH = "agpritts";
    const employeeE = new Engineer("Noah", 1, "noah@email.com", testGH);
    expect (employeeE.getGithub()).toBe(testGH);
})