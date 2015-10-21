Object.assign = require('object-assign');
var express = require('express');
var server = express();
server.use(express.static('public'));

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Application listening on port ' + port);

module.exports = server;

