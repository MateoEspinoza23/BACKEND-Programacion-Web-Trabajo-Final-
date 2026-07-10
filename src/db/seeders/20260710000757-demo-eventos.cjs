'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Eventos', [
      {
        titulo: "Festival Gastronómico",
        categoria: "Entretenimiento",
        fecha: new Date("2026-07-20"),
        mes: "Jul",
        dia: "20",
        ubicacion: "Lima",
        descripcion: "Lo mejor de la gastronomía peruana con chefs reconocidos, talleres y degustaciones.",
        imagen: "./festgast.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: "Feria del Libro Lima",
        categoria: "Cultura",
        fecha: new Date("2026-07-25"),
        mes: "Jul",
        dia: "25",
        ubicacion: "Lima",
        descripcion: "La feria del libro más grande del Perú con autores nacionales e internacionales.",
        imagen: "./FeriaLibro.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: "Concierto en el Centro de Lima",
        categoria: "Entretenimiento",
        fecha: new Date("2026-07-10"),
        mes: "Jul",
        dia: "10",
        ubicacion: "Lima",
        descripcion: "Las mejores bandas peruanas en vivo en el corazón histórico de Lima.",
        imagen: "concierto.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: "Festival de Vendimia",
        categoria: "Entretenimiento",
        fecha: new Date("2026-03-05"),
        mes: "Mar",
        dia: "5",
        ubicacion: "Ica",
        descripcion: "El festival más famoso de la costa peruana celebrando la cosecha de uvas y la producción de pisco.",
        imagen: "./Vendimia.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: "Festival de la Candelaria",
        categoria: "Cultura",
        fecha: new Date("2026-02-02"),
        mes: "Feb",
        dia: "2",
        ubicacion: "Puno",
        descripcion: "El festival folclórico más grande de América con danzas típicas y trajes tradicionales del altiplano.",
        imagen: "./Candelaria.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: "Festival de la Marinera",
        categoria: "Cultura",
        fecha: new Date("2026-06-15"),
        mes: "Jun",
        dia: "15",
        ubicacion: "Trujillo",
        descripcion: "El festival de marinera más importante del Perú con participantes de todo el país.",
        imagen: "Festival_Marinera.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: "Festival de Primavera",
        categoria: "Entretenimiento",
        fecha: new Date("2026-09-23"),
        mes: "Sep",
        dia: "23",
        ubicacion: "Trujillo",
        descripcion: "Uno de los festivales más coloridos del norte del Perú con desfiles, música y danzas típicas.",
        imagen: "./Primavera.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Eventos', null, {});
  }
};