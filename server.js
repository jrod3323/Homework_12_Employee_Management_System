// import mysql2 package
const mysql = require("mysql2");
// import prompt functions
const {
    promptChoices, 
    promptAddDepartment,
    promptAddEmployee,
    promptAddEmployeeRole,
    promptAddRole,
    promptAddRoleDept,
    promptEmployeeInfo,
    promptEmployeeToUpdate,
    promptManager
} = require('./lib/prompts');

// import constants choice variables
const [ VIEW_ALL_EMPLOYEES,
    VIEW_ALL_ROLE,
    VIEW_ALL_DEPARTMENTS,
    ADD_DEPARTMENT,
    ADD_EMPLOYEE,
    ADD_ROLE,
    UPDATE_EMPLOYEE_INFO] = require('./lib/const');

// import query functions
const  {
    viewAllEmployees,
    viewAllDepartments,
    viewAllRoles,
    addDepartment,
    addEmployee,
    addRole,
    updateRole,
    updateManager
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

    let answer, employee, role, department, info;

    answer = await promptChoices();
    console.table(answer.name);
 
    switch (answer.name) {
        case VIEW_ALL_EMPLOYEES:
            //Queries all from employee table
            await viewAllEmployees(connection);
            await runPrompt();
            break;
        case VIEW_ALL_DEPARTMENTS:
            //Queries all from department table
            await viewAllDepartments(connection);
            await runPrompt();
            break;
        case VIEW_ALL_ROLE:
            //Queries all from role table
            await viewAllRoles(connection);
            await runPrompt();
            break;
        case ADD_DEPARTMENT:
            //prompts for department name
            await viewAllDepartments(connection);
            department = await promptAddDepartment();
            addDepartment(connection, department.name);
            await viewAllDepartments(connection);
            await runPrompt();
            break;
        case ADD_EMPLOYEE:
            employee = await promptAddEmployee();
            await viewAllRoles(connection);
            role = await promptAddEmployeeRole();
            addEmployee(connection, employee.first_name , employee.last_name,role.id);
            await viewAllEmployees(connection);
            await runPrompt();
            break;
        case ADD_ROLE:
            await viewAllRoles(connection);
            role = await promptAddRole();
            await viewAllDepartments(connection);
            department = await promptAddRoleDept();
            addRole(connection,role.title,role.salary,department.id)
            await viewAllRoles(connection);
            await runPrompt();
        case UPDATE_EMPLOYEE_INFO:
            info = await promptEmployeeInfo();
            if(info.name === "Role"){
                await viewAllEmployees(connection);
                employee = await promptEmployeeToUpdate();
                await viewAllRoles(connection);
                role = await promptAddEmployeeRole();
                await updateRole(connection, role.id , employee.id);
                await viewAllEmployees(connection);
                await runPrompt();
            };
            if(info.name === "Manager ID"){
                await viewAllEmployees(connection);
                employee = await promptEmployeeToUpdate();
                await viewAllEmployees(connection);
                manager = await promptManager();
                await updateManager(connection, manager.id, employee.id);
                await viewAllEmployees(connection);
                await runPrompt();
            }
        case "EXIT":
            break;
    }
}