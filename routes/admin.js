var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('./admin/admin-index');
  });

  router.get('/student-registered',(req,res)=>{
    res.render('./login/student-registration')
  })

  router.post('/student-register',(req,res)=>{
    console.log(req.body)
    res.render('./login/student-registration')
   
  })

module.exports = router;