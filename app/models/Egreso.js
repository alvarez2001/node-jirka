'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Egreso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Egreso.belongsTo(models.Partida, { as:'partida', foreignKey:'partida_id' });
    }
  };
  Egreso.init({
    fecha: {
      type:DataTypes.DATEONLY(),
      allowNull:false
    },
    total: {
      type:DataTypes.DECIMAL(14,2),
      allowNull:false
    },
    descripcion: {
      type:DataTypes.STRING,
      allowNull:false
    },
    tasa: {
      type:DataTypes.DECIMAL(14,2),
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Egreso',
  });
  return Egreso;
};