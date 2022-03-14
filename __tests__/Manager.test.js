// Import Manager class
const Manager = require('../lib/manager');

// Test Engineer class
describe("TEST FOR MANAGER CLASS", () => {
    it("Should instantiate and create a Manager object", () => {
        const emp = new Manager();
        expect(typeof emp).toBe("object")       
    });

    // Test method to override role property for Manager class
    it("Should override and return 'Manager' when the getRole method is called", () => {
        const name = "Missy";
        const id = 24;
        const email = "mfandel118@gmail.com";
        const github = "mfandel118";
        const emp = new Manager(name, id, email, github);
        expect(emp.getRole()).toEqual("Manager");
    })
})