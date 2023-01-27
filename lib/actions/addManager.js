const inquirer = require('inquirer');

// module for updating team members
const teamModule = require('../team');

const Manager = require('../Manager');

function addManager() {
  return inquirer
    .prompt([
      {
        name: 'name',
        message: "Please enter the team manager's name.",
        validate: (user_input) => {
          return !user_input.length
            ? 'You must enter at least one character.'
            : true;
        },
      },
      {
        name: 'id',
        type: 'number',
        message: "Please enter the manager's ID.",
      },
      {
        name: 'email',
        message: "Please enter the manager's email.",
      },
      {
        name: 'officeNumber',
        message: "Please enter the manager's office number.",
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      teamModule.addMember(manager);
      console.log(teamModule.team);
    });
}

module.exports = addManager;
