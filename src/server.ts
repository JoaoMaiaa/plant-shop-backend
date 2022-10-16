// import express from "express";
const express = require("express");

// import { sequelize } from "./database";
const { sequelize } = require("./database/index");
// import { adminJs, adminJsRouter } from "./adminjs";
const { adminJs, adminJsRouter } = require("./adminjs");
// import { router } from "./routes";
const { router } = require("./routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(adminJs.options.rootPath, adminJsRouter);

app.use(express.static("public"));
app.use(express.static("uploads"));

app.use(router);

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("DB connection successful");
  });
  console.log(`Server started successfuly at port ${PORT}`);
});
