// Import Manager class
const Manager = require('../lib/manager');

// Test Engineer class
describe("TEST FOR MANAGER CLASS", () => {
    it("Should instantiate and create a Manager object", () => {
        const emp = new Manager();
        expect(typeof emp).toBe("object")       
    });

    // Test properties unique to Manager class
    it("Should have a officeNumber property when instantiated with a officeNumber parameter", () => {
        const name = "Missy";
        const id = 24;
        const email = "mfandel118@gmail.com";
        const officeNumber = 118;
        const emp = new Manager(name, id, email, officeNumber);
        expect(emp.officeNumber).toEqual(officeNumber);
    })

    // Test methods unique to Manager class
    it("Should return the officeNumber property when getOfficeNumber method is invoked", () => {
        const name = "Missy";
        const id = 24;
        const email = "mfandel118@gmail.com";
        const officeNumber = 118;
        const emp = new Manager(name, id, email, officeNumber);
        expect(emp.getOfficeNumber()).toEqual(officeNumber);
    })

    it("Should override and return 'Manager' when the getRole method is called", () => {
        const name = "Missy";
        const id = 24;
        const email = "mfandel118@gmail.com";
        const officeNumber = 118;
        const emp = new Manager(name, id, email, officeNumber);
        expect(emp.getRole()).toEqual("Manager");
    })
})