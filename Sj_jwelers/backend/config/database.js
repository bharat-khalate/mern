import mysql from "mysql2";

// MySQL database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "5242",
    database: "sj_jwelers"
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log("db:  " + err)
    }
    console.log("MySQL database connected...");
});

export default db;
