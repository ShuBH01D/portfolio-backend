const mysql = require("mysql2");

// 🔥 Only connect DB in LOCAL (not in production / Render)
let connection = null;

if (process.env.NODE_ENV !== "production") {
  connection = mysql.createConnection({
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
} else {
  console.log("⚠️ DB disabled in production (Render)");
}

module.exports = connection;