const express= require('express');
const router = express.Router();
const db = require('../models');



router.get('/', (req,res) =>{
  db.Patient.findAll()
  .then(data_patient => {
    res.render('patient', {data_patient: data_patient});
  })
  .catch(err =>{
    console.log(err);
  })

})

router.post('/add', (req,res) =>{
  let dataPatient = req.body

  db.Patient.create({
    nama: dataPatient.name,
    alamat: dataPatient.alamat,
    gender: dataPatient.gender,
    tanggal_lahir: dataPatient.tanggal_lahir
  })
  .then(() =>{
    res.redirect('/patients')
  })
  .catch((err) =>{
    console.log(err);
  })

})

router.get('/edit/:id', (req, res) => {
  let id = req.params.id

  db.Patient.findById(id)
  .then(_data_patient => {
    res.render('patientEdit', {data_patient: _data_patient});
  })
  .catch(err =>{
    console.log(err);
  })
})

router.post('/edit/:id', (req, res) => {
  let id = req.params.id
  let data = req.body
  db.Patient.update({
    nama: data.nama,
    alamat: data.alamat,
    gender: data.gender,
    tanggal_lahir: data.tanggal_lahir
  },{
    where:  {id:id}
  })
  .then(() =>{
    res.redirect('/patients')
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/delete/:id', (req,res) =>{
  let id = req.params.id

  db.Patient.destroy({
    where: {id:id}
  })
  .then(() => {
    res.redirect('/patients')
  })
  .catch(err => {
    console.log(err);
  })
})



module.exports = router;
