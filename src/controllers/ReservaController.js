import db from "../db/models/index.cjs";

const { Reserva } = db;

// OBTENER TODAS LAS RESERVAS
export const getReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll();

    res.status(200).json({
      status: "success",
      data: reservas,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "error",
      message: "Error al obtener las reservas",
      error: error.message,
    });
  }
};

// OBTENER RESERVA POR ID
export const getReservaById = async (req, res) => {
  try {
    const { id } = req.params;

    const reserva = await Reserva.findByPk(id);

    if (!reserva) {
      return res.status(404).json({
        status: "error",
        message: "Reserva no encontrada",
      });
    }

    res.status(200).json({
      status: "success",
      data: reserva,
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al obtener la reserva",
      error: error.message,
    });

  }
};

// CREAR RESERVA
export const createReserva = async (req, res) => {

  try {

    const {
      idReserva,
      usuarioEmail,
      destino,
      fechaViaje,
      cantidadPasajeros,
      tipoBoleto,
      asientos,
      totalPagar,
      fechaRegistro
    } = req.body;

    const nuevaReserva = await Reserva.create({
      idReserva,
      usuarioEmail,
      destino,
      fechaViaje,
      cantidadPasajeros,
      tipoBoleto,
      asientos,
      totalPagar,
      fechaRegistro
    });

    res.status(201).json({
      status: "success",
      message: "Reserva creada correctamente",
      data: nuevaReserva,
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al crear la reserva",
      error: error.message,
    });

  }

};

// ACTUALIZAR RESERVA
export const updateReserva = async (req, res) => {

  try {

    const { id } = req.params;

    const reserva = await Reserva.findByPk(id);

    if (!reserva) {
      return res.status(404).json({
        status: "error",
        message: "Reserva no encontrada",
      });
    }

    await reserva.update(req.body);

    res.status(200).json({
      status: "success",
      message: "Reserva actualizada correctamente",
      data: reserva,
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al actualizar la reserva",
      error: error.message,
    });

  }

};

// ELIMINAR RESERVA
export const deleteReserva = async (req, res) => {

  try {

    const { id } = req.params;

    const reserva = await Reserva.findByPk(id);

    if (!reserva) {
      return res.status(404).json({
        status: "error",
        message: "Reserva no encontrada",
      });
    }

    await reserva.destroy();

    res.status(200).json({
      status: "success",
      message: "Reserva eliminada correctamente",
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al eliminar la reserva",
      error: error.message,
    });

  }

};