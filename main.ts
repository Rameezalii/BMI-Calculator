#! usr/bin/env node


import inquirer from 'inquirer'
import chalk from 'chalk';

console.log(chalk.bold.red(`\tWelcome To BMI Calculator`));

let userAnswer = await inquirer.prompt([
    {
        name : "weightInKg",
        message : "Enter Your Weight In Kg",
        type : "number"

    },
    {
        name : "heightInMeter",
        message : "Enter Your Height In Meter",
        type : "number"

    }
])

let userWeight = userAnswer.weightInKg

let userHeight = userAnswer.heightInMeter

let bmi = userWeight / (userHeight * userHeight)

console.log(`Your BMI Is ${bmi}`);
