import { NextFunction, Request, Response } from "express";
import { AxiosError } from "axios";
import { errorMiddleware } from "./errorMiddleware";

export const axiosErrorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.isAxiosError) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      return res
        .status(axiosError.response.status)
        .json({ message: "Resource not found." });
    } else {
      return errorMiddleware;
    }
  }
  next(error);
};
