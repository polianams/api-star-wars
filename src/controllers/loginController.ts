import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { passwordJwt } from "../config/authConfig";
import { NotFoundError, UnauthorizedError } from "../helpers/errorHelp";

const prisma = new PrismaClient();

export const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const existingUsername = await prisma.users.findFirst({
    where: {
      username: username,
    },
  });

  if (!existingUsername) {
    throw new NotFoundError("Username not found.");
  }

  const passwordMatch = await bcrypt.compare(
    password,
    existingUsername.password
  );

  if (!passwordMatch) {
    throw new UnauthorizedError("Invalid username or password.");
  }

  const token = jwt.sign({ id: existingUsername.id }, passwordJwt, {
    expiresIn: "6h",
  });

  const { password: _, ...userData } = existingUsername;

  return res.status(200).json({
    ...userData,
    token,
  });
};
