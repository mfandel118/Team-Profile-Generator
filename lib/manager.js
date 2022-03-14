// Import Employee class
const Employee = require('./employee');

// Create subclass of Manager under class of Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Import key values from Employee class
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    
    // // Method to generate employee card for html
    // renderMgrCard() {
    //     return `
    //         <div class="card shadow-lg col-8 col-md-5 col-xl-3 mt-5 mx-4">
    //             <div class="card-header mt-3">
    //                 <h2>${this.name}</h2>
    //                 <h5>Manager</h5>
    //             </div>
    //             <div class="card-body">
    //                 <ul class="list-group list-group-flush">
    //                     <li class="list-group-item">ID #: ${this.id}</li>
    //                     <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
    //                     <li class="list-group-item">Office #: ${this.officeNumber}</li>
    //                 </ul>
    //             </div>
    //         </div>
    //     `
    // }
    

    // // Overwrite Employee getRole method
    // getRole() {
    //     return "Manager";
    // }
}

// Export Manager class
module.exports = Manager;