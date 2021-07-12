const Pokemon = require("../models/pokemon.model");

const addPokemon = (request, response, next) => {
  Pokemon.add((err, results) => {
    err 
    ? (response.status(500).json(err)) 
    : (response.status(200).json(results));
    // next();
  },
  request.params );
};
const getPokeList = (request, response, next) => {
  Pokemon.getAll((err, results) => {
    err 
    ? (response.status(500).json(err)) 
    : (response.status(200).json(results));
    // next();
  },
  request.params );
};

// const getList = (req, res, next) => {
//   List.getOneList((err, results) => {
//     err 
//     ? res.status(500).json(err) 
//     : next();
//   }, req.params);
// };

// const editList = (req, res, next) => {
//   List.edit(
//     (err, results) => {
//       err 
//       ? res.status(500).json(err) 
//       : res.status(200).json(results)
//     },
//     req.params,
//     req.body
//   );
// };


// const deleteList = (req, res, next) => {
//   List.delete(
//     (err, results) => {
//       err 
//       ? res.status(500).send(err) 
//       : res.status(200).json(results)
//     },
//     req.params
//   );
// };

// const createList = (req, res, next) =>{
//   List.create((err, results) => {
//     err
//     ? res.status(500).send(err)
//     : res.status(200).json(results)
//   }, 
//   req.params);
// };

module.exports = { addPokemon, getPokeList };
