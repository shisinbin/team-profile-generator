const addManager = require('./lib/actions/addManager');
const showAddTeamMemberMenu = require('./lib/actions/showAddTeamMemberMenu');

function init() {
  console.log(
    'Welcome to the Team Profile Generator Pro App!\n----------------------------------------------'
  );

  addManager().then(showAddTeamMemberMenu);
}

init();
