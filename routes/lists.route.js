const express = require("express");
const router = express.Router();



const { getLists } = require("../controllers/lists.controller");

const { getList } = require("../controllers/lists.controller");

const { editList } = require("../controllers/lists.controller");

//*********User Routes *******

// http://localhost:5000/lists
router.get("/", getLists, (request, response) => {
  response.send(" Get All lists successfully");
});

// http://localhost:5000/list/:id
router.get("/:id", getList, (request, response) => {
  response.send(" Get one list successfully");
});


// Not working
// http://localhost:5000/list/:id/edit
router.put("/:id/edit", editList, (request, response) => {
  response.send(" List successfully Updated");
});
module.exports = router; 
