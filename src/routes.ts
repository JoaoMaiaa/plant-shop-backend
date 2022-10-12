import express from "express";
import multer from "multer";

import { ensureAuth } from "./middleware/auth";
import { storage } from "../config/storage";

import { consumerController } from "./controllers/consumerController";
import { productController } from "./controllers/productController";
import { categoryController } from "./controllers/categoryController";

const upload = multer({ storage: storage });

const router = express.Router();

// consumer

router.get("/consumer", consumerController.show);
router.post("/consumer/login", consumerController.login);
router.post("/consumer/create", consumerController.create);
router.put("/consumer/current", ensureAuth, consumerController.update);
router.put(
  "/consumer/current/password",
  ensureAuth,
  consumerController.updatePassword
);
router.delete("/consumer/delete", ensureAuth, consumerController.delete);
router.post(
  "/consumer/upload",
  upload.single("file"),
  ensureAuth,
  consumerController.upload
);

// products

router.get("/products", productController.index);

// category

router.get("/category", categoryController.findCategoryByName);

export { router };
