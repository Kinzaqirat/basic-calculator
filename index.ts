#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstName" },
  { message: "Enter second number", type: "number", name: "secondName" },
  {
    message: "Select one of this operators",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
//conditiong
if(answer.operators === "Addition"){
    console.log(answer.firstName + answer.secondName);
} else if (answer.operators === "Subtraction"){
    console.log(answer.firstName - answer.secondName);
} else if (answer.operators === "Multiplication"){
    console.log(answer.firstName * answer.secondName);
} else if(answer.operators === "Division"){
    console.log(answer.firstName / answer.secondName);
} else{
    console.log("Please enter a valid operators.");
}