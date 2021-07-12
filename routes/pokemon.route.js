const express = require("express");
const router = express.Router();



const { addPokemon, getPokeList, removePokemon } = require("../controllers/pokemon.controller");



//*********Pokemon Routes *******

//*GET ALL POKEMON FOR LIST
// http://localhost:5000/pokemon/:listId/
router.get("/:listId", getPokeList, (request, response) => {
  response.status(200).send(" Get All lists successfully");
});

// //*DELETE LIST
// // http://localhost:5000/lists/:userId/:id/
// router.delete("/:userId/:id/", deleteList, (req, res) => {
//         res.status(200).send("Album successfully deleted !");
// });


//* REMOVE POKEMON FROM LIST
// http://localhost:5000/pokemon/:listId/:pokemonName
router.delete("/:listId/:pokemonName", removePokemon, (req, res, next) => {
  res.status(200).send('Success')
})


//* ADD POKEMON TO LIST
// http://localhost:5000/pokemon/:listId/:pokemonName
router.post("/:listId/:pokemonName", addPokemon, (req, res, next) => {
  res.status(200).send('Success')
})
module.exports = router; 
