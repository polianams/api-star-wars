import axios from "axios";

export const getPlanetName = async (planetURL: string) => {
  const response = await axios.get(planetURL);
  return response.data.name;
};

export const getVehicleName = async (vehicleURL: string) => {
  const response = await axios.get(vehicleURL);
  return response.data.name;
};
