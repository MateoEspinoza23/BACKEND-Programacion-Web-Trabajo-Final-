'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idReserva: {
        type: Sequelize.STRING
      },
      usuarioEmail: {
        type: Sequelize.STRING
      },
      destino: {
        type: Sequelize.STRING
      },
      fechaViaje: {
        type: Sequelize.DATEONLY
      },
      cantidadPasajeros: {
        type: Sequelize.INTEGER
      },
      tipoBoleto: {
        type: Sequelize.STRING
      },
      asientos: {
        type: Sequelize.JSON
      },
      totalPagar: {
        type: Sequelize.DECIMAL
      },
      fechaRegistro: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservas');
  }
};