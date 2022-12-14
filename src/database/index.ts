import { Sequelize } from "sequelize";

const dotenv = require("dotenv");

dotenv.config();

export const sequelize = new Sequelize({
  dialect: "postgres",
  username: `${process.env.USERNAME_DB}`,
  password: `${process.env.PASSWORD_DB}`,
  port: 5432,
  host: `${process.env.HOST}`,
  database: `${process.env.DATABASE}`,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  define: {
    underscored: true,
  },
});
