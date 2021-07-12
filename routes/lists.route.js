const express = require("express");
const router = express.Router();



const { getLists, getList, editList, deleteList, createList } = require("../controllers/lists.controller");



//*********User Routes *******

//*GET ALL
// http://localhost:5000/lists/all/:userId
router.get("/all/:userId", getLists, (request, response) => {
  response.status(200).send(" Get All lists successfully");
});

//*GET ONE
// http://localhost:5000/lists/:userId/:id
router.get("/:id/:userId", getList, (request, response) => {
  response.status(200).send(" Get one list successfully");
});

//*UPDATE
// Not working
// http://localhost:5000/lists/:userId/:id/
router.put("/:userId/:id/", editList, (request, response) => {
  response.status(500).send(" List successfully Updated");
});

//*DELETE LIST
// http://localhost:5000/lists/:userId/:id/
router.delete("/:userId/:id/", deleteList, (req, res) => {
        res.status(200).send("Album successfully deleted !");
});

//* CREATE LIST
// http://localhost:5000/lists/:userId/:listName
router.post("/:userId/:listName", createList, (req, res, next) => {
  res.status(200).send('Success')
})

module.exports = router; 
