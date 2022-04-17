// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions =[
{
    type: "input",
    name: 'ProjectTitle',
    message: "What is your project's title?",
},
{
    type: 'input',
    name: 'Description',
    message: 'Provide a short description of your project.',
},
{
    type: 'input',
    name: 'tableOfContents',
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
    type: 'checkbox',
    name: 'License',
    message: 'Choose a license badge',
    choices:['GPL', 'MIT', 'APACHE', 'BSD 3', 'No license'],
},

]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File Created!");
        }
      });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const pageReadME = generateMarkdown(data);
    writeToFile("./Read/ReadME.md", pageReadME);
  });
}

// Function call to initialize app
init();
