var express = require('express');
var router = express.Router();

/* GET dashboard page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('dashboard/index', { 
    title: 'Dashboard' , 
    layout: './layouts/backend-layout',
    isActive: 'users',
    req: req 
  });
});

module.exports = router;
