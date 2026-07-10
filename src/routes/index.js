import { Router } from "express";
import homeRouter from "./HomeRoutes.js";
import eventoRouter from "./EventoRoutes.js";

const mainRouter = Router();

// RUTAS REGISTRADAS
mainRouter.use("/home", homeRouter);
mainRouter.use("/eventos", eventoRouter);

export default mainRouter;