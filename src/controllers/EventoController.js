import db from "../db/models/index.cjs";

const { Evento } = db;

// PARA TODOS LOS EVENTOS
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

// OBTENER EVENTO POR ID:
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

// NUEVO EVENT
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

//ACTUALIZAR  
export const updateEvento = async (req, res) => {
  try {
    const { id } = req.params;

    const evento = await Evento.findByPk(id);

    if (!evento) {
      return res.status(404).json({
        status: "error",
        message: "Evento no encontrado",
      });
    }

    await evento.update(req.body);

    res.status(200).json({
      status: "success",
      message: "Evento actualizado correctamente",
      data: evento,
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error al actualizar el evento",
      error: error.message,
    });
  }
};
//ELIMINAR 
export const deleteEvento = async (req, res) => {
  try {
    const { id } = req.params;

    const evento = await Evento.findByPk(id);

    if (!evento) {
      return res.status(404).json({
        status: "error",
        message: "Evento no encontrado",
      });
    }

    await evento.destroy();

    res.status(200).json({
      status: "success",
      message: "Evento eliminado correctamente",
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error al eliminar el evento",
      error: error.message,
    });
  }
};