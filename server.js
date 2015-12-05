var http = require('http');
var server = http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('Hello');
});
server.listen((process.env.PORT || 5000), function(){
  console.log('listening on *:5000');
});