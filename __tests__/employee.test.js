// Import employee class
const Employee = require('../lib/employee');

// Test Employee class
describe("TEST FOR EMPLOYEE CLASS", () => {

    it("Should instantiate and create an employee object", () => {
        const emp = new Employee();
        expect(typeof emp).toBe("object")       
    });

    it("Should have a name property when instantiated with a name parameter", () => {
        const name = "Missy";
        const emp = new Employee(name);
        expect(emp.name).toEqual(name);
    })

    it("Should have an id property when instantiated with an id parameter", () => {
        const name = "Missy";
        const id = 24;
        const emp = new Employee(name, id);
        expect(emp.id).toEqual(id);
    })
})