chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'outerBounds': {
      'width': 1920,
      'height': 1080
    },
  },function(window){ window.onClosed.addListener(function(){  //Makes sure sockets created are closed
    chrome.sockets.udp.getSockets(function(sockets)
    {
      for (var i = sockets.length - 1; i >= 0; i--) {
        chrome.sockets.udp.close(sockets[i].socketId,function(){});
        console.log(sockets[i]);
      }
  });})});
});