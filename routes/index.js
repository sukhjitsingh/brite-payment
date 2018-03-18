var express = require('express');
var router = express.Router();
var coinPaymentClient = require('../paymentClient.js');
var trans = null; 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/payment', function(req, res, next) {
  coinPaymentClient.getBasicInfo(function (err, response) {
    console.log(response)
  })

  coinPaymentClient.createTransaction({'currency1' : 'LTCT', 'currency2' : 'LTCT', 'amount' : req.body.amount},function(err,result){
    res.status(200)
    // res.send({payment: result});
    res.end()
  });

});

module.exports = router;
