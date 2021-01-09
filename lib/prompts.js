const inquirer = require('inquirer');
const initialQuestions = require('./const'); 

async function promptChoices() {
    try {
        answer = await inquirer
            .prompt({
                name: "name",
                type: "rawlist",
                message: "What would you like to do?",
                choices: [
                    initialQuestions[0],
                    initialQuestions[1],
                    initialQuestions[2],
                    initialQuestions[3],
                    initialQuestions[4],
                    initialQuestions[5],
                    initialQuestions[6],
                    "EXIT"
                ]
            });

        return console.log(answer);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    promptChoices, 
};