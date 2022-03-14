// Declare new class for Employees
class Employee {
    constructor(name, id, email, role = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    }; 
    
    // Method to generate employee card for html
    renderEmpCard(other) {
        return `
            <div class="card shadow-lg col-8 col-md-5 col-xl-3 mt-3 mt-md-5 mx-4">
                <div class="card-header mt-3">
                    <h2>${this.name}</h2>
                    <h5>${this.role}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID #: ${this.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${this.email}" target="_blank">${this.email}</a></li>
                        ${this.role === "Intern" ? `<li class="list-group-item" >School: ${other}</li>` : 
                        this.role === "Engineer" ? `<li class="list-group-item">Github: <a href="https://github.com/${other}" target="_blank">${other}</a></li>` : 
                        `<li class="list-group-item">Office #: ${other}</li>`}
                    </ul>
                </div>
            </div>
        `
    }
};

// Export Employee class
module.exports = Employee;