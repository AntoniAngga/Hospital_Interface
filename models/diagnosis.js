'use strict';
module.exports = function(sequelize, DataTypes) {
  var Diagnosis = sequelize.define('Diagnosis', {
    penyakit: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    status: DataTypes.STRING,
    id_pasien: DataTypes.INTEGER,
    id_employee: DataTypes.INTEGER
  })
  
  Diagnosis.associate = function(models){
    Diagnosis.belongsTo(models.Patient,{foreignKey : "id_pasien"})
    Diagnosis.belongsTo(models.Employee,{foreignKey : "id_employee"})
  }
  
  return Diagnosis;
};