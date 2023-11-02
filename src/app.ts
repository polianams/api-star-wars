import "express-async-errors";
import express from "express";
import { routes } from "./routes/routes";
import { errorMiddleware } from "./middleware/errorMiddleware";
import { axiosErrorMiddleware } from "./middleware/axiosErrorMiddleware";

const app = express();

app.use(express.json());

app.use(routes);

app.use(axiosErrorMiddleware);
app.use(errorMiddleware);

export { app };
