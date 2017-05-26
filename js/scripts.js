$(document).ready(function(){

//Fix navbar
//finalize about me content
//github link in div
//check if its good on mobile

  $('.arrows').click(function(){
    var whichPort = this['alt'];
    $('.arrows[alt='+whichPort+']').toggle();
    var thisPort = $('.portSection[value='+whichPort+']')
    if(thisPort.is(':visible')){
      thisPort.children().toggle();
      thisPort.next().fadeToggle();
    }
    else{
      thisPort.children().delay(500).fadeToggle();
      thisPort.next().delay(500).fadeToggle();
    }
    thisPort.slideToggle();
  });

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 50
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
  });

});
