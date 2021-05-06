const responses = [
  { name: "tom", id: "1", email: "tom@cat.com", office: "27", role: "Manager" },
  {
    name: "Kenzie",
    id: "2",
    email: "kenken@cat.com",
    github: "ClareRadtke",
    role: "Engineer",
  },
  {
    name: "Oscar",
    id: "3",
    email: "occo@cat.com",
    school: "Monash",
    role: "Intern",
  },
  {
    name: "Me",
    id: "33",
    email: "me@cat.com",
    github: "ClareRadtke",
    role: "Engineer",
  },
];

function generateHtml(arr) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css"/>
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
  const managers = arr.filter((response) => {
    if (response.office) return response;
  });
  let templateArr = [];
  for (i = 0; i < managers.length; i++) {
    const htmlTemplate = `
        <div class="card" style="width: 18rem;">
          <div class="card-body manager">
            <div class="name-and-role">
              <h4 class="card-title">${managers[i].name}</h5>
              <h5 class="card-subtitle mb-2 fw-normal">Manager</h6>
            </div>
            <div class="card-content">
              <p class="card-text">ID ${managers[i].id}</p>
              <p class="card-text">Office Number: ${managers[i].office}</p>
              <p>Email: <a href="mailto:${managers[i].email}" class="card-link">${managers[i].email}</a></p>
            </div>
          </div>
        </div>`;
    templateArr.push(htmlTemplate);
  }
  return templateArr.join(`\n`);
}

function generateEngineerCards(arr) {
  const engineers = arr.filter((response) => {
    if (response.github) return response;
  });
  let templateArr = [];
  for (i = 0; i < engineers.length; i++) {
    const htmlTemplate = `
        <div class="card" style="width: 18rem;">
          <div class="card-body engineer">
            <div class="name-and-role">
              <h4 class="card-title">${engineers[i].name}</h5>
              <h5 class="card-subtitle mb-2 fw-normal">Engineer</h6>
            </div>
            <div class="card-content">
              <p class="card-text">ID ${engineers[i].id}</p>
              <p>Email: <a href="mailto:${engineers[i].email}" class="card-link">${engineers[i].email}</a></p>
              <p>Github: <a href="https://github.com/${engineers[i].github}" class="card-link">github.com/${engineers[i].github}</a></p>
            </div>
          </div>
        </div>`;
    templateArr.push(htmlTemplate);
  }
  const engineerHtmlOutput = templateArr.join(`\n`);
  return engineerHtmlOutput;
}

function generateInternCards(arr) {
  const interns = arr.filter((response) => {
    if (response.school) return response;
  });
  let templateArr = [];
  for (i = 0; i < interns.length; i++) {
    const htmlTemplate = `
        <div class="card" style="width: 18rem;">
          <div class="card-body intern">
            <div class="name-and-role">
              <h4 class="card-title">${interns[i].name}</h5>
              <h5 class="card-subtitle mb-2 fw-normal">Intern</h6>
            </div>
            <div class="card-content">
              <p class="card-text">ID ${interns[i].id}</p>
              <p class="card-text">School: ${interns[i].school}</p>
              <p>Email: <a href="mailto:${interns[i].email}" class="card-link">${interns[i].email}</a></p>
            </div>
          </div>
        </div>`;
    templateArr.push(htmlTemplate);
  }
  return templateArr.join(`\n`);
}

module.exports.generateHtml = generateHtml;
