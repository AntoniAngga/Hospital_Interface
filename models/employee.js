'use strict';
module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define('Employee', {
    nama: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    email : DataTypes.STRING
  })
  
  Employee.associate = function(models){
    Employee.hasMany(models.Diagnosis, {foreignKey: 'id_employee'})
  }
  
  return Employee;
};