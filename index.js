const express = require("express");
require("dotenv").config();
const morgan = require("morgan");

const app = express();
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const registerRouter = require("./routes/register.route");
const listsRouter = require("./routes/lists.route");

const connection = require("./config");
const port = process.env.DB_PORT;

app.use(morgan("dev"));
app.use(express.json());

app.use("/register", registerRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/lists", listsRouter);

connection.connect((err) => {
  err ? console.log(err) : console.log("Database Connected");
});

app.listen(port, () => {
  console.log("listening to ", port);
});
