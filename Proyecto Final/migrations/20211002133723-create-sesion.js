'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sesions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idSesion: {
        type: Sequelize.INTEGER
      },
      instrumento: {
        type: Sequelize.STRING
      },
      tema: {
        type: Sequelize.STRING
      },
      fechaSesion: {
        type: Sequelize.DATE
      },
      estadoSesion: {
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
    await queryInterface.dropTable('Sesions');
  }
};