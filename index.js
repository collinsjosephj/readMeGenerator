const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines, what does the user need to know about contributing to the repo?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
        default: 'default: npm test',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// function to write README file
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('Your README.md file was created successfully!')
    );
}

function init() {
    inquirer
    .prompt(questions).then((answers) => {
        console.log('GENERATION README HAS COMMENCED...');
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    })
        .catch((err) => {
            console.log(err);
    });
}

init();
