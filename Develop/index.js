// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "Project Title",
    message: "What is your project's title?",
},
{
    type: 'input',
    name: 'Description',
    message: 'Provide a short description of your project.',
},
{
    type: 'input',
    name: 'Table of Contents',
    message: 'Provide a table of contents.',
},
{
    type: 'input',
    name: 'Installation',
    message: 'Provide steps required to install your project.',
},
{
    type: 'input',
    name: 'Usage',
    message: 'Provide instructions and examples for use.',
},
{
    type: 'input',
    name: 'Credits',
    message: 'Provide a list of your contributors, if any.'
},
{
    type: 'input',
    name: 'License',
    message: 'Choose a license',
    Choices: ['GPL', 'MIT', 'Apache', 'MS-PL', 'No license'],
},

];
console.log(questions);














// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
