// Import inquirer, fs, & classes
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Declare prompt variables
const mgrPrompt = [
    {
        type: "input",
        message: "What is the project Manager's name?",
        name: "mgrName"
    },
    {
        type: "input",
        message: "What is the project Manager's id #?",
        name: "mgrId"
    },
    {
        type: "input",
        message: "What is the project Manager's email?",
        name: "mgrEmail"
    },
    {
        type: "input",
        message: "What is the project Manager's office #?",
        name: "mgrOfficeNum"
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
            console.log(mgr);
        })
}

// Call startup function to run app
init();