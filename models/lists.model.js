const connection = require("../config");

const List = {};

List.getAllLists = (callback, user) => {
  const {id} = user;
  connection.query("SELECT * FROM Lists WHERE user_id = ?;", 
  [id],
  (err, results) => {
    callback(err, results);
  });
};

List.getOneList = (callback, oneUser) => {
  const { id } = oneUser;
  const formData = [id];
  const sql = "SELECT * FROM Lists WHERE id = ?";
  connection.query(sql, formData, (err, results) => {
    callback(err, results);
  });
};

List.editedList = (callback, params, body) => {
  const { id } = params;
  const formData = body ;
  console.log('formData: ',formData)

  connection.query(
    "UPDATE Lists SET ? WHERE id = ?",
    [formData, id], (err, results) => {

      connection.query(
        "Select * from Lists WHERE id = ?", [id],
      (err, results)=>{
        callback(err, results)
        console.log("results",results)
      })
    }
  );
}

List.register = (callback, newUser) => {
  const { name, email, password, amountBadges } = newUser;
  // console.log(newUser);
  connection.query(
    "INSERT INTO User (name, email, password, amountBadges) VALUES (?, ?, ?, ?);",
    [name, email, password, amountBadges],
    (err, results, fields) => {
      callback(err, results, fields);
    }
  );
};

module.exports = List;
