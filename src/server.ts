import express from "express";
import cors from "cors";

import { sequelize } from "./database";
import { adminJs, adminJsRouter } from "./adminjs";
import { router } from "./routes";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

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
