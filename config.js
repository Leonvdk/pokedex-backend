require("dotenv").config();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // port: process.env.DB_PORT, //DON'T DELETE
  // sslmode: process.env.DB_SSL_MODE, //DON'T DELETE
});

console.log({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // port: process.env.DB_PORT,         //DON'T DELETE
  // sslmode: process.env.DB_SSL_MODE  //DON'T DELETE
});

module.exports = connection;
