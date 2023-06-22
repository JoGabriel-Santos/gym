import express from "express";

import { processInitialPayment, registerPayment } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/processInitialPayment", processInitialPayment);
router.patch("/registerPayment", registerPayment);

export default router;