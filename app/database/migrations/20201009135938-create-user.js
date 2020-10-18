'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario:{
        type:Sequelize.STRING(31),
        unique:true,
        allowNull:false,
      },
      password:{
          type:Sequelize.STRING(101),
          allowNull:false
      },
      email:{
          type:Sequelize.STRING(101),
          allowNull:false,
      },
      nombres:{
          type:Sequelize.STRING(151),
          allowNull:false
      },
      apellidos:{
          type:Sequelize.STRING(151),
          allowNull:false
      },
      cedula:{
          type:Sequelize.STRING(8),
          allowNull:false
      },
      nacimiento:{
          type:Sequelize.DATE,
          allowNull:true
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
    await queryInterface.dropTable('Users');
  }
};