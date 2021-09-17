const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);
app.use(express.static(__dirname))

try {
  app.listen(process.env.PORT || 8080);
  console.log('\nRUNNING ON localhost:8080\n quit_server.sh TO STOP');
} catch (error) {
  console.log("SERVER ALREADY RUNNING ON PORT 8080")
}


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