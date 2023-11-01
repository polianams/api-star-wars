import { Request, Response } from "express";

export const rootRouteController = (req: Request, res: Response) => {
  const message = "Bem-vindo à API do Star Wars!";
  return res.status(200).json({ message });
};
