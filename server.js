const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);
app.use(express.static(__dirname))
app.listen(process.env.PORT || 8080);
console.log('Running on localhost:8080');

// Maintain a hash of all connected sockets
var sockets = {}, nextSocketId = 0;
app.on('connection', function (socket) {
  // Add a newly connected socket
  var socketId = nextSocketId++;
  sockets[socketId] = socket;
  console.log('socket', socketId, 'opened');

  // Remove the socket when it closes
  socket.on('close', function () {
    console.log('socket', socketId, 'closed');
    delete sockets[socketId];
  });

  // Extend socket lifetime for demo purposes
  socket.setTimeout(400);
});

// Count down from 10 seconds
(function countDown (counter) {
  console.log(counter);
  if (counter > 0)
    return setTimeout(countDown, 100, counter - 1);

  // Close the server
  server.close(function () { console.log('Server closed!'); });
  // Destroy all open sockets
  for (var socketId in sockets) {
    console.log('socket', socketId, 'destroyed');
    sockets[socketId].destroy();
  }
})(10);