async function viewAllEmployees(connection) {
    const SQL_STATEMENT = `SELECT employee.id,employee.first_name,employee.last_name ,employee.role_id,role.title,role.salary , employee.manager_id , department.id, department.name
    from ((employee
    inner join role on employee.role_id = role.id)
    inner join department on role.id = department.id);`;

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
    const SQL_STATEMENT = `SELECT role.id , role.title, role.salary, department.id, department.name 
    FROM role
    inner join department on role.department_id = department.id;;`;

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

async function updateRole(connection, role_id, employee_id) {
    const SQL_STATEMENT = `update employee set role_id = ? where id = ?;`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [role_id, employee_id]);
    } catch (error) {
        console.log(error);
    }
};


async function updateManager(connection, manager_id, employee_id) {
    const SQL_STATEMENT = `update employee set manager_id = ? where id = ?;`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [manager_id, employee_id]);
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
    addRole,
    updateRole,
    updateManager
}