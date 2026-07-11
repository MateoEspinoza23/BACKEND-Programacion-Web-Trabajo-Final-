import { Router } from "express";

import eventoRouter from "./EventoRoutes.js";
import reservaRouter from "./ReservaRoutes.js";
import usuarioRouter from "./UsuarioRoutes.js";
import lugarRouter from "./LugarRoutes.js";

const mainRouter = Router();

// RUTAS REGISTRADAS

mainRouter.use("/eventos", eventoRouter);

// mainRouter.use("/reservas", reservaRouter);

mainRouter.use("/usuarios", usuarioRouter);

mainRouter.use("/lugares", lugarRouter);

mainRouter.use("/reservas", reservaRouter);

export default mainRouter;