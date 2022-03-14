// Import Employee class
const Employee = require('./employee');

// Create subclass of Intern under class of Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        // Import key values from Employee class
        super(name, id, email, "Intern");
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    // // Overwrite Employee getRole method
    // getRole() {
    //     return "Intern";
    // }
}

// Export Intern class
module.exports = Intern;