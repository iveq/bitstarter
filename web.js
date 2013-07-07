var express = require('express');
var indexFilename = "./index.html";

var app = express.createServer(express.logger());
var buf = fs.readFileSync(indexFilename);

app.get('/', function(request, response) {
  respone.send(buf);	
/*
  response.send('Hello World 2!');
*/
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
