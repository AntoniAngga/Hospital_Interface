'use strict'

const express= require('express');
const router = express.Router();

router.get('/', (req,res) =>{
  res.render('employee',{employee:"Welcome To Employee"});
})

module.exports = router;