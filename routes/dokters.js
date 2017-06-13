const express= require('express');
const router = express.Router();

router.get('/', (req,res) =>{
  res.render('dokter',{dokter:"Welcome To Dokter"});
})


module.exports = router;