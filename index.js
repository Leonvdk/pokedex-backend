const express = require("express");
require("dotenv").config();
const morgan = require("morgan");

const app = express();
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const registerRouter = require("./routes/register.route");
const listsRouter = require("./routes/lists.route");
const pokemonRouter = require("./routes/pokemon.route");

const connection = require("./config");
const port = process.env.DB_PORT;

app.use(morgan("dev"));
app.use(express.json());


// Add Access Control Allow Origin headers
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


// S et route base
app.use("/register", registerRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/lists", listsRouter);
app.use("/pokemon", pokemonRouter);

// Check for connection
connection.connect((err) => {
  err ? console.log(err) : console.log("Database Connected");
});

app.listen(port, () => {
  console.log("listening to ", port);
});
