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
      Alumno.belongsTo(models.Profesor, {foreignKey: 'ProfesorId', as: 'profesor'})
      Alumno.belongsTo(models.Usuario, {foreignKey: 'UsuarioId', as: 'usuario'})
    }
  };
  Alumno.init({
    idAlumno: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellidoPaterno: DataTypes.STRING,
    apellidoMaterno: DataTypes.STRING,
    email: DataTypes.STRING,
    fechaRegistro: DataTypes.DATE,
    apoderado: DataTypes.STRING,
    direccion: DataTypes.STRING,
    instrumento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Alumno',
  });
  return Alumno;
};