const express= require('express');
const router = express.Router();

router.get('/', (req,res) =>{
  res.render('dokter',{dokter:"Welcome To Dokter"});
})

router.get('/showTable', (req,res) =>{
  res.render('DokterShowTable',{dokter:"Welcome To Dokter"});
})

router.get('/add', (req,res) =>{
  res.render('DokterAddData',{dokter:"Welcome To Dokter"});
})

module.exports = router;
