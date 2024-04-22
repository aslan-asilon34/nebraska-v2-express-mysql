var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('auth-page/login', { title: 'login page' , layout: './layouts/auth-layout' });
});

module.exports = router;
