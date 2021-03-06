// Import inquirer, fs, & classes
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Employee = require('./lib/employee')

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
        message: (input) => {
            if (input.role === "Engineer") {
                return `What is ${input.name}'s GITHUB username?`
            } else {
                return `What SCHOOL does/did ${input.name} attend?`
            }
        },
        name: "other",
    }, 
]

// Call startup function to run app
init();

// Function to get info from user
function init() {
    inquirer
        // First ask about Manager info
        .prompt(mgrPrompt)
        .then(input => {
            // console.log(input);

            // Create new manager object using user input
            const mgr = new Manager(input.mgrName, input.mgrId, input.mgrEmail, input. mgrOfficeNum)
            // console.log(mgr);

            // Push new mgr object to empty array
            employees.push(mgr);
            console.log(`${input.mgrName} added to contact page as the Manager!` )

            // Call function to ask the user if they want to add another employee
            choiceToAdd();
        })
}

// Function to determinje if additional employee or end of list
function choiceToAdd() {
    inquirer
        .prompt([
            {
                type: "confirm",
                message: "Do you have another employee you would like to add to this team?",
                name: "addNewEmp"
            }
        ])
        .then(input => {
            // If yes, call function to ask user next set of prompts
            // If no, render html page with user input
            input.addNewEmp ? addEmployee() : renderHTML();
        })
}

// Function to add new employee's info
function addEmployee() {
    inquirer
        // Ask for additional employee info
        .prompt(empPrompt)
        .then(input => {
            // console.log(input)

            if (input.role === "Engineer") {
                const emp = new Engineer(input.name, input.id, input.email, input.other);
                employees.push(emp);
            } else {
                const emp = new Intern(input.name, input.id, input.email, input.other);
                employees.push(emp);
            }
            console.log(`${input.name} added to contact page as an ${input.role}!`)

            // Call function to ask the user if they want to add another employee
            choiceToAdd();
        })
}

// Function to generate new HTML file with team's contact info
function renderHTML() {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- Bootstrap link -->
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
              crossorigin="anonymous"
            />
            <!-- My CSS link -->
            <link rel="stylesheet" href="./assets/css/style.css" />
            <title>Team Contacts</title>
          </head>
          <body>
            <header>
              <h1 class="py-3 py-md-4 display-3 d-flex justify-content-center mb-5 pb-3">
                My Team
              </h1>
            </header>
            <main class="container">
              <div class="card-container row d-flex justify-content-center">
                ${employees.map(employee => employee.renderEmpCard(employee.officeNumber || employee.github || employee.school)).join("\n")}
              </div>
            </main>
          </body>
        </html>
    `;

    fs.writeFileSync("./dist/index.html", html);

    console.log("Team contact page HTML has been created!");
}

