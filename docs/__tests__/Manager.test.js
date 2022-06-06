const Manager = require ("../lib/Manager")
// const Employee = require ("../lib/Employee")

test ("Set Manager Office Number from constructor", () => {
    const testOffice = 1010;
    const employeeE = new Manager("Adam", 1, "adam@email.com", testOffice);
    expect (employeeE.officeNumber).toBe(testOffice);
})

test ("Get Manager Title from getTitle()", () => {
    const testTitle = "Manager";
    const employeeE = new Manager("Adam", 1, "adam@email.com");
    expect (employeeE.getTitle()).toBe(testTitle);
})

test ("Get Manager Office Number from getOfficeNumber()", () => {
    const testOffice = 2345;
    const employeeE = new Manager("Adam", 1, "adam@email.com", testOffice);
    expect (employeeE.getOfficeNumber()).toBe(testOffice);
})