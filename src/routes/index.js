import { Router } from "express";
import homeRouter from "./HomeRoutes.js";
import eventoRouter from "./EventoRoutes.js";
import reservaRouter from "./ReservaRoutes.js";

const mainRouter = Router();

// RUTAS REGISTRADAS
mainRouter.use("/home", homeRouter);
mainRouter.use("/eventos", eventoRouter);
mainRouter.use("/reservas", reservaRouter);

export default mainRouter;