const connection = require("../config");

const Pokemon = {};



// List.getOneList = (callback, oneUser) => {
//   const { id, userId } = oneUser;
//   const formData = [id, userId];
//   const sql = "SELECT * FROM Lists WHERE id = ? AND user_id = ?;"
//   connection.query(sql, formData, (err, results) => {
//     callback(err, results);
//   });
// };

// List.edit = (callback, params, body) => {
//   const { id, userId } = params;
//   const formData = body ;
//   console.log('formData: ',formData)
//   connection.query(
//     "UPDATE Lists SET ? WHERE id = ?",
//     [formData, id], () => {
//       connection.query(
//         "Select * from Lists WHERE user_id = ?", [userId],
//         (err, results)=>{
//         callback(err, results)
//         console.log("results",results)
//       })
//     }
//   );
// }

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

// List.delete = (callback, list) => {
//   const {id, userId} = list;
//   console.log('list: ',list)
//   connection.query(
//     "DELETE FROM lists WHERE id = ?;",
//     [id],() => {
//       connection.query(
//         "Select * from Lists WHERE user_id = ?", [userId],
//         (err, results)=>{
//         callback(err, results)
//         console.log("results",results)
//       })
//     }
//   )
// }

module.exports = Pokemon;
