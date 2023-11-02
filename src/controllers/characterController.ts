import axios from "axios";
import { Request, Response } from "express";
import { getObjectName, getObjectNames } from "../utils/getObjectUtils";
import { extractCharacterInfo } from "../utils/caracterInfoUtils";
import { convertHeight } from "../utils/convertUtils";
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
      const characterId = Number(character.url.split("/").slice(-2, -1)[0]);

      const characterInfo: any = {
        id: characterId,
        name: character.name,
        height: convertHeight(character.height),
        mass: `${character.mass}kg`,
        skin_color: character.skin_color,
        eye_color: character.eye_color,
        birth_year: character.birth_year,
        homeworld: homeworldName,
      };

      if (character.hair_color !== "n/a") {
        characterInfo.hair_color = character.hair_color;
      }

      if (character.gender !== "n/a") {
        characterInfo.gender = character.gender;
      }

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

      return characterInfo;
    })
  );

  return res.status(200).json(characterNames);
};
