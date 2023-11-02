import { formatPopulation, formatMeasurement } from "./../utils/convertUtils";
import axios from "axios";
import { Request, Response } from "express";
import { apiURL } from "../config/apiUrlConfig";

export const getPlanetController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { page } = req.query;

  let apiEndpoint = `${apiURL}planets`;

  if (page) {
    apiEndpoint = `${apiURL}planets?page=${page}`;
  }

  if (id) {
    const getPlanetId = await axios.get(`${apiURL}planets/${id}`);
    const planet = getPlanetId.data;

    const residents =
      planet.residents.length > 0
        ? await Promise.all(
            planet.residents.map(async (residentURL: string) => {
              const residentResponse = await axios.get(residentURL);
              const resident = residentResponse.data;
              return resident.name;
            })
          )
        : "No registered residents.";

    const planetInfo: any = {
      id: Number(planet.url.split("/").slice(-2, -1)[0]),
      name: planet.name,
      rotation_period: `${planet.rotation_period}h`,
      orbital_period: `${planet.orbital_period} days`,
      diameter: formatMeasurement(planet.diameter, "km"),
      climate: planet.climate,
      gravity: planet.gravity,
      terrain: planet.terrain,
      surface_water: `${planet.surface_water}%`,
      population: formatPopulation(planet.population),
      residents: residents,
    };

    return res.status(200).json(planetInfo);
  }

  const getPlanet = await axios.get(apiEndpoint);
  const planetData = getPlanet.data.results;
  const planetNames = await Promise.all(
    planetData.map(async (planet: any) => {
      const planetId = Number(planet.url.split("/").slice(-2, -1)[0]);

      const planetInfo: any = {
        id: planetId,
        name: planet.name,
        rotation_period: `${planet.rotation_period}h`,
        orbital_period: `${planet.orbital_period} days`,
        diameter: formatMeasurement(planet.diameter, "km"),
        climate: planet.climate,
        gravity: planet.gravity,
        terrain: planet.terrain,
        surface_water: `${planet.surface_water}%`,
        population: formatPopulation(planet.population),
      };

      return planetInfo;
    })
  );

  return res.status(200).json(planetNames);
};
