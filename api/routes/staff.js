var express = require('express');
var router = express.Router();
var {GetStaff} = require('../dataservice/dataservice')

/* GET users listing. */
router.get('/', function(req, res, next) {
 
  GetStaff((jsnText) =>{
    res.send(jsnText);
  });
  

});

module.exports = router;
