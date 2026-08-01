const express = require("express");

const {
  registerUser,
  loginUser,
  updateAvatar,
} = require("../controllers/authController");

const router = express.Router();


// Register User
router.post("/register", registerUser);


// Login User
router.post("/login", loginUser);


// Update User Avatar
router.put("/avatar", updateAvatar);


module.exports = router;