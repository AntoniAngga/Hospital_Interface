'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Employees',[{
      nama: 'Gani',
      username: 'G@ni',
      password: '1234',
      role: 'Admin',
      email : 'BlueDargon@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Employees', null, {});
  }
};
