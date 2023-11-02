import axios from "axios";
import { Request, Response } from "express";
import { getObjectName, getObjectNames } from "../utils/getObjectUtils";
import { extractCharacterInfo } from "../utils/caracterInfoUtils";
import { apiURL } from "../config/apiUrlConfig";

export const getCharacterController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { page } = req.query;

  let apiEndpoint = `${apiURL}people`;

  if (page) {
    apiEndpoint = `${apiURL}people?page=${page}`;
  }

  const getCharacter = await axios.get(apiEndpoint);
  const characterData = getCharacter.data.results;

  if (id) {
    const getCharacterId = await axios.get(`${apiURL}people/${id}`);
    const character = getCharacterId.data;

    const characterInfo = await extractCharacterInfo(character);

    if (character.vehicles.length > 0) {
      const vehicleNames = await getObjectNames(
        character.vehicles,
        getObjectName
      );
      characterInfo.vehicles = vehicleNames;
    }

    if (character.starships.length > 0) {
      const starshipsNames = await getObjectNames(
        character.starships,
        getObjectName
      );
      characterInfo.starships = starshipsNames;
    }

    return res.status(200).json(characterInfo);
  }

  const characterNames = await Promise.all(
    characterData.map(async (character: any) => {
      const homeworldName = await getObjectName(character.homeworld);

      const characterInfo: any = {
        id: Number(character.url.split("/").slice(-2, -1)[0]),
        name: character.name,
        homeworld: homeworldName,
      };

      return characterInfo;
    })
  );

  return res.status(200).json(characterNames);
};
