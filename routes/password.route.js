const express = require("express");
require("dotenv").config();
const router = express.Router();
const connection = require("../config");
const bcrypt = require("bcrypt");

// Passport modules for local strategy
const passport = require("passport");

/***********CHANGE PASSWORD************/

router.put(
  "/change",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { currentPassword, newPassword, userId } = req.body;
    connection.query(
      "SELECT * FROM User WHERE id = ?",
      [userId],
      (err, results) => {
        if (err) res.status(500).send(err);
        if (!bcrypt.compareSync(currentPassword, results[0].password)) {
          res.status(500).send({
            message: "Incorrect password!!",
          });
        }

        bcrypt.hash(newPassword, 10, (err, hash) => {
          connection.query(
            "UPDATE User SET password = ? WHERE id = ?",
            [hash, userId],
            (err, results) => {
              if (err) res.status(500).send(err);
              res.status(200).send({ message: "Password has been updated!!" });
            }
          );
        });
      }
    );
  }
);

module.exports = router;


