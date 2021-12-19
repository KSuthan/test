// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    // using inquirer to prompt questions to user 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false; 
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(emailInput);
            }
    
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false; 
                }
            }
        }, 
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter steps required to install your project!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a usage description!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'test', 
            message: 'What command should be run to run tests?'
        },
        {
        //checkbox that allows license choice
                type: 'checkbox',
                name: 'license',
                message: 'Please choose a license. (Required)',
                choices: ['GNU AGPLv3', 'GNU GPLv3',
                  'GNU LGPLv3', 'Mozilla Public License 2.0',
                  'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
                  'The Unlicense'],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please choose a license!');
                    return false; 
                }
            }
        },

        {
            type: 'input',
            name: 'contributors',
            message: 'What does the user need to know about contributing to the repo?'
        },

        {
            type: 'input',
            name: 'questions',
            message: 'Please list instructions for those who wish to contact you.',
            validate: (nameInput) => {
              if (nameInput) {
                return true;
              } else {
                return false;
              }
            }
        }
        
    ]);
    };
    


// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
};

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

questions()
// getting user answers 
.then(answers => {
    return generateMarkdown(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// catching errors 
.catch(err => {
    console.log(err)
})