var express = require('express');
var router = express.Router();
const db = require('../models');

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
  let userLogin = req.session.login_user
  res.render('mainmenu', {user : userLogin});
});


router.get('/logout', (req,res) =>{
  delete req.session.login_user
  res.redirect('/');
})


module.exports = router;
