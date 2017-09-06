var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/otherEvents', function(req, res, next) {
    res.render('otherEvents', { title: 'Express' });
});

module.exports = router;
