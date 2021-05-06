"use strict";
const inquirer = require("inquirer");
const fs = require("fs");
const { generateHtml } = require("./lib/generateHtml");
const { Manager, Engineer, Intern } = require("./lib/classes");

// Question arrays for Inquirer Prompts
const menuQuestions = [
  {
    type: "list",
    message: "What employee would you like to add?",
    name: "selection",
    choices: ["Manager", "Engineer", "Intern", "Exit"],
  },
];
const managerQuestions = [
  { type: "input", message: "Manager name", name: "name" },
  { type: "input", message: "Manager ID number", name: "id" },
  { type: "input", message: "Manager email", name: "email" },
  { type: "input", message: "Manager office number", name: "office" },
];
const engineerQuestions = [
  { type: "input", message: "Engineer name", name: "name" },
  { type: "input", message: "Engineer ID number", name: "id" },
  { type: "input", message: "Engineer email", name: "email" },
  { type: "input", message: "Engineer github username", name: "github" },
];
const internQuestions = [
  { type: "input", message: "Intern name", name: "name" },
  { type: "input", message: "Intern ID number", name: "id" },
  { type: "input", message: "Intern email", name: "email" },
  { type: "input", message: "Intern's School", name: "school" },
];

// Array to store all responses within
const responses = [];

function init() {
  mainMenuPrompt();
}
init();

// Main menu & navigation prompt
function mainMenuPrompt() {
  inquirer
    .prompt(menuQuestions)
    .then((answer) => {
      console.log(answer);
      if (answer.selection === "Manager") managerPrompt();
      if (answer.selection === "Engineer") engineerPrompt();
      if (answer.selection === "Intern") internPrompt();
      if (answer.selection === "Exit") {
        console.log("Generating Profiles", responses);
        writeToFile(generateHtml(responses));
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error("tty error");
      } else {
        console.error(error);
      }
    });
}

// Individual employee prompts
function managerPrompt() {
  inquirer.prompt(managerQuestions).then((answers) => {
    console.log("answers: ", answers);
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.office
    );
    responses.push(manager);
    mainMenuPrompt();
  });
}
function engineerPrompt() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    responses.push(engineer);
    mainMenuPrompt();
  });
}
function internPrompt() {
  inquirer.prompt(internQuestions).then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    responses.push(intern);
    mainMenuPrompt();
  });
}

// Generate the html file
function writeToFile(data) {
  fs.writeFile("./exampleIndex.html", data, (err) => {
    if (err) console.error(err);
  });
}
