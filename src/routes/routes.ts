import { Router } from "express";
import { rootRouteController } from "../controllers/rootRouteController";
import { moviesController } from "../controllers/moviesController";
import { getCharacterController } from "../controllers/characterController";
import { getPlanetController } from "../controllers/planetController";

const routes = Router();

routes.get("/", rootRouteController);

routes.get("/movies", moviesController);
routes.get("/movies/:id", moviesController);

routes.get("/character", getCharacterController);
routes.get("/character/:id", getCharacterController);

routes.get("/planet", getPlanetController);
routes.get("/planet/:id", getPlanetController);

export { routes };
