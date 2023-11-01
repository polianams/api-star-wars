import { Router } from "express";
import { rootRouteController } from "../controllers/rootRouteController";
import { moviesControllers } from "../controllers/moviesControllers";

const routes = Router();

routes.get("/", rootRouteController);

routes.get("/movies", moviesControllers);
routes.get("/movies/:id", moviesControllers);

export { routes };
