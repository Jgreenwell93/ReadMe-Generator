// TODO: Include packages needed for this application
const questionPrompts = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// create writeFile function using promises
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                message: 'What is the name of your project?',
                name: 'title',
            },
            {
                type: 'list',
                message: 'What is your license type?',
                choices: ['', '', ''],
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
        ]
    )
}


// TODO: Create a function to write README file
function generateREADME(fileName, data) { }

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => module.exports = answers.licenseType)
        .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
        .then(() => console.log('Successfully wrote to README'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
