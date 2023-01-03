var http = require('http');
var app = require('./upload');

http.createServer(app.handleRequest).listen(8000);