const express= require('express');
const router = express.Router();
const db = require('../models')

router.get('/', (req,res) =>{
  let userLogin = req.session.login_user
  res.render('dokter',{user : userLogin,dokter:"Welcome To Dokter"});
})

router.get('/showTable', (req,res) =>{
  db.sequelize.query(`select "Patients"."nama" as "nama_pasien", "Diagnoses"."penyakit", "Diagnoses"."id", "Diagnoses"."tanggal","Diagnoses"."status", "Employees"."nama" as "nama_dokter" from "Diagnoses"
  inner join "Employees" on "Employees"."id" = "Diagnoses"."id_employee"
  inner join "Patients" on "Patients"."id" = "Diagnoses"."id_pasien";`, { type: db.sequelize.QueryTypes.SELECT})
  .then(tableJoin => {
    res.render('DokterShowTable', {user : req.session.login_user, tableJoin : tableJoin})
  })
})

router.get('/add', (req,res) =>{
  db.Patient.findAll()
  .then(_Patients =>{
    res.render('DokterAddData', {user : req.session.login_user, patients : _Patients})
  }).catch(err => {
    console.log(err);
  })
})

router.post('/add', (req,res) =>{
  let data = req.body
  let datasession = req.session.login_user
  db.Diagnosis.create({
    penyakit : data.Diagnosis,
    tanggal : data.tanggal_periksa,
    status : data.Status,
    id_pasien : data.idpatient,
    id_employee : datasession.id_employee
  })
  .then(()=>{
    res.redirect('/dokters/showTable');
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/edit/:id', (req,res) =>{
  let id = req.params.id;
  db.Diagnosis.findById(id)
  .then(diagnosis =>{
    db.Patient.findAll()
    .then(patient => {
      res.render('DokterEdit', {user:req.session.login_user,Diagnosis:diagnosis,patients:patient})
    })
  })
  .catch(err => {
    console.log(err);
  })
})

router.post('/edit/:id', (req,res) =>{
  let id = req.params.id;
  let data = req.body;
  db.Diagnosis.update({
    penyakit: data.Diagnosis,
    tanggal : new Date(),
    status : data.Status,
    id_pasien : data.idpatient,
    id_employee : req.session.login_user.id_employee
  },{
    where : {id:id}
  })
  .then(() =>{
    res.redirect('/dokters/showTable')
  })
  .catch(err =>{
    console.log(err);
  })
})

router.get('/delete/:id', (req,res) =>{
  let id = req.params.id;
  db.Diagnosis.destroy({
    where : {id:id}
  })
  .then(() => {
    res.redirect('/dokters/showTable');
  })
  .catch(err => {
    console.log(err);
  })
})

module.exports = router;
