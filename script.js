$(document).ready(function()  { 
     $("#image2").hide();
     $("#image3").hide();

     $("body").on('click',"#image2-thumbnail",function() {
        $("#image1").slideUp('slow');
        $("#image3").slideUp('slow');
        $("#image2").slideDown('slow');    
     });   
     $("body").on('click',"#image3-thumbnail",function() {
        $("#image2").fadeOut(1000);
        $("#image1").fadeOut(1000);
        $("#image3").fadeIn(1000);    
     }); 
     $("body").on('click',"#image1-thumbnail",function() {
        $("#image3").fadeOut(1000);
        $("#image2").fadeOut(1000);
        $("#image1").fadeIn(1000);    
     }); 
    });

