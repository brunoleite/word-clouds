var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.use(express.static('client'));

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});