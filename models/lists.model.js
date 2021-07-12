const connection = require("../config");

const List = {};

List.getAll = (callback, user) => {
  const {userId} = user;
  connection.query("SELECT * FROM Lists WHERE user_id = ?;", 
  [userId],
  (err, results) => {
    
    callback(err, results);
  });
};

List.getOneList = (callback, oneUser) => {
  const { id, userId } = oneUser;
  const formData = [id, userId];
  const sql = "SELECT * FROM Lists WHERE id = ? AND user_id = ?;"
  connection.query(sql, formData, (err, results) => {
    callback(err, results);
  });
};

List.edit = (callback, params, body) => {
  const { id, userId } = params;
  const formData = body ;
  console.log('formData: ',formData)
  connection.query(
    "UPDATE Lists SET ? WHERE id = ?",
    [formData, id], () => {
      connection.query(
        "Select * from Lists WHERE user_id = ?", [userId],
        (err, results)=>{
        callback(err, results)
        console.log("results",results)
      })
    }
  );
}

List.create = (callback, params) => {
  const { userId, listName } = params;
  connection.query(
    "INSERT INTO Lists (listName, User_id) VALUES (?, ?);",
    [listName, userId],() => {
      connection.query(
        "Select * from Lists WHERE user_id = ?", [userId],
        (err, results)=>{
          callback(err, results)
          console.log("results",results)
        }
      )
    }
  )
};

List.delete = (callback, list) => {
  const {id, userId} = list;
  console.log('list: ',list)
  connection.query(
    "DELETE FROM lists WHERE id = ?;",
    [id],() => {
      connection.query(
        "Select * from Lists WHERE user_id = ?", [userId],
        (err, results)=>{
        callback(err, results)
        console.log("results",results)
      })
    }
  )
}

module.exports = List;
