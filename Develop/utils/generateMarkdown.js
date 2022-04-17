// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GPL") {
    return "![License: GPL](https://img.shields.io/static/v1?label=License&message=GPL3.0&color=blueviolet&style=plastic)";
  }else if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }else if (license == "APACHE"){
    return `![License: APACHE](https://img.shields.io/static/v1?label=License&message=APACHE2.0&color=blueviolet&style=plastic)`
  }else if (license == "BSD 3"){
      return `![License: BSD 3](https://img.shields.io/static/v1?label=License&message=BSD3&color=blueviolet&style=plastic)`
  }else if (license === "No license") {
    return ``;
  }
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
  if (!license) {
    return "";
  } else {
    return `License: ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.ProjectTitle}


  ## Description
  ${renderLicenseBadge(data.license)}  
  ${data.Description}
 
  ## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
  ${data.Installation}

## Usage 
  ${data.Usage}

## Credits
  ${data.Credits}

## License
  ${renderLicenseSection(data.License)}
`;
}

module.exports = generateMarkdown;
