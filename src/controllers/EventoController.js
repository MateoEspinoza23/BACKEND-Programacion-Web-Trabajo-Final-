import db from "../db/models/index.cjs";

const { Evento } = db;

// Obtener todos los eventos
export const getEventos = async (req, res) => {
  try {
    const eventos = await Evento.findAll();

    res.status(200).json({
      status: "success",
      data: eventos,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "error",
      message: "Error al obtener los eventos",
      error: error.message,
    });
  }
};

// Obtener un evento por ID
export const getEventoById = async (req, res) => {
  try {
    const { id } = req.params;

    const evento = await Evento.findByPk(id);

    if (!evento) {
      return res.status(404).json({
        status: "error",
        message: "Evento no encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      data: evento,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error al obtener el evento",
      error: error.message,
    });
  }
};

// Crear un nuevo evento
export const createEvento = async (req, res) => {
  try {
    const {
      titulo,
      categoria,
      fecha,
      mes,
      dia,
      ubicacion,
      descripcion,
      imagen,
    } = req.body;

    const nuevoEvento = await Evento.create({
      titulo,
      categoria,
      fecha,
      mes,
      dia,
      ubicacion,
      descripcion,
      imagen,
    });

    res.status(201).json({
      status: "success",
      message: "Evento creado correctamente",
      data: nuevoEvento,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error al crear el evento",
      error: error.message,
    });
  }
};