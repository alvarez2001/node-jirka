'use strict';
const { Partida } = require('../../models/index');
const faker = require('faker')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    

    const egresos = [];

    const partidas = await Partida.findAll();

    partidas.forEach(partida => {
      for (let i = 0; i <= Math.round(Math.random() * 10); i++) {
        egresos.push({
          fecha:new Date(),
          total:(Math.random() * 10000000 ),
          descripcion:faker.lorem.text(),
          tasa:(Math.random() * 1000000 ),
          partida_id:partida.id
        });
        
      }
    });


     await queryInterface.bulkInsert('egresos', egresos, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('egresos', null, {});
    
  }
};
