'use strict';
module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define('Patient', {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    diagnosis: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Patient;
};