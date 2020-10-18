'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Egresos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        type:Sequelize.DATE(),
        allowNull:false
      },
      total: {
        type:Sequelize.DECIMAL(14,2),
        allowNull:false
      },
      descripcion: {
        type:Sequelize.STRING,
        allowNull:false
      },
      tasa: {
        type:Sequelize.DECIMAL(14,2),
        allowNull:false
      },
      partida_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'partidas',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
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
    await queryInterface.dropTable('Egresos');
  }
};