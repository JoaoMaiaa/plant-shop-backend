const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  development: {
    dialect: "postgres",
    host: `${process.env.HOST}`,
    port: 5432,
    database: `${process.env.DATABASE}`,
    username: `${process.env.USERNAME_DB}`,
    password: `${process.env.PASSWORD_DB}`,
  },
};
