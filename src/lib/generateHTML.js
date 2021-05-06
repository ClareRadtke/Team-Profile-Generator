const { Manager, Engineer, Intern } = require("./classes");

function generateHtml(arr) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="./src/dist/styles.css"/>
    <title>Team Profiles</title>
  </head>
  <body>
    <header>
      <h1>My Team Profiles</h1>
    </header>
    <main>
      <container id="profile-container">

        ${generateManagerCards(arr)}

        ${generateEngineerCards(arr)}

        ${generateInternCards(arr)}

      </container>
    </main>

  </body>
  </html>`;
}

function generateManagerCards(arr) {
  const managers = arr.filter((employee) => {
    return employee instanceof Manager;
  });
  return managers
    .map((manager) => {
      return `
        <div class="card" style="width: 18rem;">
          <div class="card-body manager">
            <div class="name-and-role">
              <h4 class="card-title">${manager.name}</h5>
              <h5 class="card-subtitle mb-2 fw-normal">Manager</h6>
            </div>
            <div class="card-content">
              <p class="card-text">ID ${manager.id}</p>
              <p class="card-text">Office Number: ${manager.office}</p>
              <p>Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a></p>
            </div>
          </div>
        </div>`;
    })
    .join(`\n`);
}

function generateEngineerCards(arr) {
  const engineers = arr.filter((employee) => {
    return employee instanceof Engineer;
  });

  return engineers
    .map((engineer) => {
      return `
        <div class="card" style="width: 18rem;">
          <div class="card-body engineer">
            <div class="name-and-role">
              <h4 class="card-title">${engineer.name}</h5>
              <h5 class="card-subtitle mb-2 fw-normal">Engineer</h6>
            </div>
            <div class="card-content">
              <p class="card-text">ID ${engineer.id}</p>
              <p>Email: <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a></p>
              <p>Github: <a href="https://github.com/${engineer.github}" target="_blank" class="card-link">github.com/${engineer.github}</a></p>
            </div>
          </div>
        </div>`;
    })
    .join(`\n`);
}

function generateInternCards(arr) {
  const interns = arr.filter((employee) => {
    return employee instanceof Intern;
  });
  return interns
    .map((intern) => {
      return `
        <div class="card" style="width: 18rem;">
          <div class="card-body intern">
            <div class="name-and-role">
              <h4 class="card-title">${intern.name}</h5>
              <h5 class="card-subtitle mb-2 fw-normal">Intern</h6>
            </div>
            <div class="card-content">
              <p class="card-text">ID ${intern.id}</p>
              <p class="card-text">School: ${intern.school}</p>
              <p>Email: <a href="mailto:${intern.email}" class="card-link">${intern.email}</a></p>
            </div>
          </div>
        </div>`;
    })
    .join(`\n`);
}

module.exports.generateHtml = generateHtml;
