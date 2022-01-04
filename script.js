$(document).ready(function()  { 
   let counter = 1;
  $("#image2").hide();
  $("#image3").hide();

  $("#image2-thumbnail").click(
    function() { 
      counter = 2;
     $("#image1").slideUp('slow');
     $("#image3").slideUp('slow');
     $("#image2").slideDown('slow');    
  });   
  $("body").on('click',"#image3-thumbnail",function() {
      counter = 3;
     $("#image2").fadeOut(1000);
     $("#image1").fadeOut(1000);
     $("#image3").fadeIn(1000);    
  }); 
  $("body").on('click',"#image1-thumbnail",function() {
      counter = 1;
     $("#image3").fadeOut(1000);
     $("#image2").fadeOut(1000);
     $("#image1").fadeIn(1000);    
  }); 

  $("#rightArrow").click(
    function() { 
     let image1 = '#image1';
     let currentImage = "#image" + counter;
      $(currentImage).hide();
      counter++;
      currentImage = "#image" + counter;
      $(currentImage).show();
     if (counter > 3) {
       counter = 0;
       $(image1).show();
       $(currentImage).hide();
       $(image1).show();
   }
    });
  $("#leftArrow").click(
    function() { 
     let currentImage = "#image" + counter;
     let image3 = '#image3';
      $(currentImage).hide();
      counter--;
      currentImage = "#image" + counter;
      $(currentImage).show(); 
     if (counter < 1) {
       counter = 3;
       $(image3).show();
       $(currentImage).hide();
       $(image3).show();
     }
     });  
    });


