// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GPL") {
    return `[![License: GPL](https://img.shields.io/static/v1?label=License&message=GPL3.0&color=blueviolet&style=plastic)`;
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }else if (data.license == "APACHE 2.0"){
    badge = "![License](https://img.shields.io/static/v1?label=License&message=APACHE2.0&color=blueviolet&style=plastic)"
  }else if (data.license == "BSD 3"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=BSD3&color=blueviolet&style=plastic)"
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
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
