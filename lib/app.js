// Import shape classes 
const {Circle, Square, Triangle} = require('./shapes');
// Import required module
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'list',
        message: 'What shape would you like to use?',
        name: 'shape',
        default: 'Circle',
        choices: ['Circle', 'Square', 'Triangle']
      },
      {
        type: 'input',
        message: 'What shape fill color would you like to use?',
        name: 'color',
      },
      {
        type: 'input',
        message: 'Enter text for your logo. (max 3 letters)',
        name: 'text',
        validate: (answer) => {
            if (answer.length > 3) {
                return 'Only a max of three letters can be entered'
            }
            return true;
        }
      },
      {
          type: 'input',
          message: 'What text color would you like to use?',
          name: 'textColor',
        },
]


function init() {
inquirer.prompt(questions).then(answers => {
    let data;
    if (answers.shape === 'Circle') {
        data = new Circle(answers.color, answers.text, answers.textColor);
    } else if (answers.shape === 'Square') {
        data = new Square(answers.color, answers.text, answers.textColor);
    } else if (answers.shape === 'Triangle') {
        data = new Triangle(answers.color, answers.text, answers.textColor);
    }
    return fs.writeFile('./examples/logo.svg', data.render(), (err) => {
      if (err) throw err;
    });
  }) 
  .then(() => console.log('Logo was successfully created. Check the examples directory.'));  
};

module.exports = (init);