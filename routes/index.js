var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mainmenu',(req,res) =>{
  res.render('mainmenu',{test : 'ini untuk employee'});
});

router.get('/admin',(req,res) =>{
  res.render('admin', {admin : "Ini untuk admin"})
})

router.get('/dokter',(req,res) =>{
  res.render('dokter', {dokter : "Ini untuk dokter"})
})

router.get('/patient',(req,res) =>{
  res.render('patient', {patient : "Ini untuk patient"})
})

module.exports = router;
