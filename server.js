var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extended: true}));

// Configure Template Engine
app.set('view engine', 'ejs');

// Set index.html as default directory
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Connect to Mongo Database
var db;
MongoClient.connect('mongodb://'user':'pass'@ds127892.mlab.com:27892/my-app-db', (err, database) => {
  if(err) return console.log(err);
  db = database;
  app.listen(3001, function() {
  console.log('listening on port 3001');
  });
});

// Create new Collection
app.post('/quotes', function(req, res) {
  db.collection('quotes').save(req.body, function(err, results) {
    if(err) return console.log(err);
    res.redirect('/');
  });
});

// Find Quotes
app.get('/quotes', function(req, res){
  db.collection('quotes').find().toArray(function(err, results){
    if(err) return console.log(err);
    res.render('index.ejs', {quotes: results});
  });
});

// Render form input to "/quotes"
app.post('/quotes', (req, res) => {
  console.log(req.body);
});

