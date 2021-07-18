// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const generatorMarkdown = require("../generateMarkdown");

// README file page layout
const generateReadMe = (answers) =>
  `
# Title \n ${answers.Title}

## Description \n ${answers.description} 
\n ### License ${answers.license}

#### Installation Instructions \ n ${answers.installation}

#### Usage Information \n ${answers.usage}

#### Contribution Guidelines \n ${answers.contribution}

#### Test Instructions \n ${answers.test}

## Table of Content \n ${answers.tableOfContents}
`;

// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
    
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'Discription',
        message: 'describe your project?'
    },
    {
        type: 'input',
        name: 'License',
        message: 'choose a license form the list.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'choose a license form the list.'
    }
]);
const tableOfContents = [
    'title',
    'Description',
    'License'
]
tableOfContents.forEach((item, index) =>{
    questions[index].name = item
})
    



// TODO: Create a function to initialize app
.then((answers) =>{
  const ReadMePageContent = generateReadMe(answers);

  fs.writeFile('README.md', ReadMePageContent, (err) =>
  err ? console.log(err) : console.log('Successfully created README.file'))
})









// Function call to initialize app
init();

