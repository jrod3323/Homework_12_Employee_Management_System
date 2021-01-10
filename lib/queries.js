async function viewAllEmployees(connection) {
    const SQL_STATEMENT = `SELECT * FROM employeemanagement_db.employee;`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        console.table(rows);
    } catch (error) {
        console.log(error);
    }
}

async function viewAllDepartments(connection) {
    const SQL_STATEMENT = `SELECT * FROM employeemanagement_db.department;`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        console.table(rows);
    } catch (error) {
        console.log(error);
    }
}

async function viewAllRoles(connection) {
    const SQL_STATEMENT = `SELECT * FROM employeemanagement_db.role;`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        console.table(rows);
    } catch (error) {
        console.log(error);
    }
}

async function addDepartment(connection, departmentName) {
    const SQL_STATEMENT = `insert into department(name) values (?);`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [departmentName]);
    } catch (error) {
        console.log(error);
    }
};

async function addEmployee(connection, first_name,last_name,role_id) {
    const SQL_STATEMENT = `insert into employee (first_name,last_name,role_id) values (?,?,?)`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [first_name,last_name,role_id]);
    } catch (error) {
        console.log(error);
    }
};

async function addEmployee(connection, first_name,last_name,role_id) {
    const SQL_STATEMENT = `insert into employee (first_name,last_name,role_id) values (?,?,?)`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [first_name,last_name,role_id]);
    } catch (error) {
        console.log(error);
    }
}

async function addRole(connection, title,salary,department_id) {
    const SQL_STATEMENT = `insert into role (title,salary,department_id) values (?,?,?)`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [title,salary,department_id]);
    } catch (error) {
        console.log(error);
    }
}




module.exports = {
    viewAllEmployees,
    viewAllDepartments,
    viewAllRoles,
    addDepartment,
    addEmployee,
    addRole
}