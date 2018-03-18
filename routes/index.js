var express = require('express');
var router = express.Router();
var coinPaymentClient = require('../paymentClient.js');
var trans = null; 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Post payment
router.post('/api/payment', function(req, res, next) {
  coinPaymentClient.getBasicInfo(function (err, response) {
    console.log(response)
  })

  coinPaymentClient.createTransaction({'currency1' : 'DASH', 'currency2' : 'DASH', 'amount' : req.body.amount},function(err,result){
    res.status(200)
    console.log(result);
    res.send({payment: result});
    res.end()
  });

});

//Get transaction status
router.post('/api/payment/status', function(req,res,next) {
  coinPaymentClient.getTx(req.body.paymentID,function(err,result){
    res.status(200)
    res.send({paymentStatus: result.status})
    res.end()
  })
})

module.exports = router;
