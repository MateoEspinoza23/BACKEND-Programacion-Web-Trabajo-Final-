import { Router } from "express";

import {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    loginUsuario
} from "../controllers/UsuarioController.js";

const router = Router();

router.get("/", getUsuarios);

router.get("/:id", getUsuarioById);

router.post("/", createUsuario);

// LOGIN
router.post("/login", loginUsuario);

router.put("/:id", updateUsuario);

router.delete("/:id", deleteUsuario);

export default router;