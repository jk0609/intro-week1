$(document).ready(function(){
  $('.arrows').click(function(){
    var whichPort = this['alt'];
    $('.arrows[alt='+whichPort+']').toggle();
    var thisPort = $('.portSection[value='+whichPort+']')
    if(thisPort.is(':visible')){
      thisPort.children().toggle();
    }
    else{
      thisPort.children().delay(500).fadeToggle();
    }
    thisPort.slideToggle();

  });
});
