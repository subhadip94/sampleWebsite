const mysql = require("mysql")
const connection = mysql.createConnection({
    host: "localhost", // host for connection
    port: 3306, // default port for mysql is 3306 
    database: "world", // database from which we want to connect out node application 
    user: "root", // username of the mysql connection 
    password: "" // password of the mysql connection 
});

connection.connect(function (err) {
    if (err) {
        console.log("error occurred while connecting", err);
    }
    else {
        console.log("connection created with Mysql successfully");
    }
});

module.exports = connection;

