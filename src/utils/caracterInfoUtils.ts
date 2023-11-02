import { getObjectName } from "./getObjectUtils";
import { formatHeight } from "./convertUtils";

export const extractCharacterInfo = async (character: any) => {
  const homeworldName = await getObjectName(character.homeworld);

  const characterInfo: any = {
    name: character.name,
    height: formatHeight(character.height),
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
};
