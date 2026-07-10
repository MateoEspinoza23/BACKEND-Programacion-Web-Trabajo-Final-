'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    static associate(models) {
      // define association here
    }
  }

  Evento.init({
    titulo: DataTypes.STRING,
    categoria: DataTypes.STRING,
    fecha: DataTypes.DATE,
    mes: DataTypes.STRING,
    dia: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Evento',
  });

  return Evento;
};