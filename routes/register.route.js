const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/register.controller")

// http://localhost:5000/register
router.post("/", registerUser, (req, res, next) => {
  res.send('Your registration is a success')
})

module.exports = router;