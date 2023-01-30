// Module for keeping track of team and adding members to it

const team = [];

function addMember(member) {
  team.push(member);
}

module.exports = {
  team,
  addMember,
};
