$(document).ready(function(){

//transform
//animate splash
//get a new picture
//add hilarys site
//improve robustness to resizing/mobile screens

  $('#subSplash').fadeIn(1500);
  $('#subSplash h1,h4').delay(1300).animate({width:'toggle'},1000);

  $('.portBox').click(function(){
    // $('#port1').animate({left:400}, {
    //   duration: 2000,
    //   complete: function(){
    //     alert('test')
    //   }
    // })
      var corner = $('#port1').position()
      var destSide = corner['left']-$(this).position()['left']
      var destTop = corner['top']-$(this).position()['top']

      if (!$(this).data('animated')){
        if(!$(this).data('clicked')){
          $(this).data('animated', true)
          $(this).data('clicked', true)
          $('.portBox').not(this).fadeTo(400,0);
          $(this).animate({left: destSide, top: destTop}, {
            duration: 1000,
            complete: function(){
              $(this).data('animated', false);
            }
          })
        }
        else{
          $(this).data('animated', true)
          $(this).data('clicked', false)
          $(this).animate({left: -destSide, top: -destTop}, {
            duration: 1000,
            complete: function(){
              $(this).data('animated', false);
            }
          })
          $('.portBox').not(this).delay(1000).fadeTo(400,1);
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
