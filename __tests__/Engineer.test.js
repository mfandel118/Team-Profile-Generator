// Import Engineer class
const Engineer = require('../lib/engineer');

// Test Engineer class
describe("TEST FOR ENGINEER CLASS", () => {
    it("Should instantiate and create an Engineer object", () => {
        const emp = new Engineer();
        expect(typeof emp).toBe("object")       
    });

    // Test properties unique to Engineer class
    it("Should have a github property when instantiated with a github parameter", () => {
        const name = "Missy";
        const id = 24;
        const email = "mfandel118@gmail.com";
        const github = "mfandel118";
        const emp = new Engineer(name, id, email, github);
        expect(emp.github).toEqual(github);
    })

    // Test methods unique to Engineer class
    it("Should return the github property when getGithub method is invoked", () => {
        const name = "Missy";
        const id = 24;
        const email = "mfandel118@gmail.com";
        const github = "mfandel118";
        const emp = new Engineer(name, id, email, github);
        expect(emp.getGithub()).toEqual(github);
    })

    it("Should override and return 'Engineer' when the getRole method is called", () => {
        const name = "Missy";
        const id = 24;
        const email = "mfandel118@gmail.com";
        const github = "mfandel118";
        const emp = new Engineer(name, id, email, github);
        expect(emp.getRole()).toEqual("Engineer");
    })
})