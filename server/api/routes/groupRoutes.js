import express from "express";

import { fetchGroups, registerGroup } from "../controllers/groupController.js";

const router = express.Router();

router.get("/fetchGroups", fetchGroups);
router.post("/registerGroup", registerGroup);

export default router;