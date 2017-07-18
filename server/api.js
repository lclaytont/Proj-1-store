var express = require('express');
var products = require('./controllers/products.ctrl');
var email = require('./controllers/email.ctrl');

var router = express.Router();

router.use('/products', products);
router.use('/email', email);

module.exports = router;