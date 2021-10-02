'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Alumnos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellidoPaterno: {
        type: Sequelize.STRING
      },
      apellidoMaterno: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      fechaRegistro: {
        type: Sequelize.DATE
      },
      apoderado: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      instrumento: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Alumnos');
  }
};