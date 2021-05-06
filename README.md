# Team Profile Generator

Generate a webpage that displays a summary of your team, including contact information and employe ID.

See [team-profiles-sample](/dist/team-profiles-sample.html) for an example of the output of this Generator.

![Video walkthrough of how to use the Team Profile Generator](/resources/images/walkthrough.gif)


## User Story
AS A manager  
I WANT to generate a webpage that displays my team's basic info  
SO THAT I have quick access to their emails and GitHub profiles  

## Acceptance Criteria
GIVEN a command-line application that accepts user input  
WHEN I am prompted for my team members and their information  
THEN an HTML file is generated that displays a nicely formatted team roster based on user input  
WHEN I click on an email address in the HTML  
THEN my default email program opens and populates the TO field of the email with the address  
WHEN I click on the GitHub username  
THEN that GitHub profile opens in a new tab  
WHEN I start the application  
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number  
WHEN I enter the team manager’s name, employee ID, email address, and office number  
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team  
WHEN I select the engineer option  
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu  
WHEN I select the intern option  
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu  
WHEN I decide to finish building my team  
THEN I exit the application, and the HTML is generated  

## Reqirements:
  - [x] Use the Inquirer package
  - [ ] Use Jest package for a suite of unit tests
  - [x] Must have the following classes:
    - [x] Employee
    - [x] Manager
    - [x] Engineer
    - [x] Intern
  - [ ] Each class must pass its own test
  - [x] Application to be invoked from the command line using the node ```bash node src/index.js ``` command
  - [x] A webpage (HTML file) will be generated once the prompts have been completed and exited
  - [x] The webpage will be styled using CSS
  - [ ] Provide a sample HTML file generated using the application
  - [ ] Provide a walkthrough video demonstrating the functionality of the application and passing tests
