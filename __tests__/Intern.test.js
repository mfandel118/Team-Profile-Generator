// Import Intern class
const Intern = require('../lib/intern');

// Test Intern class
describe("TEST FOR INTERN CLASS", () => {
    it("Should instantiate and create an Intern object", () => {
        const emp = new Intern();
        expect(typeof emp).toBe("object")       
    });

    // Test properties unique to Intern class
    it("Should have a github property when instantiated with a github parameter", () => {
        const name = "Missy";
        const id = 24;
        const email = "mfandel118@gmail.com";
        const school = "Notre Dame";
        const emp = new Intern(name, id, email, school);
        expect(emp.school).toEqual(school);
    })

    // Test methods unique to Intern class
    it("Should return the github property when getGithub method is invoked", () => {
        const name = "Missy";
        const id = 24;
        const email = "mfandel118@gmail.com";
        const school = "Notre Dame";
        const emp = new Intern(name, id, email, school);
        expect(emp.getSchool()).toEqual(school);
    })

    it("Should override and return 'Intern' when the getRole method is called", () => {
        const name = "Missy";
        const id = 24;
        const email = "mfandel118@gmail.com";
        const school = "Notre Dame";
        const emp = new Intern(name, id, email, school);
        expect(emp.getRole()).toEqual("Intern");
    })
})