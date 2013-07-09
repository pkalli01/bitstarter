var express = require('express');
var fs = require('fs');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var txt = fs.readFileSync('index.html');
var buffer = new Buffer (Buffer.byteLength(txt));
var btxt =  buffer.write(txt);
  response.send(buffer.toString(btxt));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
