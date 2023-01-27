const path = require('path');
const fs = require('fs').promises;

// render function returns a block of HTML code
const render = require('../../src/page-template');

// module for accessing team members
const teamModule = require('../team');

// path of output folder - got to go two levels up
const OUTPUT_DIR = path.resolve(__dirname, '..', '..', 'output');
// path of the file
const filePath = path.join(OUTPUT_DIR, 'team.html');

function handleRender() {
  const htmlBlock = render(teamModule.team);

  return (
    fs
      // make directory if it doesn't already exist
      .mkdir(OUTPUT_DIR, { recursive: true })
      // write the file
      .then(() => fs.writeFile(filePath, htmlBlock))
      // give some feedback
      .then(() => console.log('File written.'))
      .catch((err) => console.log(err))
  );
}

module.exports = handleRender;
