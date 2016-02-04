// inidialize app to be a function handler that you can supply to an HTTP server
var app = require('express')();

// supply that to an http server
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
