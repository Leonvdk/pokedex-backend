const User = require("../models/user.model");

const getUsers = (request, response, next) => {
  User.getAllUsers((err, results) => {
    err ? response.status(500).json(err) : response.status(200).json(results),
      next();
  });
};

const getUser = (request, response, next) => {
  User.getOneUser((err, results) => {
    err ? response.status(500).json(err) : response.status(200).json(results),
      next();
  }, request.params);
};

const editUser = (request, response) => {
  User.editedUser(
    (err, results) => {
      err ? response.status(500).json(err) : response.status(200).json(results)
      
        // next();
    },
    request.params,
    request.body
  );
};

module.exports = { getUsers, getUser, editUser };
