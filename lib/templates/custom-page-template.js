// This is a function for generating the team
const generateTeam = (team) => {
  // This is another function within a function....?
  const generateManager = (manager) => {
    return `
        <li class="member-card">
          <div class="member-card-header">
            <div class="name-role">
              <h2>${manager.getName()}</h2>
              <h3>${manager.getRole()}</h3>
            </div>
            <div class="img-role">
              <img
                src="assets/img/manager.svg"
                alt="icon image of role"
                height="50"
                ,
                width="50"
              />
            </div>
          </div>
          <div class="member-card-body">
            <p>ID: #${manager.getId()}</p>
            <p>Office No.: ${manager.getOfficeNumber()}</p>
            <p>
              Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
            </p>
          </div>
        </li>
`;
  };

  // creates the html for engineers
  const generateEngineer = (engineer) => {
    return `
        <li class="member-card">
          <div class="member-card-header">
            <div class="name-role">
              <h2>${engineer.getName()}</h2>
              <h3>${engineer.getRole()}</h3>
            </div>
            <div class="img-role">
              <img
                src="assets/img/code.svg"
                alt="icon image of role"
                height="50"
                ,
                width="50"
              />
            </div>
          </div>
          <div class="member-card-body">
            <p>ID: #${engineer.getId()}</p>
            <p>
              GitHub:
              <a
                href="https://github.com/${engineer.getGithub()}"
                target="_blank"
                rel="noopener noreferrer"
                >${engineer.getGithub()}</a
              >
            </p>
            <p>
              Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
            </p>
          </div>
        </li>
`;
  };

  // creates the html for interns
  const generateIntern = (intern) => {
    return `
        <li class="member-card">
          <div class="member-card-header">
            <div class="name-role">
              <h2>${intern.getName()}</h2>
              <h3>${intern.getRole()}</h3>
            </div>
            <div class="img-role">
              <img
                src="assets/img/intern.svg"
                alt="icon image of role"
                height="50"
                ,
                width="50"
              />
            </div>
          </div>
          <div class="member-card-body">
            <p>ID: #${intern.getId()}</p>
            <p>School: ${intern.getSchool()}</p>
            <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
          </div>
        </li>
`;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === 'Manager')
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === 'Engineer')
      .map((engineer) => generateEngineer(engineer))
      .join('')
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === 'Intern')
      .map((intern) => generateIntern(intern))
      .join('')
  );

  return html.join('');
};

// exports function to generate entire page
module.exports = (team) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Source Code Pro&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="assets/css/style.css" />
    <title>My Team</title>
  </head>
  <body>
    <section id="welcome">
      <div class="welcome-text">
        <h1>My Software Engineering team</h1>
        <h4>Building the Future Together</h4>
      </div>
    </section>

    <section id="team">
      <ul>
        ${generateTeam(team)}
      </ul>
    </section>
  </body>
</html>
`;
};
