#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number

// 2) User input will guess the number

// 3) Computer will tell user if they are correct or not


const randomNumber =  Math.floor(Math.random() * 6 + 1);


const answers = await inquirer.prompt([
    {
      name : "userGuessedNumber",
      type : "number",
      message : "Please guess a number between 1-6: ",
    }
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You guessed the right number!");
}else{
    console.log("You guessed the wrong number!");
    console.log(`The correct number is ${randomNumber} .`);
};
