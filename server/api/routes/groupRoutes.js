import express from "express";

import { registerGroup } from "../controllers/groupController.js";

const router = express.Router();

router.post("/registerGroup", registerGroup);

export default router;