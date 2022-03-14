// Import Employee class
const Employee = require('./employee');

// Create subclass of Engineer under class of Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Import key values from Employee class
        super(name, id, email, "Engineer");
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    // Method to generate employee card for html
    renderEngCard() {
        return `
            <div class="card shadow-lg col-8 col-md-5 col-xl-3 mt-5 mx-4">
                <div class="card-header mt-3">
                    <h2>${this.name}</h2>
                    <h5>Engineer</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID #: ${this.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${this.github}">${this.github}</a></li>
                    </ul>
                </div>
            </div>
        `
    }

    // // Overwrite Employee getRole method
    // getRole() {
    //     return "Engineer";
    // }
}

// Export Engineer class
module.exports = Engineer;