import { checkLoggedMiddleware } from "./../middleware/authMiddleware";
import { Router } from "express";
import { rootRouteController } from "../controllers/rootRouteController";
import { moviesController } from "../controllers/moviesController";
import { getCharacterController } from "../controllers/characterController";
import { getPlanetController } from "../controllers/planetController";
import { createUserController } from "../controllers/userController";
import { loginController } from "../controllers/loginController";
import { createFavoriteController } from "../controllers/favoritesController";

const routes = Router();

routes.get("/", rootRouteController);

routes.get("/movies", moviesController);
routes.get("/movies/:id", moviesController);

routes.get("/character", getCharacterController);
routes.get("/character/:id", getCharacterController);

routes.get("/planet", getPlanetController);
routes.get("/planet/:id", getPlanetController);

routes.post("/user", createUserController);
routes.post("/login", loginController);

routes.post(
  "/favorites/character/:id",
  checkLoggedMiddleware,
  createFavoriteController
);

export { routes };
