import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import { BadRequestError } from "../helpers/errorHelp";

const prisma = new PrismaClient();

interface userDTO {
  username: string;
  email: string;
  password: string;
}

export const createUserController = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const existingUser = await prisma.users.findFirst({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    throw new BadRequestError("User already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user: userDTO = {
    username,
    email,
    password: hashedPassword,
  };

  await prisma.users.create({ data: user });

  return res.status(201).json({ message: "User created successfully." });
};
