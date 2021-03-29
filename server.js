var http=require('http');
//(function(request,response) {}) is a callback function. It is called everytime the server receives a request :)
var server=http.createServer((function(request,response)
{
	response.writeHead(200,
	{"Content-Type" : "text/plain"});
	response.end("Hello World\n");
}));

//In fact, the Server object returned by createServer is an EventEmitter, and what we have here is just shorthand for creating a server object and then adding the listener later.
const server = http.createServer();
server.on('request', (request, response) => {
});  
//So, everytime the server receives a request, request event is emitted and the callback function is called.
//Most of Nodejs is about this. Events and evenemitters and callbacks!
//It's been fun so far

server.listen(7000);


