// module for keeping track of team, adding members, etc

const team = [];

function addMember(member) {
  team.push(member);
}

module.exports = {
  team,
  addMember,
};
