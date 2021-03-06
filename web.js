var fs = require('fs');
var express = require('express');
var indexFilename = "./index.html";

var app = express.createServer(express.logger());
var buf = fs.readFileSync(indexFilename);
var str = buf.toString();

app.get('/', function(request, response) {
  response.send(str);	
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
