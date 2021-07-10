const connection = require("../config");

const User = {};

User.getAllUsers = (callback, user) => {
  connection.query("SELECT * FROM User;", (err, results) => {
    callback(err, results);
  });
};

User.getOneUser = (callback, oneUser) => {
  const { id } = oneUser;
  const formData = [id];
  const sql = "SELECT * FROM User WHERE id = ?";
  connection.query(sql, formData, (err, results) => {
    callback(err, results);
  });
};

User.editedUser = (callback, params, body) => {

  const { id } = params;
  const formData = body ;

  connection.query(
    "UPDATE User SET ? WHERE id = ?",
    [formData, id], (err, results) => {

      connection.query(
        "Select * from User WHERE id = ?", [id],
      (err, results)=>{
        callback(err, results)
        console.log("results",results)
      })
    }
  );
}

User.register = (callback, newUser) => {
  const { name, email, password } = newUser;
  // console.log(newUser);
  connection.query(
    "INSERT INTO User (fullName, email, password, amountBadges) VALUES (?, ?, ?, ?);",
    [name, email, password],
    (err, results, fields) => {
      callback(err, results, fields);
    }
  );
};

module.exports = User;
