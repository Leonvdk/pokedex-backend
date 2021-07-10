const User = require("../models/user.model")

const registerUser = (req, res, next) =>{
  User.register((err, results) => {
    err? res.status(500).send(err): next();
  }, req.body);
};

module.exports = { registerUser };
