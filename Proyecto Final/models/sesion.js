'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sesion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sesion.hasMany(models.Tarea, {as: 'tareas'})
    }
  };
  Sesion.init({
    idSesion: DataTypes.INTEGER,
    instrumento: DataTypes.STRING,
    tema: DataTypes.STRING,
    fechaSesion: DataTypes.DATE,
    estadoSesion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sesion',
  });
  return Sesion;
};