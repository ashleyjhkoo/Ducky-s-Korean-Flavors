// Jumbotron Video 

function deferVideo() {

    //defer html5 video loading
  $("video source").each(function() {
    var sourceFile = $(this).attr("data-src");
    $(this).attr("src", sourceFile);
    var video = this.parentElement;
    video.load();
    // uncomment if video is not autoplay
    //video.play();
  });

}


window.onload = deferVideo;
// window.onload = fluidIncrease;

// End of Jumbotron Video 


// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 375 || document.documentElement.scrollTop > 375) {
    document.getElementById("headerContainer").style.top = "0";
    document.getElementById("header-nav-video").style.top = "-360px";
  } else {
    document.getElementById("headerContainer").style.top = "-360px";
    document.getElementById("header-nav-video").style.top = "0";
  }

}


// End of menu bar scroll down effect