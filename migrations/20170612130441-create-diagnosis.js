'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Diagnoses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      penyakit: {
        type: Sequelize.STRING
      },
      tanggal: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      id_pasien: {
        type: Sequelize.INTEGER
      },
      id_employee: {
        type: Sequelize.INTEGER
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Diagnoses');
  }
};