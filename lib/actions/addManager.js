const inquirer = require('inquirer');

// module for updating team members
const teamModule = require('../models/team');

const Manager = require('../Manager');

// validation checks
const isNotEmpty = (value) => {
  if (value.trim().length > 0) {
    return true;
  }
  return 'You must enter at least one character';
};

const isNumeric = (value) => {
  if (!isNaN(value) && !isNaN(parseFloat(value))) {
    return true;
  }
  return 'You must enter a number';
};

// checks if email is in format: <text>@<text>.<text>
const isEmail = (value) => {
  const re = /^[^@]+@[^\.]+\.[^\.]+$/;
  if (re.test(value)) {
    return true;
  }
  return 'You must enter a valid email address';
};

const hasNumbersAndPossiblyHyphens = (value) => {
  const re = /^[0-9-]+$/;
  if (re.test(value)) {
    return true;
  }
  return 'You must enter a valid phone number';
};

function addManager() {
  return inquirer
    .prompt([
      {
        name: 'name',
        message: "Please enter the team manager's name.",
        validate: isNotEmpty,
      },
      {
        name: 'id',
        message: "Please enter the manager's ID.",
        validate: isNumeric,
      },
      {
        name: 'email',
        message: "Please enter the manager's email.",
        validate: isEmail,
      },
      {
        name: 'officeNumber',
        message: "Please enter the manager's office number.",
        validate: hasNumbersAndPossiblyHyphens,
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
