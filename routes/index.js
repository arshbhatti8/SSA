var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/formal', function(req, res, next) {
    res.render('formal', { title: 'Express' });
});

module.exports = router;
