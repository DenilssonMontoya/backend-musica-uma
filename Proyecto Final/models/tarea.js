'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tarea.belongsTo(models.Sesion, {foreignKey: 'SesionId', as: 'sesion'})
    }
  };
  Tarea.init({
    idTarea: DataTypes.INTEGER,
    fechaTarea: DataTypes.DATE,
    comentarioAlumno: DataTypes.STRING,
    comentarioProfesor: DataTypes.STRING,
    tareaTitulo: DataTypes.STRING,
    tareaDetalle: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tarea',
  });
  return Tarea;
};