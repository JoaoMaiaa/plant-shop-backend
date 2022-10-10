import express from "express";

import { consumerController } from "./controllers/consumerController";

import { ensureAuth } from "./middleware/auth";

const router = express.Router();

router.get("/consumer", consumerController.show);
router.post("/consumer", consumerController.login);
router.post("/consumer", consumerController.create);
router.put("/consumer/current", ensureAuth, consumerController.update);
router.put(
  "/consumer/current/password",
  ensureAuth,
  consumerController.updatePassword
);

export { router };
