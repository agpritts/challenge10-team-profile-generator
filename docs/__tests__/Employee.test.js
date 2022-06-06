const Employee = require ("../lib/Employee")

test ("New Employee created", () => {
    const employeeE = new Employee();
    expect (typeof(employeeE)).toBe("object");
})

test ("Set Employee Name from constructor", () => {
    const name = "Adam";
    const employeeE = new Employee(name);
    expect (employeeE.name).toBe(name);
})

test ("Set different Employee Name from constructor", () => {
    const name = "Robert";
    const employeeE = new Employee(name);
    expect (employeeE.name).toBe(name);
})

test ("Set Employee ID from constructor", () => {
    const testID = 01010;
    const employeeE = new Employee("Adam", testID);
    expect (employeeE.id).toBe(testID);
})

test ("Set different Employee ID from constructor", () => {
    const testID = 23432;
    const employeeE = new Employee("Adam", testID);
    expect (employeeE.id).toBe(testID);
})

test ("Set Employee Email from constructor", () => {
    const testEmail = "adam@email.com";
    const employeeE = new Employee("Adam", 1, testEmail);
    expect (employeeE.email).toBe(testEmail);
})

test ("Set different Employee Email from constructor", () => {
    const testEmail = "robert@coolweb.com";
    const employeeE = new Employee("Adam", 1, testEmail);
    expect (employeeE.email).toBe(testEmail);
})

test ("Get Employee Name from getName()", () => {
    const testName = "Adam";
    const employeeE = new Employee(testName);
    expect (employeeE.getName()).toBe(testName);
})

test ("Get different Employee Name from getName()", () => {
    const testName = "Yuri";
    const employeeE = new Employee(testName);
    expect (employeeE.getName()).toBe(testName);
})

test ("Get Employee ID from getID()", () => {
    const testID = 10101;
    const employeeE = new Employee("Adam", testID);
    expect (employeeE.getID()).toBe(testID);
})

test ("Get different Employee ID from getID()", () => {
    const testID = 98789;
    const employeeE = new Employee("Adam", testID);
    expect (employeeE.getID()).toBe(testID);
})

test ("Get Employee Email from getEmail()", () => {
    const testEmail = "adam@email.com";
    const employeeE = new Employee("Adam", 1, testEmail);
    expect (employeeE.getEmail()).toBe(testEmail);
})

test ("Get different Employee Email from getEmail()", () => {
    const testEmail = "yuri@folx.com";
    const employeeE = new Employee("Adam", 1, testEmail);
    expect (employeeE.getEmail()).toBe(testEmail);
})

test ("Get Employee Title from getTitle()", () => {
    const testTitle = "Employee";
    const employeeE = new Employee("Adam", 1, "adam@email.com");
    expect (employeeE.getTitle()).toBe(testTitle);
})

test ("Get different Employee Title from getTitle()", () => {
    const testTitle = "Manager";
    const employeeE = new Employee("Adam", 1, "adam@email.com");
    expect (employeeE.getTitle()).toBe(testTitle);
})