var db = require('../config/db');

exports.write = function(purchaseId, price, stripeTransactionId) {
    db.row('InsertPurchase', [purchaseId, price, stripeTransactionId]);
}