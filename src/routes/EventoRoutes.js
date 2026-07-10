import { Router } from "express";
import {
  getEventos,
  getEventoById,
  createEvento,
} from "../controllers/EventoController.js";

const router = Router();

// Obtener todos los eventos
router.get("/", getEventos);

// Obtener un evento por ID
router.get("/:id", getEventoById);

// Crear un nuevo evento
router.post("/", createEvento);

export default router;