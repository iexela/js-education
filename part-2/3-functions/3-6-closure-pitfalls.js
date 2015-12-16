
function createVideoEditor(rootDomNode) {
  var videoCanvas,
      videoLayers,
      videoChannels;

  //initialization of video canvas

  rootDomNode.on("click", function () {
    //work with video canvas
  });

  videoChannels.forEach(function (channel) {
    channel.on("new-time-segment", function () {
      //work with video layers
    });
  });

  return {
    play: function() {},
    stop: function() {}//,
    //destroy: function() {}
  };
}

var editor = createVideoEditor(document.getElementById("video"));

//can result in memory leaks
//we need to clean all references to/on dom nodes
//think about destroy/clean method
