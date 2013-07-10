var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var readTxtFile = function(file) 
{
   buffer = fs.readFileSync(file);
   return buffer.toString('utf8');
};

app.get('/', function(request, response) {
  response.send(readTxtFile('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
