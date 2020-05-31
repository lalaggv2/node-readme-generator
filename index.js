// don't forget: npm init
/*The user will be prompter for their GitHub username and other ifnormations of the project the README is for.*/

const fs = require("fs");
//const axios = require("axios");
const inquirer = require("inquirer");

const questions = [
  /* this is an array of questions
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

inquirer
  .prompt([
    {
    type: "input",
    message: "What's your GitHub username?",
    name: "username",
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
    message,: "links",
    name: "Table of Contents"
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
    type: "input",
    message: "What licenses does this repository have?",
    name: "license",
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
  },
  {
    type: "input",
    message: "Who and how to ask questions about this repository?",
    name: "questions",
  }
]).then(function ({ questions }) {
    // const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    // axios.get(queryUrl).then((response) => {
    //   const repoNames = response.data.map((repo) => {
    //     return repo.name;

   

      fs.writeFile("readme.md", , (err) => {
        if (err) {
          throw err;
        }
        console.log("ReadMe done! Congratulations");
      });
    });
  });
 b