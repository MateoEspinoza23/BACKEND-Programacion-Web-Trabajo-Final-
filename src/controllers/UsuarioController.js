import db from "../db/models/index.cjs";

const { Usuario } = db;

// ======================================================
// OBTENER TODOS LOS USUARIOS
// ======================================================

export const getUsuarios = async (req, res) => {

  try {

    const usuarios = await Usuario.findAll();

    res.status(200).json({
      status: "success",
      data: usuarios,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      status: "error",
      message: "Error al obtener los usuarios",
      error: error.message,
    });

  }

};

// ======================================================
// OBTENER USUARIO POR ID
// ======================================================

export const getUsuarioById = async (req, res) => {

  try {

    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {

      return res.status(404).json({
        status: "error",
        message: "Usuario no encontrado",
      });

    }

    res.status(200).json({
      status: "success",
      data: usuario,
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al obtener el usuario",
      error: error.message,
    });

  }

};

// ======================================================
// LOGIN
// ======================================================

export const loginUsuario = async (req, res) => {

  try {

    const { correo, contraseña } = req.body;

    if (!correo || !contraseña) {

      return res.status(400).json({
        status: "error",
        message: "Correo y contraseña son obligatorios",
      });

    }

    const usuario = await Usuario.findOne({

      where: {
        correo,
      },

    });

    if (!usuario) {

      return res.status(404).json({
        status: "error",
        message: "El correo no está registrado",
      });

    }

    if (usuario.contraseña !== contraseña) {

      return res.status(401).json({
        status: "error",
        message: "Contraseña incorrecta",
      });

    }

    res.status(200).json({

      status: "success",

      message: "Inicio de sesión correcto",

      data: usuario,

    });

  } catch (error) {

    res.status(500).json({

      status: "error",

      message: "Error al iniciar sesión",

      error: error.message,

    });

  }

};

// ======================================================
// CREAR USUARIO
// ======================================================

export const createUsuario = async (req, res) => {

  try {

    const {
      nombre,
      correo,
      contraseña,
      telefono,
      pais,
      ciudad,
      fechaNacimiento,
      dni,
      pasaporte,
      foto
    } = req.body;

    const nuevoUsuario = await Usuario.create({
      nombre,
      correo,
      contraseña,
      telefono,
      pais,
      ciudad,
      fechaNacimiento,
      dni,
      pasaporte,
      foto
    });

    res.status(201).json({
      status: "success",
      message: "Usuario creado correctamente",
      data: nuevoUsuario,
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al crear el usuario",
      error: error.message,
    });

  }

};

// ======================================================
// ACTUALIZAR USUARIO
// ======================================================

export const updateUsuario = async (req, res) => {

  try {

    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {

      return res.status(404).json({
        status: "error",
        message: "Usuario no encontrado",
      });

    }

    await usuario.update(req.body);

    res.status(200).json({
      status: "success",
      message: "Usuario actualizado correctamente",
      data: usuario,
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al actualizar el usuario",
      error: error.message,
    });

  }

};

// ======================================================
// ELIMINAR USUARIO
// ======================================================

export const deleteUsuario = async (req, res) => {

  try {

    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {

      return res.status(404).json({
        status: "error",
        message: "Usuario no encontrado",
      });

    }

    await usuario.destroy();

    res.status(200).json({
      status: "success",
      message: "Usuario eliminado correctamente",
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Error al eliminar el usuario",
      error: error.message,
    });

  }

};