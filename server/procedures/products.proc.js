db = require('../config/db');

exports.allProducts = function() {
    return db.rows('GetAllProducts', []);
}

exports.allApparel = function() {
    return db.rows('GetProApp', []);
}

exports.allMisc = function() {
    return db.rows('GetProMisc', []);
}

exports.singleProduct = function(id) {
    return db.row('GetSingleProduct', [id]);
}