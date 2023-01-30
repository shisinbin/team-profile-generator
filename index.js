const addManager = require('./lib/actions/addManager');
const showMainMenu = require('./lib/menus/showMainMenu');

function init() {
  console.log(
    'Welcome to the Team Profile Generator Pro App!\n----------------------------------------------'
  );

  addManager().then(showMainMenu);
}

init();
