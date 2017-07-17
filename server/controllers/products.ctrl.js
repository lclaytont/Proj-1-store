var express = require('express');
var procedures = require('../procedures/products.proc');

var router = express.Router();

//  --> Auction API URI
//  --> /api/products

router.get('/', function(req, res) {
    return procedures.allProducts()
        .then(function(products) {
            console.log('Fetched Products')
            res.send(products)
        }, function(err) {
            console.log("Error retrieving products: " + err.message);
        })
})


module.exports = router;