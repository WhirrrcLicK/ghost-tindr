const db = require("../connection");

const getUsers = () => {
  return db
    .query("SELECT * FROM users")

    .then((result) => {
      return result.rows;
    })

    .catch((err) => {
      console.log("error", err);
    });
};

module.exports = { getUsers };
