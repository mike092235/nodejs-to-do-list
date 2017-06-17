var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;

 app.listen(3000, function() {
  console.log('listening on port 3000');
 })