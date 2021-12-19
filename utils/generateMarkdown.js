// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license =>
'[![License: license](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)'


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {

  return `# ${data.title}




  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Contributor](#contributor)
  * [License](#license)
  * [Questions](#questions)
  
 
  ---------------------------------------------------------------------------------



  ## description 
  ${data.description}

 
  ## installation 
  Follow these steps to install this application :-   
   ${data.install}

  ## usage
  ${data.usage}

  ## test

  Instructions for testing  this application :-    
  ${data.test}

  ## contributor
  ${data.contributors}
  

  ## license
  ${renderLicenseBadge(data.license)}


  ## questions
  ${data.questions}

  Email add:  ${data.email}. 

  Follow me on Github at  https://github.com/${data.github}



 
`;
}

module.exports = generateMarkdown;
