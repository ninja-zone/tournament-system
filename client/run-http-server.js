var express = require('express');
var app = express();

var host = '127.0.0.1';
var port = 5001;

app.use(express.static('app'));

console.log('>', host + ':' + port);

app.listen(port);