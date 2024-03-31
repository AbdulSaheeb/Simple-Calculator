#! /usr/bin/env node

import inquirer from "inquirer";

// printing a Wellcome Message
console.log("\n\tWellcome To \'saheebkhaskheli\' - CLI simple Calculator\n");
// Asking Questions form users through Inquirer

let answers = await inquirer.prompt([
    {message: "Enter first Number", type: "number", name: "firstNumber"},
    {message: "Enter second Number", type: "number", name: "secondNumber"},
    {
        message: "Select one Operator to perform Operayions",
        type: "list",
        name:"operator",
        choices: ["Addition", "Subtractions", "Multiplication", "division"],
    },
]);

// Condtional statements If-Else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "Subtractions"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log ("Invalid Input")
}