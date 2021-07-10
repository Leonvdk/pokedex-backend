const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/register.controller")

// http://localhost:5000/register
router.post("/", registerUser, (req, res, next) => {
  res.json()

})

module.exports = router;