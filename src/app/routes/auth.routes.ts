import { Router } from "express";
import { register } from "../controller/auth.controller";
const router = Router();

router.route("/register").post(register);

export default router;
