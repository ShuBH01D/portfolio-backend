const express = require("express");
const router = express.Router();
const db = require("../config/db"); //db path

// ✅ POST (already असेल - check कर)
router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Insert failed" });
    }
    res.json({ message: "Message saved successfully" });
  });
});

// 🔥 NEW GET API (admin panel साठी)
router.get("/contact/messages", (req, res) => {
  const sql = "SELECT * FROM contacts ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Fetch failed" });
    }
    res.json(result);
  });
});

module.exports = router;