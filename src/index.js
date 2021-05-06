"use strict";
const inquirer = require("inquirer");
const fs = require("fs");
const { generateHtml } = require("./lib/generateHtml");
const { mainMenuPrompt } = require("./lib/prompts");

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
      if (answer.selection === "Exit")
        console.log("Generating Profiles", responses);
      writeToFile(generateHtml(responses));
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
    answers.role = "Manager";
    responses.push(answers);
    mainMenuPrompt();
  });
}
function engineerPrompt() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    answers.role = "Engineer";
    responses.push(answers);
    mainMenuPrompt();
  });
}
function internPrompt() {
  inquirer.prompt(internQuestions).then((answers) => {
    answers.role = "Intern";
    responses.push(answers);
    mainMenuPrompt();
  });
}

// Generate the html file
function writeToFile(data) {
  fs.writeFile("./exampleIndex.html", data, (err) => {
    if (err) console.error(err);
  });
}
