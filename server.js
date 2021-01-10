// import mysql2 package
const mysql = require("mysql2");
// import prompt functions
const {
    promptChoices, 
    promptAddDepartment,
    promptAddEmployee,
    promptAddEmployeeRole,
    promptAddRole,
    promptAddRoleDept
} = require('./lib/prompts');

// import constants choice variables
const [ VIEW_ALL_EMPLOYEES,
    VIEW_ALL_ROLE,
    VIEW_ALL_DEPARTMENTS,
    ADD_DEPARTMENT,
    ADD_EMPLOYEE,
    ADD_ROLE,
    UPDATE_EMPLOYEE_ROLE] = require('./lib/const');

// import query functions
const  {
    viewAllEmployees,
    viewAllDepartments,
    viewAllRoles,
    addDepartment,
    addEmployee,
    addRole
    } = require('./lib/queries');


//Connect to employeeManagement_DB using local host connection
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Bengals3323!",
    database: "employeeManagement_DB"
  });

//   connection and run initial runPrompt function 
  connection.connect(async (err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    await runPrompt();
    connection.end();
});


// runPrompt function for initial inquirer prompt
async function runPrompt() {

    let answer, employee, role, department;

    answer = await promptChoices();
    console.table(answer.name);
 
    switch (answer.name) {
        case VIEW_ALL_EMPLOYEES:
            //Queries all from employee table
            viewAllEmployees(connection);
            break;
        case VIEW_ALL_DEPARTMENTS:
            //Queries all from department table
            viewAllDepartments(connection);
            break;
        case VIEW_ALL_ROLE:
            //Queries all from role table
            viewAllRoles(connection);
            break;
        case ADD_DEPARTMENT:
            //prompts for department name
            department = await promptAddDepartment();
            addDepartment(connection, department.name);
            viewAllDepartments(connection);
            break;
        case ADD_EMPLOYEE:
            //prompts for department name
            employee = await promptAddEmployee();
            // viewAllDepartments(connection);
            // var department = await promptAddEmployeeDepartment();
            await viewAllRoles(connection);
            role = await promptAddEmployeeRole();
            addEmployee(connection, employee.first_name , employee.last_name,role.id);
            viewAllEmployees(connection);
            break;
        case ADD_ROLE:
            role = await promptAddRole();
            await viewAllDepartments(connection);
            department = await promptAddRoleDept();
            addRole(connection,role.title,role.salary,department.id)
            viewAllRoles(connection);
    }
}