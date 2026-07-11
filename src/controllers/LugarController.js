import db from "../db/models/index.cjs";

const { Lugar } = db;

// OBTENER TODOS LOS LUGARES
export const getLugares = async (req, res) => {
  try {

    const lugares = await Lugar.findAll();

    res.status(200).json({
      status: "success",
      data: lugares,
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al obtener los lugares",
      error: error.message,
    });

  }
};

// OBTENER LUGAR POR ID
export const getLugarById = async (req, res) => {

  try {

    const { id } = req.params;

    const lugar = await Lugar.findByPk(id);

    if (!lugar) {

      return res.status(404).json({
        status: "error",
        message: "Lugar no encontrado",
      });

    }

    res.status(200).json({
      status: "success",
      data: lugar,
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al obtener el lugar",
      error: error.message,
    });

  }

};

// CREAR LUGAR
export const createLugar = async (req, res) => {

  try {

    const {
      nombre,
      descripcion,
      rutas,
      img
    } = req.body;

    const nuevoLugar = await Lugar.create({
      nombre,
      descripcion,
      rutas,
      img
    });

    res.status(201).json({
      status: "success",
      message: "Lugar creado correctamente",
      data: nuevoLugar,
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al crear el lugar",
      error: error.message,
    });

  }

};

// ACTUALIZAR LUGAR
export const updateLugar = async (req, res) => {

  try {

    const { id } = req.params;

    const lugar = await Lugar.findByPk(id);

    if (!lugar) {

      return res.status(404).json({
        status: "error",
        message: "Lugar no encontrado",
      });

    }

    await lugar.update(req.body);

    res.status(200).json({
      status: "success",
      message: "Lugar actualizado correctamente",
      data: lugar,
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al actualizar el lugar",
      error: error.message,
    });

  }

};

// ELIMINAR LUGAR
export const deleteLugar = async (req, res) => {

  try {

    const { id } = req.params;

    const lugar = await Lugar.findByPk(id);

    if (!lugar) {

      return res.status(404).json({
        status: "error",
        message: "Lugar no encontrado",
      });

    }

    await lugar.destroy();

    res.status(200).json({
      status: "success",
      message: "Lugar eliminado correctamente",
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al eliminar el lugar",
      error: error.message,
    });

  }

};