
var menu = document.querySelector(".menu");
let title = document.querySelector("#__ss");
const bgggg = document.querySelector(".background");
title.addEventListener("click", function(){
    menu.style.background = "linear-gradient(120deg,rgb(96,255,96),rgb(0,152,212))";
    bgggg.style.background = "linear-gradient(120deg,rgb(96,255,96),rgb(0,152,212))";
});

let njerzt = ["ylli","dijari","teuta","rinesa"];
console.log("kush jane pjesmarres:",njerzt[0],njerzt[2],njerzt[3]);

$(".zj").click(function(){
alert("Vazhdo");
});

$("#hide").click(function(){
    $(".table1").hide();
    $(".table2").hide();
  });


  $("#show").click(function(){
    $(".table1").show();
    $(".table2").show();
  });


  $(".fade").click(function(){
    $(".about").fadeIn("slow");
    $(".h1_rrethfaqers").fadeIn("slow");
    $(".h2_rrethfaqes").fadeIn("slow");
  });

  $(".h3_linku").hover(function(){
    $(".video_z").slideDown();
  });

    $(".h1_Punsim").hover(function(){
      $(".h1_Punsim").animate({left: '250px'});
    });

    $(".h1_njoftimet").hover(function(){
      $(".h1_njoftimet").animate({left: '100px'});
    });

    $(".h4_njoftimet").hover(function(){
      $(".h4_njoftimet").animate({left: '100px'});
    });

    $(".h4_njoftimet2").hover(function(){
      $(".h4_njoftimet2").animate({left: '100px'});
    });

    $(".h4_njoftimet3").hover(function(){
      $(".h4_njoftimet3").animate({left: '100px'});
    });
    
    $(".HSH").hover(function(){
      $(".HSH").animate({left: '100px'});
    });


  

  
      $("#Lenda_z").hover(function(){
        $("#Lenda_z").append("<b>Selecto lenden</b>");
      });


      