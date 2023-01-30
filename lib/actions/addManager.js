const inquirer = require('inquirer');

const Manager = require('../Manager');
const teamModule = require('../models/team');
const validationModule = require('./validation');

// Function for adding a manager
function addManager() {
  return inquirer
    .prompt([
      {
        name: 'name',
        message: "Please enter the team manager's name.",
        validate: validationModule.isNotEmpty,
      },
      {
        name: 'id',
        message: "Please enter the manager's ID.",
        validate: validationModule.isNumeric,
      },
      {
        name: 'email',
        message: "Please enter the manager's email.",
        validate: validationModule.isEmail,
      },
      {
        name: 'officeNumber',
        message: "Please enter the manager's office number.",
        validate: validationModule.hasNumbersAndPossiblyHyphensAndOrSpaces,
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.name,
        Number(data.id),
        data.email,
        data.officeNumber
      );
      teamModule.addMember(manager);
      // console.log(teamModule.team);
    });
}

module.exports = addManager;
