'use strict';
module.exports = function(sequelize, DataTypes) {
  var Diagnosis = sequelize.define('Diagnosis', {
    penyakit: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    status: DataTypes.STRING,
    id_pasien: DataTypes.INTEGER,
    id_employee: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Diagnosis;
};