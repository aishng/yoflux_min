Object.assign = require('object-assign');
var express = require('express');
var server = express();

server.use(express.static('public'));
server.listen(3000);

module.exports = server;
