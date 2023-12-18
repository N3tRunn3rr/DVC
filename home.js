// JS for video playing
// var myVideo = document.getElementById("myVid");
// function playVideo() { 
//  myVideo.play(); 
// } 
// function pauseVideo() { 
//  myVideo.pause(); 
// } 

$('#myVid').click(function () {
    if (myVideo.paused) {
        myVideo.play();
    } else {
        myVideo.pause();
    }
})