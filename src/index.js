"use strict";
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create questions arrays for users
const menuQuestions = [
  {
    type: "confirm",
    message: "Add Manager",
    name: "create-manager",
  },
  {
    type: "confirm",
    message: "Add Engineer",
    name: "create-engineer",
  },
  {
    type: "confirm",
    message: "Add Intern",
    name: "create-intern",
  },
  { type: "confirm", message: "Exit", name: "exit" },
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
  { type: "input", message: "Engineer github profile", name: "github" },
];

const internQuestions = [
  { type: "input", message: "Intern name", name: "name" },
  { type: "input", message: "Intern ID number", name: "id" },
  { type: "input", message: "Intern email", name: "email" },
  { type: "input", message: "Intern's School", name: "school" },
];

// TODO:
// When menuQuestion receives a Y then exit that and enter the respective create-.. questions
// When create-.. questions entered return to menuQuestions and ask again
function questionPrompt() {
  inquirer
    .prompt(menuQuestions)
    .then((answers) => {
      console.log(answers);
      if (answers["create-manager"]) {
        inquirer.prompt(managerQuestions).then((managerAnswers) => {
          console.log(managerAnswers);
        });
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

questionPrompt();

// TODO:
// Write the template HTML code for create-.. questions to be used in
// Write CSS to style the HTML code
// Write tests for each class
