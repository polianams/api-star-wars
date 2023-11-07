import axios from "axios";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { apiURL } from "../config/apiUrlConfig";
import { ConflictError } from "../helpers/errorHelp";

const prisma = new PrismaClient();

export const favoritesController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user.id;

  const getCharacter = await axios.get(`${apiURL}people/${id}`);

  const characterName = getCharacter.data.name;

  const existingFavorite = await prisma.favorites.findFirst({
    where: {
      user_id: userId,
      character_name: characterName,
    },
  });

  if (existingFavorite) {
    throw new ConflictError(
      "This character is already in the user's favorites."
    );
  }

  const favorite = await prisma.favorites.create({
    data: {
      character_name: characterName,
      user_id: userId,
    },
  });

  return res.status(201).json(favorite);
};
