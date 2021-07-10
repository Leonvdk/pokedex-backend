const User = require("../models/auth.model")

const registerUser = (req, res, next) =>{
  User.register((err, results) => {
    console.log("controller results: ", results)
    err? res.status(500).json({ flash: err.message }): next();
  }, req.body);
};



  module.exports = { registerUser };

  // if (err) {
  //   res.status(500).json({ flash: err.message });
  // } else {
  //   res.status(200).json({flash: "You have been signed up!"})
  //   console.log("res: ", results)