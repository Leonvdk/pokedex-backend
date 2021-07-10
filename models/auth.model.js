const connection = require("../config");
const bcrypt = require("bcrypt");

const User = {};

User.register = (callback, newUser) => {
  const password = newUser.password;
  bcrypt.hash(password, 10, (err, hash) => {
    const { email, phoneNumber, fullName, language } = newUser;
    const formData = [fullName, phoneNumber, email, language, hash];
    const sql =
      "INSERT INTO User (fullName, phoneNumber, email,language, password ) VALUES (?, ?, ?, ?, ?);";

    connection.query(sql, formData, (err, results) => {
      if (err) callback(err);
      console.log("model results: ", results);
      connection.query(
        "SELECT * FROM User WHERE id = ?",
        [results.insertId],
        (err, results) => {
          callback(err, results);
        }
      );
    });
  });
};

module.exports = User;
