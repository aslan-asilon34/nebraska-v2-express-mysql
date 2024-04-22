var express = require('express');
var router = express.Router();

/* GET welcome page. */
router.get('/', function(req, res, next) {
  res.render('welcome/index', { title: 'Welcome to Nebraska !' , layout: './layouts/welcome-layout'});
});

module.exports = router;
