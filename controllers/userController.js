const User = require('../models/userModel');

// ✅ GET users (optional - DB असेल तरच)
exports.getUsers = (req, res) => {
  try {
    User.getAll((err, results) => {
      if (err) {
        console.error("Error fetching users:", err);
        return res.status(500).json({ success: false, message: "Failed to fetch users" });
      }
      res.json({ success: true, data: results });
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ CONTACT FORM (No DB - working version)
exports.createUser = (req, res) => {
  try {
    const { name, email, subject, phone, message } = req.body;

    // 🔍 basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, Email and Message are required"
      });
    }

    console.log("📩 New Contact Form Submission:");
    console.log({ name, email, subject, phone, message });

    // ✅ success response
    res.status(200).json({
      success: true,
      message: "Message sent successfully ✅"
    });

  } catch (error) {
    console.error("Error in createUser:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
};