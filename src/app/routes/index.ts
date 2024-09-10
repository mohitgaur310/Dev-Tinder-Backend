import express, { Request, Response } from "express";
import userRoutes from "./auth.routes";
const router = express.Router();

router.use("/user", userRoutes);

export default router;
