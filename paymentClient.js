var options = [];

options.key = '1b2f898722e6a0eb06f7c1a09b6ec9b2a8bd674a6b6e3d6c8d7d8e0c5802f494';
options.secret = 'F56AB20DFddD7cfc28696850ce7FafF0E4004b6d165abf5bb6eAfF7D30aAe30d';

var Coinpayments = require('coinpayments');
var coinPaymentClient = new Coinpayments(options);

module.exports = coinPaymentClient;
