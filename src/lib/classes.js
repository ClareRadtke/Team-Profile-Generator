class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
const employee = new Employee("Oscar", 3, "oscar@cat.com");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
const manager = new Manager("Tom", 1, "toml@cat.com", 27);

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
const engineer = new Engineer(
  "Lil Tommy",
  2,
  "lilTommy@cat.com",
  "https://github.com/lilTommy"
);

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
const intern = new Intern(
  "Kenzie",
  4,
  "Kenzie@cat.com",
  "School of hard knocks"
);

module.exports = {
  Employee,
  Manager,
  Engineer,
  Intern,
};
