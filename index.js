// Import inquirer, fs, & classes
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Declare prompt variables
const managerPrompt = [
    {
        type: "input",
        message: "What is the project Manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the project Manager's id #?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the project Manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the project Manager's office #?",
        name: "managerOfficeNum"
    },
]

// Function to get info from user
function createTeam() {
    inquirer
        // First ask about Manager info
        .prompt(managerPrompt)
        .then(data => {
            // console.log(data);
        })
}

createTeam();