'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Partidas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      createdAt: {
        allowNull: false,
        type:Sequelize.DATE,
        defaultValue:new Date.now()
      },
      updatedAt: {
        allowNull: false,
        type:Sequelize.DATE,
        defaultValue:new Date.now()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Partidas');
  }
};