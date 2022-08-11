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
let printToFile;
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

  const employeeQuery = [
    {
      type: 'list',
      name: 'query',
      message: 'What would you like to do now...',
      choices: ['add Engineer','add Intern','Im finished building my team'],
    },
  ];

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : null
      );
  }

  function appendToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
        err ? console.log(err) : null
      );
  }

  function addManagerCard(manager){
    printToFile += buildHTMLFile.generateHTMLCardManager(manager.getName(), manager.getId(), manager.getEmail(), manager.getOfficeNumber());
    //appendToFile(fileLoc, buildHTMLFile.generateHTMLCardManager(manager.getName(), manager.getId(), manager.getEmail(), manager.getOfficeNumber()));
  }

  function addEngineerCard(engineer){
    printToFile += buildHTMLFile.generateHTMLCardEngineer(engineer.getName(), engineer.getId(), engineer.getEmail(), engineer.getGithub());
    //appendToFile(fileLoc, buildHTMLFile.generateHTMLCardEngineer(engineer.getName(), engineer.getId(), engineer.getEmail(), engineer.getGithub()));
  }

  function addInternCard(intern){
    printToFile += buildHTMLFile.generateHTMLCardIntern(intern.getName(), intern.getId(), intern.getEmail(), intern.getSchool());
    //appendToFile(fileLoc, buildHTMLFile.generateHTMLCardIntern(intern.getName(), intern.getId(), intern.getEmail(), intern.getSchool()));
  }

  function buildEmployeeCards(){
    for(let i=0; i<employeeList.length;i++){
      switch (employeeList[i].getRole()) {
        case 'Manager':
          addManagerCard(employeeList[i]);
          console.log(`Manager -${i}`);
          console.log(`Name -${employeeList[i].getName()}`);
          console.log(`ID -${employeeList[i].getId()}`);
          console.log(`email -${employeeList[i].getEmail()}`);
          console.log(`Office -${employeeList[i].getOfficeNumber()}`);
          break;
        case 'Engineer':
          addEngineerCard(employeeList[i]);
          console.log(`Engineer -${i}`);
          console.log(`Name -${employeeList[i].getName()}`);
          console.log(`ID -${employeeList[i].getId()}`);
          console.log(`email -${employeeList[i].getEmail()}`);
          console.log(`GitHub -${employeeList[i].getGithub()}`);
          break;
        case 'Intern':
          addInternCard(employeeList[i]);
          console.log(`Intern -${i}`);
          console.log(`Name -${employeeList[i].getName()}`);
          console.log(`ID -${employeeList[i].getId()}`);
          console.log(`email -${employeeList[i].getEmail()}`);
          console.log(`School -${employeeList[i].getSchool()}`);
          break;
      }
    }
  }

  function buildHTML(){
    printToFile += buildHTMLFile.generateHTMLPageHeader();
    //writeToFile(fileLoc, buildHTMLFile.generateHTMLPageHeader());
    buildEmployeeCards();
    console.log("append end");
    printToFile += buildHTMLFile.generateHTMLPageEnd();
    //appendToFile(fileLoc, buildHTMLFile.generateHTMLPageEnd());
    writeToFile(fileLoc, printToFile);

  }

  function getManager(){
    inquirer
    .prompt(managerQuestions)
    //wait for response to all question and then use answers
    .then((answers) => {
      const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
      employeeList.push(newManager);
      continueBuilding();
    });
  }

  function continueBuilding(){
    inquirer
    .prompt(employeeQuery)
    //wait for response to all question and then use answers
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

  function addEngineer(){
    inquirer
    .prompt(engineerQuestions)
    //wait for response to all question and then use answers
    .then((answers) => {
      const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
      employeeList.push(newEngineer);
      continueBuilding();
    });
  }

  function addIntern(){
    inquirer
    .prompt(interQuestions)
    //wait for response to all question and then use answers
    .then((answers) => {
      const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
      employeeList.push(newIntern);      
      continueBuilding();
    });
  }


  // App initialisation
function init() {

  employeeList = [];
  printToFile = '';
  getManager();
}
  
  // Function call to initialize app
  init();