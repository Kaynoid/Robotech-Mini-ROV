// Create the Socket
var arrayBuffer = 1;
chrome.sockets.udp.create({}, function(socketInfo) {
    // The socket is created, now we can send some data
    var socketId = socketInfo.socketId;
    chrome.sockets.udp.send(socketId, arrayBuffer,
      '127.0.0.1', 0, function(sendInfo) {
        console.log("sent " + sendInfo.bytesSent);
    }); 
  });