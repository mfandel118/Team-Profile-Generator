// Import inquirer, fs, & classes
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Declare empty array for employees to be added to
const employees = [];

// Declare prompt variables
const mgrPrompt = [
    {
        type: "input",
        message: "What is the project Manager's NAME?",
        name: "mgrName"
    },
    {
        type: "input",
        message: "What is the project Manager's ID #?",
        name: "mgrId"
    },
    {
        type: "input",
        message: "What is the project Manager's EMAIL?",
        name: "mgrEmail"
    },
    {
        type: "input",
        message: "What is the project Manager's OFFICE #?",
        name: "mgrOfficeNum"
    },
]
const empPrompt = [
     {
        type: "list",
        message: "What is this employee's ROLE?",
        name: "role",
        choices: ["Engineer", "Intern"]
    },
    {
        type: "input",
        message: (input) => `What is this ${input.role}'s NAME?`,
        name: "name",
    },
    {
        type: "input",
        message: (input) => `What is ${input.name}'s ID #?`,
        name: "id",
    },
    {
        type: "input",
        message: (input) => `What is ${input.name}'s EMAIL?`,
        name: "email",
    }, 
    {
        type: "input",
        message: (input) => `What is ${input.name}'s GITHUB username?`,
        name: "github",
        when: (input) => input.role === "Engineer",
    }, 
    {
        type: "input",
        message: (input) => `What SCHOOL does ${input.name} attend?`,
        name: "school",
        when: (input) => input.role === "Intern",
    }, 
]

// Function to get info from user
function init() {
    inquirer
        // First ask about Manager info
        .prompt(mgrPrompt)
        .then(data => {
            // console.log(data);

            // Create new manager object using user input
            const mgr = new Manager(data.mgrName, data.mgrId, data.mgrEmail, data. mgrOfficeNum)
            // console.log(mgr);

            // Push new mgr object to empty array
            employees.push(mgr);

            // Add new object to html

            // Ask the user if they want to add another employee

            // Call function to ask user next set of prompts
            addEmployee();
        })
}

function addEmployee() {

}

// Call startup function to run app
init();