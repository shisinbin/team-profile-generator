const inquirer = require('inquirer');

const Engineer = require('../Engineer');
const teamModule = require('../models/team');
const validationModule = require('./validation');

// Function for adding an engineer
function addEngineer() {
  return inquirer
    .prompt([
      {
        name: 'name',
        message: "Please enter the engineer's name.",
        validate: validationModule.isNotEmpty,
      },
      {
        name: 'id',
        message: "Please enter the engineer's ID.",
        validate: validationModule.isNumeric,
      },
      {
        name: 'email',
        message: "Please enter the engineer's email.",
        validate: validationModule.isEmail,
      },
      {
        name: 'github',
        message: "Please enter the engineer's GitHub username.",
        validate: validationModule.isNotEmpty,
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.name,
        Number(data.id),
        data.email,
        data.github
      );
      teamModule.addMember(engineer);
      // console.log(teamModule.team);
    });
}

module.exports = addEngineer;
