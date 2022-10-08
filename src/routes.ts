import express from "express";

import { consumerController } from "./controllers/consumerController";

const router = express.Router();

router.post("/consumer", consumerController.show);
router.post("/consumer", consumerController.create);
router.put("/consumer", consumerController.update);
router.put("/consumer/:id", consumerController.updatePassword);

export { router };
