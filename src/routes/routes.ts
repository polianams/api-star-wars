import { Router } from "express";
import { rootRouteController } from "../controllers/rootRouteController";
import { moviesController } from "../controllers/moviesController";
import { characterController } from "../controllers/characterController";

const routes = Router();

routes.get("/", rootRouteController);

routes.get("/movies", moviesController);
routes.get("/movies/:id", moviesController);

routes.get("/character", characterController);
routes.get("/character/:id", characterController);

export { routes };
