window.addEventListener('load', function() {
  var imgs = document.getElementById('slideshow').children;
  interval = 8000;
  currentPic = 0;
  imgs[currentPic].style.webkitAnimation = 'fadey '+interval+'ms';
  imgs[currentPic].style.animation = 'fadey '+interval+'ms';
  var infiniteLoop = setInterval(function(){
    imgs[currentPic].removeAttribute('style');
    if ( currentPic == imgs.length - 1) {
      currentPic = 0;
    } else {
      currentPic++;
    }
    imgs[currentPic].style.webkitAnimation = 'fadey '+interval+'ms';
    imgs[currentPic].style.animation = 'fadey '+interval+'ms';
  }, interval);

  const slide = document.getElementById('slideshow-container');

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      slide.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      toggleFullScreen();
    }
  }, false);

});
