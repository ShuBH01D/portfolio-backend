const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// GET users
router.get("/users", userController.getUsers);

// ✅ FIXED: contact route (NOW matches /api/contact)
router.post("/contact", userController.createUser);

module.exports = router;