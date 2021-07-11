const express = require("express");
const router = express.Router();
const connection = require("../config");
const bcrypt = require("bcrypt");
const passport = require("passport");


const { getUsers } = require("../controllers/user.controller");

const { getUser } = require("../controllers/user.controller");

const { editUser } = require("../controllers/user.controller");

//*********User Routes *******

// http://localhost:5000/user
router.get("/", getUsers, (request, response) => {
  response.send(" Get All Users successfully");
});

// http://localhost:5000/user/:id
router.get("/:id", getUser, (request, response) => {
  response.send(" Get one User successfully");
});


// Not working
// http://localhost:5000/user/:id/edit
router.put("/:id/edit", editUser, (request, response) => {
  response.send(" User successfully Updated");
});
module.exports = router; 

// first middleware in /user/:id/editpassport.authenticate("jwt", { session: false }),