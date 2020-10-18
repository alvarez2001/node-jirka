'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Partida.hasMany(models.Egreso, { as: 'egreso', foreignKey:'partida_id' });
    }
  };
  Partida.init({
    nombre: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
    },
  }, {
    sequelize,
    modelName: 'Partida'
  });
  return Partida;
};