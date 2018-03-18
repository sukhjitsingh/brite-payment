var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create/payment', function(req, res, next) {
  // res.set("Content-Type", "text/plain");
  res.status(200);
  res.send({message: "success"});
  res.end()
});

module.exports = router;
