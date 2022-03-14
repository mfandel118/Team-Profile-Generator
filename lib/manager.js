// Import Employee class
const Employee = require('./employee');

// Create subclass of Manager under class of Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Import key values from Employee class
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;
    }

    // // Overwrite Employee getRole method
    // getRole() {
    //     return "Manager";
    // }
}

// Export Manager class
module.exports = Manager;