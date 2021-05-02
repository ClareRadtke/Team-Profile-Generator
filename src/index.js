"use strict";
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create questions arrays for users
const menuQuestions = [
  {
    type: "confirm",
    message: "Add Manager",
    name: "create-manager",
    default: false,
  },
  {
    type: "confirm",
    message: "Add Employee",
    name: "create-employee",
    default: false,
  },
  {
    type: "confirm",
    message: "Add Engineer",
    name: "create-engineer",
    default: false,
  },
  {
    type: "confirm",
    message: "Add Intern",
    name: "create-intern",
    default: false,
  },
  { type: "confirm", message: "Exit", name: "exit", default: true },
];

const employeeQuestions = [
  { type: "input", message: "Employee name", name: "name" },
  { type: "input", message: "Employee ID number", name: "id" },
  { type: "input", message: "Employee email", name: "email" },
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
