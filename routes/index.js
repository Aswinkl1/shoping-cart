const { Router } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./main/index');
});

router.get('/login',(req,res)=>{

  res.render('./login/login',{as:'aswin'});
})




module.exports = router;
