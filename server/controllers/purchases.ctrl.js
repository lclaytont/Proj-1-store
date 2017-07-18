var express = require('express'); 
var procedures = require('../procedures/purchases.proc');

var router = express.Router(); 

//  --> /api/purchases/
route.post('/', function(req, res) {
     
    procedures.write(req.body.purchaseId, req.body.price, req.body.stripeTransactionId)
        .then(function(data) {
            console.log('Purchase History Saved'); 
            res.send(data);
        }, function(err) {
            console.log('Something went wrong trying to purchase: ' + err.message);
        })
})

module.exports = router;