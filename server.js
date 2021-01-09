const mysql = require("mysql2");

const {promptChoices} = require('./lib/prompts');

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

  connection.connect(async (err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    await runSearch();
    connection.end();
});

async function runSearch() {

    let answer, artist, range;

    answer = await promptChoices();
    console.table(answer.name);
 
}