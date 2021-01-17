var isOn = true;
$(function(){
   $("#arrow").click(function(){
      console.log(isOn);
      if ( isOn ){
          isOn = false;
          $('.box2').animate({height : '0vh'});
          $('.box3').animate({height : '72vh'});
          $('#arrow').text("╳");
          $('#arrow').animate({top : '11vh'});
      } else {
          isOn = true;
          $('.box2').animate({height : '35vh'});
          $('.box3').animate({height : '37vh'});
          $('#arrow').text("👁");
          $('#arrow').animate({top : '46vh'});

      }
      return false;
  });
});
