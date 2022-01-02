// Create the Socket
const arrayBuffer = new ArrayBuffer(4);
const View = new Int32Array(arrayBuffer);
View[0] = 20;
var socketId = socketId
var onReceive = function(packet){console.log(packet);};
chrome.sockets.udp.onReceive.addListener(onReceive);
chrome.sockets.udp.create({}, function(socketInfo) {
    // The socket is created, now we can send some data
    socketId = socketInfo.socketId;
    console.log("created socket" + socketId);
    chrome.sockets.udp.bind(socketId, "127.0.0.1", 8080, function(){
    	
    	chrome.sockets.udp.send(socketId, arrayBuffer,
      '127.0.0.1', 5555, function(sendInfo) {
        //console.log("sent " + sendInfo.bytesSent);
    });    	
    });
    
  });