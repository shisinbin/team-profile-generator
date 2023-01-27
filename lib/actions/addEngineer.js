const inquirer = require('inquirer');

// module for updating team members
const teamModule = require('../team');

const Engineer = require('../Engineer');

function addEngineer() {
  return inquirer
    .prompt([
      {
        name: 'name',
        message: "Please enter the engineer's name.",
        validate: (user_input) => {
          return !user_input.length
            ? 'You must enter at least one character.'
            : true;
        },
      },
      {
        name: 'id',
        type: 'number',
        message: "Please enter the engineer's ID.",
      },
      {
        name: 'email',
        message: "Please enter the engineer's email.",
      },
      {
        name: 'github',
        message: "Please enter the engineer's GitHub username.",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      teamModule.addMember(engineer);
      console.log(teamModule.team);
    });
}

module.exports = addEngineer;
