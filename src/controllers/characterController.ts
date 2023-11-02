import axios from "axios";
import { Request, Response } from "express";
import { getPlanetName, getVehicleName } from "../utils/getPlanetUtils";
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

    const homeworldName = await getPlanetName(character.homeworld);

    const characterinfo: any = {
      name: character.name,
      height: convertHeight(character.height),
      mass: `${character.mass}kg`,
      skin_color: character.skin_color,
      eye_color: character.eye_color,
      birth_year: character.birth_year,
      homeworld: homeworldName,
    };

    if (character.hair_color !== "n/a") {
      characterinfo.hair_color = character.hair_color;
    }

    if (character.gender !== "n/a") {
      characterinfo.gender = character.gender;
    }

    if (character.vehicles.length > 0) {
      let vehicleNames: string[] = [];
      if (character.vehicles.length > 0) {
        vehicleNames = await Promise.all(
          character.vehicles.map(async (vehicle: string) => {
            return await getVehicleName(vehicle);
          })
        );
      }
      characterinfo.vehicles = vehicleNames;
    }

    return res.status(200).json(characterinfo);
  }

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

      if (character.vehicles.length > 0) {
        let vehicleNames: string[] = [];
        if (character.vehicles.length > 0) {
          vehicleNames = await Promise.all(
            character.vehicles.map(async (vehicle: string) => {
              return await getVehicleName(vehicle);
            })
          );
        }
        characterInfo.vehicles = vehicleNames;
      }

      return characterInfo;
    })
  );

  return res.status(200).json(characterNames);
};
