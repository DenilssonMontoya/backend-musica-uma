'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasOne(models.Alumno, {as: 'alumno'})
    }
  };
  Usuario.init({
    idUsuario: DataTypes.INTEGER,
    nombreUsuario: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    tipoUsuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};