var isOn = true;
$(function(){

   $("#arrow").click(function(){
      console.log(isOn);
      if ( isOn ){
          isOn = false;
          $('.box2').animate({height : '0vh'});
          $('.box3').animate({height : '73vh'});
          $('#arrow').text("╳");
          $('#arrow').animate({top : '11vh'});
      } else {
          isOn = true;
          $('.box2').animate({height : '35vh'});
          $('.box3').animate({height : '38vh'});
          $('#arrow').text("⌕");
          $('#arrow').animate({top : '46vh'});

      }
      return false;
  });
});

$(function(){
  if (window.innerWidth >= 600) {
    $('.box3').hover(function(){
      $('.box2').animate({height : '0vh'});
      $('.box3').animate({height : '73vh'});
    }, function(){
      $('.box2').animate({height : '35vh'});
      $('.box3').animate({height : '38vh'});
    })
  };
});
