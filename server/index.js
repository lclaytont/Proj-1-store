//  --> Imported Modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var checkAsset = require('./middleware/isAsset.mw')

//  --> Instantiate App
var app = express();

//  --> Setting up bodyParser and express.static
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json())


//  --> Utilizing mw for angular router purpose to remove #! in urls
app.get('*', function(req, res, next) {
    if (checkAsset.isAsset(req.url)) {
        next();
    }
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(3000);
console.log('Server listening on PORT 3000');