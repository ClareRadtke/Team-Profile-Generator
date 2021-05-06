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

// function generateHTML () {
//   return `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
//     <link rel="stylesheet" href="styles.css"/>
//     <title>Team Profiles</title>
//   </head>
//   <body>
//     <header>
//       <h1>My Team Profiles</h1>
//     </header>
//     <main>
//       <container id="profile-container">
//         ${}
//       </container>
//     </main>

//   </body>
//   </html>`
// }

function generateManagerCard(arr) {
  const managerDetails = arr.find((response) => {
    response.role === "Manager";
    return response;
  });
  console.log(managerDetails);
  console.log(`<div class="card" style="width: 18rem;">
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
</div>`);
}
generateManagerCard(responses);

// function generateEngineerCard(opts) {

//   return `<div class="card" style="width: 18rem;">
//   <div class="card-body engineer">
//     <div class="name-and-role">
//       <h4 class="card-title">${}</h5>
//       <h5 class="card-subtitle mb-2 fw-normal">Engineer</h6>
//     </div>
//     <div class="card-content">
//       <p class="card-text">ID ${}</p>
//       <p>Email: <a href="mailto:${}" class="card-link">${}</a></p>
//       <p>Github: <a href="https://github.com/${}" class="card-link">github.com/${}</a></p>
//     </div>
//   </div>
// </div>`
// }

// function generateInternCard(opts) {

//   return `<div class="card" style="width: 18rem;">
//   <div class="card-body intern">
//     <div class="name-and-role">
//       <h4 class="card-title">${}</h5>
//       <h5 class="card-subtitle mb-2 fw-normal">Intern</h6>
//     </div>
//     <div class="card-content">
//       <p class="card-text">ID ${}</p>
//       <p class="card-text">School: ${}</p>
//       <p>Email: <a href="mailto:${}" class="card-link">${}</a></p>
//     </div>
//   </div>
// </div>`
// }
