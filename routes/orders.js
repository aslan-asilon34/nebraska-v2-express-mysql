var express = require('express');
var router = express.Router();

/* GET Order page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('orders/index', { title: 'Order Page' , layout: './layouts/backend-layout' });
});

module.exports = router;
