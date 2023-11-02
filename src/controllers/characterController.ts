import axios from "axios";
import { Request, Response } from "express";
import { getPlanetName } from "../utils/getPlanetUtils";
import { convertHeight } from "../utils/convertUtils";
import { apiURL } from "../config/apiUrlConfig";

export const characterController = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id) {
    const getCharacter = await axios.get(`${apiURL}people/${id}`);
    const characterData = getCharacter.data;

    const homeworldName = await getPlanetName(characterData.homeworld);

    const modifiedCharacterData: any = {
      name: characterData.name,
      height: convertHeight(characterData.height),
      mass: `${characterData.mass}kg`,
      skin_color: characterData.skin_color,
      eye_color: characterData.eye_color,
      birth_year: characterData.birth_year,
      homeworld: homeworldName,
    };

    if (characterData.hair_color !== "n/a") {
      modifiedCharacterData.hair_color = characterData.hair_color;
    }

    if (characterData.gender !== "n/a") {
      modifiedCharacterData.gender = characterData.gender;
    }

    return res.status(200).json(modifiedCharacterData);
  }

  const getCharacter = await axios.get(`${apiURL}people`);
  const characterData = getCharacter.data.results;

  const characterNames = await Promise.all(
    characterData.map(async (character: any) => {
      const homeworldName = await getPlanetName(character.homeworld);
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

      return characterInfo;
    })
  );

  return res.status(200).json(characterNames);
};
