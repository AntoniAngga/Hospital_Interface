var express = require('express');
var router = express.Router();
const db = require('../models');
const viewHelper = require('../helpers/helpFunction');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/doLogin', (req,res) =>{
  let data = req.body;
  db.Employee.findOne({
    where : {username : data.username, password : data.password}
  })
  .then(data => {
    if (data != null ) {
      req.session.login_user = {name : data.nama, username : data.username, email: data.email, role : data.role, id_employee : data.id}
      let userlogin = req.session.login_user
      res.redirect('/mainmenu');
    }
    else{
      res.redirect('/')
    }
  })
})



router.get('/mainmenu', function(req, res, next) {
  res.locals.helper = viewHelper
  let userLogin = req.session.login_user
  db.sequelize.query(`select "penyakit", Count("Diagnoses"."penyakit") from "Diagnoses"
group by "penyakit"`, { type: db.sequelize.QueryTypes.SELECT})
.then(data =>{
  let DataArray = [['Penyakit',"Jumlah"]];
  data.forEach(d => {
     DataArray.push([d.penyakit,+d.count]);
  })
  res.render('mainmenu', {user : userLogin, DataArray : DataArray});
  console.log(DataArray);
})
});


router.get('/logout', (req,res) =>{
  delete req.session.login_user
  res.redirect('/');
})


module.exports = router;
