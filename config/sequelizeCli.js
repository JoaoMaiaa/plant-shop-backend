const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  development: {
    dialect: "postgres",
    host: "localhost",
    port: "5432",
    database: "plant-shop",
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
  },
};
