var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('abouts/index',{ title: 'About Page', layout: './layouts/backend-layout'});
});

// router.get('/', function(req, res, next) {
//   console.log("Abouts route accessed");
//   let data = {
//     title: 'About Page',
//   }
//   res.render('abouts/index', data);
// });

module.exports = router;
