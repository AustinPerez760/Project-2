var mysql = require("mysql");
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sap92010",
    database: "striveRite_db",
});

connection.connect(function (err) {
    if (err) {
        console.log("error connecting " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
module.exports = connection;