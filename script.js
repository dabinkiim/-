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
          $('.box2').animate({height : '33vh'});
          $('.box3').animate({height : '39vh'});
          $('#arrow').text("👁");
          $('#arrow').animate({top : '46vh'});

      }
      return false;
  });



});
