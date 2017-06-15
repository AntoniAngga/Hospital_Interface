'use strict';
module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define('Patient', {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    gender: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE
  })
  
  Patient.associate = function(models){
    Patient.hasMany(models.Diagnosis, {foreignKey: 'id_pasien'})
  }
  
  return Patient;
};
