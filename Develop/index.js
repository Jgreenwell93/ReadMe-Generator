// TODO: Include packages needed for this application
const questionPrompts = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions=[
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
      },
      {
        type: 'list',
        message: 'What is your license type?',
        choices: ['','',''],
        name: 'licenseType',
      },
      {
        type: 'input',
        message: 'What is your license code?',
        name: 'license',
      },
      {
        type: 'input',
        message: 'Please provide a brief description of your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What is the usage of this project?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'How would a user install this project?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'What type of tests have been run on the project?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'How would other developers make contributions to this project?',
        name: 'contrib',
      },
      {
        type: 'input',
        message: 'Please provide your gitHub profile link.',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Please provide your email address.',
        name: 'email',
      },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
