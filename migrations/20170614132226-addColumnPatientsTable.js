'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return [
      queryInterface.addColumn(
      'Patients',
      'gender',
      {
        type : Sequelize.STRING
      }),
    queryInterface.addColumn(
      'Patients',
      'tanggal_lahir',
      {
        type : Sequelize.STRING
      })
    ]
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [
      queryInterface.removeColumn(
        'Patients', 'gender'),
      queryInterface.removeColumn(
        'Patients', 'tanggal_lahir')
      ]
    }
};
