'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alumno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Alumno.init({
    nombre: DataTypes.STRING,
    apellidoPaterno: DataTypes.STRING,
    apellidoMaterno: DataTypes.STRING,
    email: DataTypes.STRING,
    fechaRegister: DataTypes.DATE,
    apoderado: DataTypes.STRING,
    direccion: DataTypes.STRING,
    instrumento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Alumno',
  });
  return Alumno;
};