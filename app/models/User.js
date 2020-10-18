'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate(models) {
      // define association here
    }
  };
  User.init({
    usuario:{
        type:DataTypes.STRING(31),
        unique:true,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING(101),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(101),
        allowNull:false,
    },
    nombres:{
        type:DataTypes.STRING(151),
        allowNull:false
    },
    apellidos:{
        type:DataTypes.STRING(151),
        allowNull:false
    },
    cedula:{
        type:DataTypes.STRING(8),
        allowNull:false
    },
    nacimiento:{
        type:DataTypes.DATE,
        allowNull:true
    }
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};