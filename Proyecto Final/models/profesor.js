'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profesor.hasMany(models.Alumnos, {as: 'alumnos'})
    }
  };
  Profesor.init({
    idProfesor: DataTypes.INTEGER,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profesor',
  });
  return Profesor;
};