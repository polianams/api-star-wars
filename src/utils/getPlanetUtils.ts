import axios from "axios";

export const getPlanetName = async (planetURL: string) => {
  const response = await axios.get(planetURL);
  return response.data.name;
};
