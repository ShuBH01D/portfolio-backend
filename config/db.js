const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shubh@123",
  database: "portfolio_db"
});

connection.connect((err) => {
  if (err) {
    console.error("DB connection failed ❌");
    console.log(err);
  } else {
    console.log("MySQL Connected ✅");
  }
});

module.exports = connection;