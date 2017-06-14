'use strict';
module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define('Patient', {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    gender: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Patient;
};
