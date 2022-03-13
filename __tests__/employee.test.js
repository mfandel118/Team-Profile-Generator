// import employee class
const Employee = require('../lib/employee');

// Test Employee class
describe("TEST FOR EMPLOYEE CLASS", () => {
    it("Should create an employee object", () => {
        const emp = new Employee();
        expect(typeof emp).toBe("object")       
    })
})