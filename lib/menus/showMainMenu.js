const inquirer = require('inquirer');

const addEngineer = require('../actions/addEngineer');
const addIntern = require('../actions/addIntern');
const handleRender = require('../actions/handleRender');

function showMainMenu() {
  return inquirer
    .prompt({
      name: 'option',
      message: 'Please select an option.',
      type: 'list',
      choices: [
        {
          name: 'Add an engineer',
          value: 'engineer',
        },
        {
          name: 'Add an intern',
          value: 'intern',
        },
        {
          name: 'Finish building team',
          value: 'exit',
        },
      ],
    })
    .then((choice) => {
      switch (choice.option) {
        case 'engineer':
          addEngineer().then(showMainMenu);
          break;
        case 'intern':
          addIntern().then(showMainMenu);
          break;
        default:
          handleRender().then(() => {
            console.log('Thanks for using the Team Profile Generator Pro App!');
            process.exit();
          });
      }
    });
}

module.exports = showMainMenu;
