import express, { Request, Response, NextFunction } from "express";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("aagya aggya");
  res.send("aagya");
};
