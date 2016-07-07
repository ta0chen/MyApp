/**
 * Created by tachen on 7/7/2016.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware
app.use(bodyParser());

//define routes
app.use(require('./todos'));

//start the server
var port = process.env.PORT || 8787

app.listen(port, function () {
    console.log('Server ready on port ' + port);
});