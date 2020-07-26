// don't forget: npm init
/*The user will be prompter for their GitHub username and other ifnormations of the project the README is for.*/

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

const api = require("./develop/utils/api");
const path = require('path');
const generateMarkdown = require("./Develop/utils/generateMarkdown")


const questions = [
  /* this is an array of questions as objects
  Title [string]
whats Description (string)
whats theTable of Contents [array: string] or object
how to Installation string
What is your Usage (string)
what is License "mit" (string)
whos Contributing [array:string]
Tests [string]
Questions
  user github profile picture [string] (image url)
  user github email (string)
]*/
  {
    type: "input",
    message: "What's your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What's your email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What's the title of your repository?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a description of your repository",
    name: "description",
  },
  {
    type: "input",
    message: "Instructions for Installation",
    name: "instructions",
  },
  {
    type: "input",
    message: "What's the expected use of this repository?",
    name: "usage",
  },
  {
    type: "list",
    message: "What kind of license do you want for your repository?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "OTHER", "NONE"]
  },
  {
    type: "input",
    message: "Who are the contributing authors?",
    name: "contributing",
  },
  {
    type: "input",
    message: "How do you run test on this repository?",
    name: "tests",
  }
]
// inquirer.prompt(questions).then(function (data) {

//   fs.writeFile("readme.md", data, (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("ReadMe done! Congratulations");
//   });
// });

function writeToFile(fileName, data) {
  //setup writefile
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function runQuestions() {
  //build out intialize
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating your README...");

    api
      .getUser(inquirerResponses.github)
      .then(({ data }) => {
        writeToFile("README.md", generateMarkdown({ ...inquirerResponses, ...data }));
      })
  })
}

runQuestions();

//(https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
