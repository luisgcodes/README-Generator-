// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None'){
    return '';
}
    return `![GitHub license](https://img.shields.io/badge/License-${license}-red.svg)`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    return "* [License](#license)";
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return  '';
  } else {
    return `This project is licensed under ${license}. `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.ProjectTitle}


  ${renderLicenseBadge(data.license)}


  ## Description  
  ${data.Description}
 
  ## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Test](#test)
* [License](#license)

## Installation
  ${data.Installation}

## Usage 
  ${data.Usage}

## Credits
  ${data.Credits}

## Test
  ${data.Test}

## License
  ${renderLicenseSection(data.license)}

## Questions
 If you have any questions you can reach me here:
### GitHub Username
  ${data.githubUsername}
### GitHub Link
  ${data.githubLink}
### Email
  ${data.email}
`;
}

module.exports = generateMarkdown;
