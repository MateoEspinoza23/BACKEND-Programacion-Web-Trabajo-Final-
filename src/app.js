import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mainRouter from "./routes/index.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// =============================
// MIDDLEWARES
// =============================

app.use(cors());

app.use(express.json());

// =============================
// RUTAS API
// =============================

app.use("/api/v1", mainRouter);

// =============================
// RUTA PRINCIPAL
// =============================

app.get("/", (req, res) => {
    res.status(200).json({
        mensaje: "BACKEND FUNCIONA CORRECTAMENTE",
    });
});

// =============================
// RUTA NO ENCONTRADA
// =============================

app.use((req, res) => {
    res.status(404).json({
        mensaje: "RUTA NO ENCONTRADA",
    });
});

// =============================
// INICIAR SERVIDOR
// =============================

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});