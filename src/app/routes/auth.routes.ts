import { Router } from "express";
import { register } from "../controller/auth.controller";
import { userSchema } from "../../app/middleware/validator/auth.validator";
import { validateSchema } from "../../app/middleware/validator/validator";

const router = Router();

// router.route("/register").post(validateSchema(userSchema), register);

export default router;
