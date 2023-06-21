import express from "express";
import cors from "cors";

import groupRouter from "./routes/groupRoutes.js";
import paymentRouter from "./routes/paymentRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/groupRouter", groupRouter);
app.use("/paymentRouter", paymentRouter);
app.use("/userRouter", userRouter);

export default app;