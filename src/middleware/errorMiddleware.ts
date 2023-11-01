import { NextFunction, Request, Response } from "express";
import { AxiosError } from "axios";
import { ApiError, NotFoundError } from "../helpers/errorHelp";

export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AxiosError && error.response?.status === 404) {
    throw new NotFoundError("Resource not found.");
  }

  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "Internal Server Error.";
  console.log(error.message);
  return res.status(statusCode).json({ message });
};
