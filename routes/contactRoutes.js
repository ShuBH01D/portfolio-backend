const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ✅ POST: Save contact message
router.post("/contact", (req, res) => {
  const { name, email, subject, phone, message } = req.body;

  // 🔍 Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Name, Email and Message are required",
    });
  }

  const sql =
    "INSERT INTO contacts (name, email, subject, phone, message) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [name, email, subject || null, phone || null, message],
    (err, result) => {
      if (err) {
        console.log("DB Error:", err);
        return res.status(500).json({
          error: "Database insert failed",
        });
      }

      res.status(200).json({
        success: true,
        message: "Message saved successfully",
      });
    }
  );
});

// ✅ GET: Fetch all messages (admin use)
router.get("/contact/messages", (req, res) => {
  const sql = "SELECT * FROM contacts ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      console.log("DB Error:", err);
      return res.status(500).json({
        error: "Fetch failed",
      });
    }

    res.status(200).json({
      success: true,
      data: result,
    });
  });
});

module.exports = router;