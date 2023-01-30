const inquirer = require('inquirer');

// module for updating team members
const teamModule = require('../models/team');

const Intern = require('../classes/Intern');

function addIntern() {
  return inquirer
    .prompt([
      {
        name: 'name',
        message: "Please enter the Intern's name.",
        validate: (user_input) => {
          return !user_input.length
            ? 'You must enter at least one character.'
            : true;
        },
      },
      {
        name: 'id',
        type: 'number',
        message: "Please enter the Intern's ID.",
      },
      {
        name: 'email',
        message: "Please enter the Intern's email.",
      },
      {
        name: 'school',
        message: "Please enter the Intern's School.",
      },
    ])
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      teamModule.addMember(intern);
      // console.log(teamModule.team);
    });
}

module.exports = addIntern;
