// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = requirer('inquirer');

// TODO: Create an array of questions for user input
//const questions = [];
inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'discription',
        message: 'describe your project'
    },
    ])


// TODO: Create a function to write README file
fs.writeFile("README.md", process.argv[2], (error) =>{
    if(error){
        return console.log(error)
    }else{
        console.log("file saved")
    }
});
 
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
