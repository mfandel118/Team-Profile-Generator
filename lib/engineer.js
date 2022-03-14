// Import Employee class
const Employee = require('./employee');

// Create subclass of Engineer under class of Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Import key values from Employee class
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    // Overwrite Employee getRole method
    getRole() {
        return "Engineer";
    }
}

// Export Engineer class
module.exports = Engineer;