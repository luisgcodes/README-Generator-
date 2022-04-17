// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');


// TODO: Create an array of questions for user input
inquirer
  .prompt([
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
    choices:['GPL', 'MIT', 'APACHE 2.0', 'BSD 3', 'No license'],
},

])
.then(answers => {
    // console.info(answers);
  });



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
    inquirer.prompt.then((data) => {
      const readME = generateMarkdown(data);
      writeToFile
    }

    )
}

// Function call to initialize app
init();
