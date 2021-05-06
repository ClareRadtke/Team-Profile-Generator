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
  // {
  //   name: "Me",
  //   id: "33",
  //   email: "me@cat.com",
  //   github: "ClareRadtke",
  //   role: "Engineer",
  // },
];

function generateHTML() {
  console.log(`<!DOCTYPE html>
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

        ${generateManagerCard()}

        ${generateEngineerCard()}

        ${generateInternCard()}

      </container>
    </main>

  </body>
  </html>`);
}
generateHTML();

function generateManagerCard() {
  const managerDetails = responses.find((response) => {
    response.role === "Manager";
    return response;
  });
  // console.log("Manager func: ", managerDetails);
  return `
        <div class="card" style="width: 18rem;">
          <div class="card-body manager">
            <div class="name-and-role">
              <h4 class="card-title">${managerDetails.name}</h5>
              <h5 class="card-subtitle mb-2 fw-normal">Manager</h6>
            </div>
            <div class="card-content">
              <p class="card-text">ID ${managerDetails.id}</p>
              <p class="card-text">Office Number: ${managerDetails.office}</p>
              <p>Email: <a href="mailto:${managerDetails.email}" class="card-link">${managerDetails.email}</a></p>
            </div>
          </div>
        </div>`;
}
// generateManagerCard();

function generateEngineerCard() {
  const engineerDetails = responses.find((response) => {
    if (response.github) return response;
  });
  return `
        <div class="card" style="width: 18rem;">
          <div class="card-body engineer">
            <div class="name-and-role">
              <h4 class="card-title">${engineerDetails.name}</h5>
              <h5 class="card-subtitle mb-2 fw-normal">Engineer</h6>
            </div>
            <div class="card-content">
              <p class="card-text">ID ${engineerDetails.id}</p>
              <p>Email: <a href="mailto:${engineerDetails.email}" class="card-link">${engineerDetails.email}</a></p>
              <p>Github: <a href="https://github.com/${engineerDetails.github}" class="card-link">github.com/${engineerDetails.github}</a></p>
            </div>
          </div>
        </div>`;
}
// generateEngineerCard();

function generateInternCard() {
  const internDetails = responses.find((response) => {
    if (response.school) return response;
  });
  return `
        <div class="card" style="width: 18rem;">
          <div class="card-body intern">
            <div class="name-and-role">
              <h4 class="card-title">${internDetails.name}</h5>
              <h5 class="card-subtitle mb-2 fw-normal">Intern</h6>
            </div>
            <div class="card-content">
              <p class="card-text">ID ${internDetails.id}</p>
              <p class="card-text">School: ${internDetails.school}</p>
              <p>Email: <a href="mailto:${internDetails.email}" class="card-link">${internDetails.email}</a></p>
            </div>
          </div>
        </div>`;
}

// generateInternCard();
