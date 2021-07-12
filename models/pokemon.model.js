const connection = require("../config");

const Pokemon = {};


Pokemon.getAll = (callback, params) => {
  const {listId} = params;
  connection.query("SELECT pokemon_name FROM Lists_Pokemon WHERE list_id = ?", [listId],
  (err, results) => {
    console.log('get results:', results)
    callback(err, results);
  });
};

Pokemon.add = (callback, params) => {
  const { listId, pokemonName } = params;
  connection.query(
    "INSERT INTO pokemon (name) VALUES (?);",
    [pokemonName],() => {
      console.log('aaaaaa',listId, pokemonName)
      connection.query(
        "INSERT INTO Lists_Pokemon (list_id, pokemon_name) VALUES (?, ?)", [listId, pokemonName],
        () => {
          connection.query(
            "SELECT pokemon_name FROM Lists_Pokemon WHERE list_id = ?", [listId],
            (err, results)=>{
            callback(err, results)
            console.log("add results",results)
          })
        }
      )
    }
  )
};


Pokemon.remove = (callback, params) => {
  const { listId, pokemonName } = params;
    connection.query(
      "DELETE pokemon_name FROM Lists_Pokemon WHERE pokemon_name = ? AND list_id = ?", [pokemonName, listId],
      () => {
        connection.query(
          "SELECT pokemon_name FROM Lists_Pokemon WHERE list_id = ?", [listId],
          (err, results)=>{
          callback(err, results)
          console.log("add results",results)
        })
      })
}


module.exports = Pokemon;
