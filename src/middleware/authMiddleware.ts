import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { passwordJwt } from "../config/authConfig";
import { BadRequestError, UnauthorizedError } from "../helpers/errorHelp";

const prisma = new PrismaClient();

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const checkLoggedMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new UnauthorizedError("Unauthorized");
  }

  const token = authorization as string;

  const { username } = jwt.verify(token, passwordJwt) as { username: string };

  const user = await prisma.users.findFirst({
    where: {
      username,
    },
  });

  if (!user) {
    throw new BadRequestError("Unauthorized");
  }

  req.user = user;
  next();
};
