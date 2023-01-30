const inquirer = require('inquirer');

const Intern = require('../Intern');
const teamModule = require('../models/team');
const validationModule = require('./validation');

// Function for adding an intern
function addIntern() {
  return inquirer
    .prompt([
      {
        name: 'name',
        message: "Please enter the intern's name.",
        validate: validationModule.isNotEmpty,
      },
      {
        name: 'id',
        message: "Please enter the intern's ID.",
        validate: validationModule.isNumeric,
      },
      {
        name: 'email',
        message: "Please enter the intern's email.",
        validate: validationModule.isEmail,
      },
      {
        name: 'school',
        message: "Please enter the intern's school.",
        validate: validationModule.isNotEmpty,
      },
    ])
    .then((data) => {
      const intern = new Intern(
        data.name,
        Number(data.id),
        data.email,
        data.school
      );
      teamModule.addMember(intern);
      // console.log(teamModule.team);
    });
}

module.exports = addIntern;
