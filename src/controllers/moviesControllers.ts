import { Request, Response } from "express";
import axios from "axios";

const apiURL = "https://swapi.dev/api/";

export const moviesControllers = async (req: Request, res: Response) => {
  try {
    const getMovies = await axios.get(`${apiURL}films`);
    const moviesData = getMovies.data.results;
    const titlesArray = moviesData.map((movie: any) => movie.title);

    return res.json({ movies: titlesArray });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
