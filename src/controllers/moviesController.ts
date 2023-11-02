import axios from "axios";
import { Request, Response } from "express";
import { apiURL } from "../config/apiUrlConfig";

export const moviesController = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id) {
    const getMovie = await axios.get(`${apiURL}films/${id}`);
    const movieData = getMovie.data;

    const modifiedMovieData = {
      title: movieData.title,
      episode_id: movieData.episode_id.toString(),
      release_date: movieData.release_date,
      opening_crawl: movieData.opening_crawl.replace(/\r\n/g, " "),
    };

    return res.status(200).json(modifiedMovieData);
  }

  const getMovies = await axios.get(`${apiURL}films`);
  const movieData = getMovies.data.results;
  const modifiedMovieData = movieData.map((movie: any) => {
    return {
      title: movie.title,
      episode_id: movie.episode_id.toString(),
    };
  });

  return res.status(200).json(modifiedMovieData);
};
