const path = require('path');
const fs = require('fs').promises;

// const render = require('../../src/page-template');

// returns a block of HTML code
const customRender = require('../templates/custom-page-template');

// module for accessing team members
const teamModule = require('../models/team');

// path of output folder - got to go two levels up
const OUTPUT_DIR = path.resolve(__dirname, '..', '..', 'output');
// then I just graft on the chosen filename to compelte the path
const filePath = path.join(OUTPUT_DIR, 'team.html');

// Function for handling the rendering of the file
function handleRender() {
  const htmlBlock = customRender(teamModule.team);

  // cool way of getting output to show dots before writing the file
  // (maybe more effort than it's worth)
  return new Promise((resolve) => {
    let dots = '';
    process.stdout.write('Generating file');
    const intervalId = setInterval(() => {
      dots += '.';
      if (dots.length >= 3) {
        clearInterval(intervalId);
        resolve();
      }
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write('Generating file' + dots);
    }, 500);
  })
    .then(() => fs.writeFile(filePath, htmlBlock))
    .then(() => console.log(' file successfully generated!'))
    .catch((err) => console.log(err));
}

module.exports = handleRender;
