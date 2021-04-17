// TODO: Include packages needed for this application
const inquirer = require('inquirer');
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
                choices: ['Apache 2.0', 'MIT', 'Mozilla Public License 2.0'],
                name: 'licenseType',
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
generateREADME = (license, answers) => {
    let output = `
${license}

<h1>${answers.title}</h>

<br>
<hr>

<h1>Description:</h1>
<p>${answers.description}</p>

<br>
<hr>

<h1>Usage:</h1>
<p>${answers.usage}</p>

<br>
<hr>

<h1>How to Install:</h1>
<p>${answers.install}</p>

<br>
<hr>

<h1>Testing Done:</h1>
<p>${answers.tests}</p>

<br>
<hr>

<h1>How to make contributions:</h1>
<p>${answers.contrib}</p>

<br>
<hr>

<h1>For Questions or Contact:</h1>
<a href="${answers.github}"> GitHub:${answers.github}</a>
<br>
<a href="${answers.email}">Email:${answers.email}</a>
    `
    return output;
}

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => writeFileAsync('README.md', generateREADME(generateMarkdown(answers), answers)))
        .then(() => console.log('Successfully wrote to README'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();

