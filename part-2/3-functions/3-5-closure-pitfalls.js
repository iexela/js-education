
function creatseVideoEditor(rootDomNode) {
  var videoCanvas,
      videoLayers,
      videoChannels;

  //initialization of video canvas

  rootDomNode.on("click", function () {
    //work with videoCanvas
    //holds all object from outer scope (in FF and IE at least)
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

var editor = creatseVideoEditor(document.getElementById("video"));

//can result in memory leaks
//we need to clean all references to/on dom nodes
//think about destroy/clean method
