const express = require("express");
const mysql = require("mysql");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8800;

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "login_users",
//   password: "Joshiji789"
// });

const connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b2338a27b70736",
  database: "heroku_8bdcf3d2b9973f0",
  password: "eb5ad4fd"
});

const getUsers = function(req, res) {
  connection.query(`select name from users`, (err, data, fields) =>
    res.send(data)
  );
};

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("react-app/build"));

app.get("/hello", (req, res) => {
  res.send("i am back ");
});

app.get("/getUsers", (req, res) => {
  getUsers(req, res);
});

app.post("/addUser", (req, res) => {
  console.log(req.body);
  // connection.connect();
  const addUserInDb = `insert into users (name) values (${req.body})`;
  console.log(addUserInDb);
  connection.query(addUserInDb, (error, results) => {
    if (error) {
      console.log("this is eorr", error);
    }
  });
  getUsers(req, res);
});

app.listen(PORT, console.log(`listen on ${PORT}`));
