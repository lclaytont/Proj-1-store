var db = require('../config/db');

exports.write = function(product_id, price, stripetransactionid) {
    db.row('InsertPurchase', [product_id, price, stripetransactionid]);
}