$(document).ready(function() {
    var myVideo = document.getElementById("myVid");
  
    function playVideo() { 
      myVideo.play(); 
    }
  
    function pauseVideo() { 
      myVideo.pause(); 
    }
  
    $('#myVid').on('click', function () {
      if (myVideo.paused) {
        playVideo();
      } else {
        pauseVideo();
      }
    });
  });