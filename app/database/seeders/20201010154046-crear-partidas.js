'use strict';
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const partidas = [
      {nombre:'Manutencion del Seminario redemtoris mater'+new Date().getMilliseconds()},
      {nombre:'Pago de servicios'+new Date().getMilliseconds()},
      {nombre:'Pago en efectivo'+new Date().getMilliseconds()},
      {nombre:'Manutencion de la casa'+new Date().getMilliseconds()},
      {nombre:'Pago en transfenrecias'+new Date().getMilliseconds()},
      {nombre:'Manutencion de todo'+new Date().getMilliseconds()},
    ]

     await queryInterface.bulkInsert('partidas', partidas, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('partidas', null, {});
  }
};
