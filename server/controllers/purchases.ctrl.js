var express = require('express'); 
var procedures = require('../procedures/purchases.proc');
var stripeSvc = require('../services/stripe.svc');

var router = express.Router(); 

//  --> /api/purchases/
route.post('/', function(req, res) {
     stripeSvc.charge(req.body.token, req.body.amount)
         .then(function (success) {
             procedures.write(req.body.purchaseId, req.body.amount, req.body.stripeTransactionId)
                 .then(function (data) {
                     console.log('Purchase History Saved');
                     res.send(data);
                 }, function (err) {
                     console.log('Something went wrong trying to purchase: ' + err.message);
                 })
        }, function(err) {
            console.log('Something went wrong trying to charge the card: ' + err.message);
        })   
})

module.exports = router;