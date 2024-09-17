import Joi from "joi";

export const userSchema = Joi.object({
  username: Joi.string().trim().required().messages({
    "string.empty": "Username is required",
  }),
  email: Joi.string().email().trim().lowercase().required().messages({
    "string.email": "Please provide a valid email",
    "string.empty": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long",
    "string.empty": "Password is required",
  }),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .optional()
    .allow(null, "")
    .messages({
      "string.pattern.base": "Phone number must be 10 digits",
    }),
  isActive: Joi.boolean().default(true),
  createdAt: Joi.date().default(Date.now),
  updatedAt: Joi.date().default(Date.now),
});
