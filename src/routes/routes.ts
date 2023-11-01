import { Router } from "express";
import { rootRouteController } from "../controllers/rootRouteController";

const routes = Router();

routes.get("/", rootRouteController);

export { routes };
