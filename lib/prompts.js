const inquirer = require('inquirer');
const [ VIEW_ALL_EMPLOYEES,
    VIEW_ALL_ROLE,
    VIEW_ALL_DEPARTMENTS,
    ADD_DEPARTMENT,
    ADD_EMPLOYEE,
    ADD_ROLE,
    UPDATE_EMPLOYEE_INFO] = require('./const');

async function promptChoices() {
    try {
        answer = await inquirer
            .prompt({
                name: "name",
                type: "rawlist",
                message: "What would you like to do?",
                choices: [
                    VIEW_ALL_EMPLOYEES,
                    VIEW_ALL_ROLE,
                    VIEW_ALL_DEPARTMENTS,
                    ADD_DEPARTMENT,
                    ADD_EMPLOYEE,
                    ADD_ROLE,
                    UPDATE_EMPLOYEE_INFO,
                    "EXIT"
                ]
            });

        return answer;
    } catch (error) {
        console.log(error);
    }
}

async function promptAddDepartment() {
    try {
        department = await inquirer
            .prompt({
                name: "name",
                type: "input",
                message: "What is the department name?"
            });

        return department;
    } catch (error) {
        console.log(error);
    }
};

async function promptAddEmployee() {
    try {
        employee = await inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the employee\'s first name?',
                    name: 'first_name',
                  },
                  {
                    type: 'input',
                    message: 'What is the employee\'s last name?',
                    name: 'last_name',
                  }
                ]);

        return employee;
    } catch (error) {
        console.log(error);
    }
};

async function promptAddEmployeeRole() {
    try {
        role = await inquirer
            .prompt(
                {
                    type: 'input',
                    message: 'What is ID of the role you would like to add the employee too?',
                    name: 'id',
                  }
            );

        return role;
    } catch (error) {
        console.log(error);
    }
};

async function promptAddRole() {
    try {
        role = await inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the title of the role?',
                    name: 'title',
                  },
                  {
                    type: 'input',
                    message: 'What is the salary of the role?',
                    name: 'salary',
                  }
                ]);

        return role;
    } catch (error) {
        console.log(error);
    }
};

async function promptAddRoleDept() {
    try {
        department = await inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the ID of the department the role belongs to?',
                    name: 'id',
                  }
                ]);

        return department;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    promptChoices, 
    promptAddDepartment,
    promptAddEmployee,
    promptAddEmployeeRole,
    promptAddRole,
    promptAddRoleDept
};