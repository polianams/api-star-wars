import { NextFunction, Request, Response } from "express";
import { ApiError } from "../helpers/errorHelp";

export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "Internal Server Error";
  console.log(error.message);
  return res.status(statusCode).json({ message });
};
