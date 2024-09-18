import { Request, Response, NextFunction } from "express";
import { defaults } from "../../../core/constants/validation.interface";
export const validateSchema = async (
  schema: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = req.body;
  const { error, value } = schema.validate(payload, defaults);
  req.body = value;
  if (error) {
    return res.status(406).json({
      error: `Error in user data: ${error.message}`,
    });
  } else {
    next();
  }
};
