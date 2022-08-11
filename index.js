//Include Class Modules
//const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const buildHTMLFile = require('./src/generateHTML');
const fileLoc = './dist/index.html';

//Include Packages
const fs = require('fs');
const inquirer = require('inquirer');

let employeeList;
//list of employee objects goes in this list
let printToFile;
//the string used to print the html file

//the questions array for the manager
const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your Team Manager\'s Name?',
      validate(answer) {
        if(!answer) {
            return "Please, enter a name!"
        }
        return true
      },
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your Manager\'s Employee ID?',
      validate(answer) {
        if(!answer) {
            return "Please, enter an Employee ID!"
        }
        return true
      },
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your Manager\'s Email Address?',
      validate(answer) {
        if(!answer.includes('@')) {
            return `Please, enter a valid Email! - You have entered ${answer}`
        }
        return true
      },
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your Manager\'s Office Number?',
    },
 ];
//the questions array for the engineer
  const engineerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your Engineer\'s Name?',
      validate(answer) {
        if(!answer) {
            return "Please, enter a name!"
        }
        return true
      },
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your Engineer\'s Employee ID?',
      validate(answer) {
        if(!answer) {
            return "Please, enter an Employee ID!"
        }
        return true
      },
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your Engineer\'s Email Address?',
      validate(answer) {
        if(!answer.includes('@')) {
            return `Please, enter a valid Email! - You have entered ${answer}`
        }
        return true
      },
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'What is your Engineer\'s GitHub Username?',
      validate(answer) {
        if(!answer) {
            return "Please, enter a GitHub Username!"
        }
        return true
      },
    },
  ];
//the questions array for the intern
  const interQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your Intern\'s Name?',
      validate(answer) {
        if(!answer) {
            return "Please, enter a name!"
        }
        return true
      },
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your Intern\'s Employee ID?',
      validate(answer) {
        if(!answer) {
            return "Please, enter an Employee ID!"
        }
        return true
      },
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your Intern\'s Email Address?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is your Intern\'s School?',
      validate(answer) {
        if(!answer) {
            return `Please, enter a school`
        }
        return true
      },
    },
  ];
//the questions array to ask the user what to do next
  const employeeQuery = [
    {
      type: 'list',
      name: 'query',
      message: 'What would you like to do now...',
      choices: ['add Engineer','add Intern','Im finished building my team'],
    },
  ];

  //writes the string template to the file
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : null
      );
  }

  //these three functions call the generateHTML file to build their object cards and add them to the string template
  function addManagerCard(manager){
    printToFile += buildHTMLFile.generateHTMLCardManager(manager.getName(), manager.getId(), manager.getEmail(), manager.getOfficeNumber());
  }

  function addEngineerCard(engineer){
    printToFile += buildHTMLFile.generateHTMLCardEngineer(engineer.getName(), engineer.getId(), engineer.getEmail(), engineer.getGithub());
  }

  function addInternCard(intern){
    printToFile += buildHTMLFile.generateHTMLCardIntern(intern.getName(), intern.getId(), intern.getEmail(), intern.getSchool());
  }

  //cycles through the list of employees from input to call the methods to build each card
  function buildEmployeeCards(){
    for(let i=0; i<employeeList.length;i++){
      switch (employeeList[i].getRole()) {
        case 'Manager':
          addManagerCard(employeeList[i]);
          break;
        case 'Engineer':
          addEngineerCard(employeeList[i]);
          break;
        case 'Intern':
          addInternCard(employeeList[i]);
          break;
      }
    }
  }

  //this method is called when the user has finihed to build the output html file
  function buildHTML(){
    //writes the header
    printToFile += buildHTMLFile.generateHTMLPageHeader();
    //builds the content cards
    buildEmployeeCards();
    //writes the end of the file
    printToFile += buildHTMLFile.generateHTMLPageEnd();
    writeToFile(fileLoc, printToFile);

  }

  //the first question is the manager, so this method asks the manager questions, then uses recursion to ask if the user would like to continue
  function getManager(){
    inquirer
    .prompt(managerQuestions)
    //wait for response to all question and then use answers
    .then((answers) => {
      //create manager object from answer
      const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
      //add object to list of employees
      employeeList.push(newManager);
      //use recursion to ask if the user will continue
      continueBuilding();
    });
  }

  //this method asks the user what they want to do now
  function continueBuilding(){
    inquirer
    .prompt(employeeQuery)
    //wait for response to all question and then use answers
    //this finds the answer for what the user want to do and uses recursion to perform that choice
    .then((answers) => {
      if(answers.query == 'add Engineer'){
        addEngineer();
      }else if (answers.query == 'add Intern'){
        addIntern();
      }else{
        buildHTML();
      }
    });
  }
 
  //this method asks the engineer questions, then uses recursion to ask if the user would like to continue
  function addEngineer(){
    inquirer
    .prompt(engineerQuestions)
    //wait for response to all question and then use answers
    .then((answers) => {
      //create engineer object from answer
      const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
      //add object to list of employees
      employeeList.push(newEngineer);
      //use recursion to ask if the user will continue
      continueBuilding();
    });
  }

  //this method asks the engineer questions, then uses recursion to ask if the user would like to continue
  function addIntern(){
    inquirer
    .prompt(interQuestions)
    //wait for response to all question and then use answers
    .then((answers) => {
      //create intern object from answer
      const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
      //add object to list of employees
      employeeList.push(newIntern);   
      //use recursion to ask if the user will continue
      continueBuilding();
    });
  }


  // App initialisation
function init() {

  //employee list emptied
  employeeList = [];
  //string template empty
  printToFile = '';
  //ask first question, which is the manager questions
  getManager();
}
  
  // Function call to initialize app
  init();