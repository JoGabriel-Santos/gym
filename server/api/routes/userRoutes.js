import express from "express";

import { signin, signup, enrollStudentInGroup } from "../controllers/userController.js";

const router = express.Router();

router.patch("/enrollStudentInGroup", enrollStudentInGroup);
router.post("/signin", signin);
router.post("/signup", signup);

export default router;