// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "Project Title",
    message: "What is your project's title?",
    validate: projectInput => {
    if(projectInput){
        return true;
    }else{
        console.log("Please enter your project title");
        return false;
      }
    }
},
{
    type: 'input',
    name: 'Description',
    message: 'Provide a short description of your project',
    validate: descripInput => {
        if(descripInput){
            return true;
        }else{
            console.log("Please enter your project's description");
            return false;
        }
    }
},

];
console.log(questions);














// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
