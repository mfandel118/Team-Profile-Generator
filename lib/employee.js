// establish new class for employees
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
};

// export Employee class
module.exports = Employee;