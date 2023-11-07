import axios from "axios";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { apiURL } from "../config/apiUrlConfig";
import { ConflictError } from "../helpers/errorHelp";

const prisma = new PrismaClient();

export const createFavoriteController = async (req: Request, res: Response) => {
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

  const filmName = getCharacter.data.films[0];
  const planetName = getCharacter.data.homeworld;
  const starshipName = getCharacter.data.starships[0];
  const vehicleName = getCharacter.data.vehicles[0];

  const favorite = await prisma.favorites.create({
    data: {
      user_id: userId,
      character_name: characterName,
      film_name: filmName,
      planet_name: planetName,
      starship_name: starshipName,
      vehicle_name: vehicleName,
    },
  });

  return res.status(201).json(favorite);
};

export const listFavoritesController = async (req: Request, res: Response) => {
  const userId = req.user.id;

  const userFavorites = await prisma.favorites.findMany({
    where: {
      user_id: userId,
    },
    select: {
      character_name: true,
    },
  });

  return res.status(200).json(userFavorites);
};
