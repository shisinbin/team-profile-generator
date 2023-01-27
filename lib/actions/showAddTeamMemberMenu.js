const inquirer = require('inquirer');

const addEngineer = require('./addEngineer');
const addIntern = require('./addIntern');
const handleRender = require('./handleRender');

function showAddTeamMemberMenu() {
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
          addEngineer().then(showAddTeamMemberMenu);
          break;
        case 'intern':
          addIntern().then(showAddTeamMemberMenu);
          break;
        default:
          handleRender().then(() => {
            console.log('Thanks for using the Team Profile Generator Pro App!');
            process.exit();
          });
      }
    });
}

module.exports = showAddTeamMemberMenu;
