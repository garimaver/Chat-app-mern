const express = require("express");
const router = express.Router();

// Import the controller functions
const { signup, login, logout } = require("../controllers/authControllers");

// Routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
