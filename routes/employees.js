'use strict'

const express= require('express');
const router = express.Router();
const db = require('../models')

router.get('/', (req,res) => {

  db.Employee.findAll()
  .then(data_employee => {
    let userLogin = req.session.login_user
    res.render('admin',{ user : userLogin, data_employee: data_employee});
    // console.log(data_employee);
  })
  .catch(err => {
    console.log(err);
  })
})

router.post('/add', (req, res) =>{
  let data = req.body
  db.Employee.create({
    nama: data.nama,
    username: data.username,
    password: data.password,
    role: data.role,
    email : data.email
  })
  .then(() =>{
    res.redirect('/admin')
  })
  .catch(err =>{
    console.log(err);
  })
})

router.get('/edit/:id',(req,res)=>{
  let id = req.params.id
  let userLogin = req.session.login_user
  db.Employee.findOne({
    where : {id:id}
  }).then((_employee) => {
    res.render('AdminEdit', {user : userLogin, employees : _employee});
  })
  .catch(err => {
    console.log(err);
  })

})

router.post('/edit/:id',(req,res)=>{
  let id = req.params.id
  let data = req.body
  db.Employee.update({
    nama: data.nama,
    username: data.username,
    password: data.password,
    role: data.role
  }, {
    where : {id : id}
  })
  .then(() =>{
    res.redirect('/admin');
  })
  .catch(err =>{
    console.log(err);
  })
})

router.get('/delete/:id',(req,res)=>{
  let id = req.params.id
  db.Employee.destroy({
    where : {id:id}
  })
  .then( () =>{
    res.redirect('/admin')
  })
  .catch(err => {
    console.log(err);
  })
})

module.exports = router;
