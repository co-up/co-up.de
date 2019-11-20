$(function(){
  $('#slides').slides({
    preload: true,
    preloadImage: 'img/loading.gif',
    play: 4000,
    pause: 2500,
    hoverPause: false,
    animationStart: function(current){
      $('.caption').animate({
        bottom:-35
      },100);
    },
    animationComplete: function(current){
      $('.caption').animate({
        bottom:0
      },200);
    },
    slidesLoaded: function() {
      $('.caption').animate({
        bottom:0
      },200);
    }
  });
});
