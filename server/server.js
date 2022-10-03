const { urlencoded } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

const AllUsers = require("../db/queries/users");

app.use(express.json());
app.use(express, urlencoded());

app.get("/cards", (req, res) => {
  AllUsers.getUsers()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
