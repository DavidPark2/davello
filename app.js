var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(4000);

io.on('connection', function (socket) {
  socket.on('my other event', function (data) {
    console.log(data);
    socket.emit('news', { state: 'data' });
  });
});