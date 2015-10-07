var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser')
var wordClouds = require('../lib');

app.use(express.static('client'));
app.use(bodyParser.json());

app.post('/word-clouds', function(request, response) {
	var englishText = request.body.englishText;
	var portugueseText = request.body.portugueseText;
	response.send(wordClouds(englishText, portugueseText));
});

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});