$(document).ready(function(){

//transform
//animate splash
//get a new picture
//add hilarys site
//improve robustness to resizing/mobile screens

  $('#subSplash').fadeIn(1500);
  $('#subSplash h1,h4').delay(1300).animate({width:'toggle'},1000);

  var clicked = false;
  $('.portBox').click(function(){

      var corner = $('#port1').position()
      var destSide = corner['left']-$(this).position()['left']
      var destTop = corner['top']-$(this).position()['top']
      console.log(destSide, destTop)

      if (!$(this).is(':animated')){
        // if(!$(this).data('clicked')){
        if(!clicked){
          var port = $(this)
          $('.portBox').not(this).fadeTo(200,0,function(){
            port.addClass('clicked')
            port.stop().animate({left: 50, top: 50}, {
              // duration: 400,
              complete: function(){
                // $(this).data('clicked', true)

                port.animate({height: (port.parent().height()*.8), width: (port.parent().width()*.8)})
                clicked = true;
              }
            })
          });
        }
        else{

          $(this).animate({left: -destSide, top: -destTop}, {
            duration: 400,
            complete: function(){
              $('.portBox').not(this).fadeTo(200,1);
              // $(this).data('clicked', false)
              clicked = false;
            }
          })

        }
      }
  })

  $('.navbar-nav a').click(function(){
    $('html,body').animate({scrollTop: $("#"+$(this).attr('value')).offset().top-50},'slow');
  })

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
