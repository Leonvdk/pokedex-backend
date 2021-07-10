//  Add in the authentication within this file
require ("dotenv").config();
const express = require("express");
const router = express.Router();
const connection = require("../config");
const bcrypt = require("bcrypt");

const {registerUser} = require("../controllers/auth.controller");

// jwt strategy modules
const jwt = require("jsonwebtoken");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

// Passport modules for local strategy
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

router.post("/signup", registerUser, (req, res, next) =>{
  res.status(200).json({flash: "You have been signed up!"})
})

// router.get(
//   "/profile",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     res.send("User can view the profile");
//   }
// );

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    (jwtPayload, callback) => {
      return callback(null, jwtPayload);
    }
  )
);


passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false,
    },
    (email, password, callback) => {
      connection.query(
        "SELECT * FROM User WHERE email = ?",
        email,
        (err, foundUser) => {
          if (err) return callback(err);

          if(!foundUser || !foundUser.length)
            return callback(null, false, { 
              message: "Incorrect email."});

          if (!bcrypt.compareSync(password, foundUser[0].password))
            return callback(null, false, {
              message: "Incorrect password.",
            });

          return callback(null, foundUser[0]);
        }
      );
    }
  )
);

router.post("/login", (req, res) =>{
  passport.authenticate(
    "local",
    (err, user, info) => {
      const { password, ...foundUser }= user;
      const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET);

      if (err) return res.status(500).send(err);
      if (!user) return res.status(400).json({ message: info.message});
      return res.json({ foundUser, token });
    }
  )(req, res);  //WHAT DOES THIS DO????
})

// need to pass to MVC
router.get("/verify-token", async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  try {
    if (!token) {
      return res.status(401).json("You need to Login");
    }
    const decrypt = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(decrypt);
    const { password, ...user } = decrypt;
    res.status(200).send(user);
  } catch (err) {
    return res.status(500).json(err.toString());
  }
});

module.exports = router;