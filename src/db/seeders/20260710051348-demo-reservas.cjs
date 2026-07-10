'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reservas', [
      {
        idReserva: 'RES-2026-001',
        usuarioEmail: 'juan@gmail.com',
        destino: 'Machu Picchu',
        fechaViaje: '2026-06-15',
        cantidadPasajeros: 2,
        tipoBoleto: 'Premium',
        asientos: JSON.stringify(['1A', '1B']),
        totalPagar: 90.00,
        fechaRegistro: '2026-05-29',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idReserva: 'RES-2026-002',
        usuarioEmail: 'juan@gmail.com',
        destino: 'Líneas de Nazca',
        fechaViaje: '2026-07-10',
        cantidadPasajeros: 1,
        tipoBoleto: 'Estandar',
        asientos: JSON.stringify(['4C']),
        totalPagar: 45.00,
        fechaRegistro: '2026-05-29',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idReserva: 'RES-2026-003',
        usuarioEmail: 'maria@gmail.com',
        destino: 'Montaña de 7 Colores',
        fechaViaje: '2026-06-22',
        cantidadPasajeros: 3,
        tipoBoleto: 'VIP',
        asientos: JSON.stringify(['2A', '2B', '2C']),
        totalPagar: 135.00,
        fechaRegistro: '2026-05-28',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reservas', null, {});
  }
};