var express = require('express');
var router = express.Router();
var coinPaymentClient = require('../paymentClient.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create/payment', function(req, res, next) {
  // res.set("Content-Type", "text/plain");

  coinPaymentClient.getBasicInfo(function (err, response) {
    console.log(response)
  })

  coinPaymentClient.balances(function(err,result){
    console.log(result);
  });

  coinPaymentClient.createTransaction({'currency1' : 'LTCT', 'currency2' : 'LTCT', 'amount' : 1},function(err,result){
    console.log(result);
  });

  coinPaymentClient

  res.status(200);
  res.send({message: "success"});
  res.end()
});

module.exports = router;
