$(document).ready(function(){
  $(".dark").click(function(){
      $("*").addClass("darken")
      document.getElementById("lightBg").src = "images/blueOnPurple.png";
      });
  $(".light").click(function(){
      $(".bg").attr("src", "images/purpleOnBlue.png");
      $(".darken").removeClass("darken");
      });
});



var captions = ["HTML", "CSS", "JavaScript", "Bow Hunting Skills", "Nunchuck Skills"]//["The mewing kitten video of web developers", "i.e. adorable and always in demand","They call me Jife pop 'cause I be pushin' </br> and popin in arrays like a pie tin full of oil and corn...", "and also 'cause its the first 2 letters of my first and last name" ];
var captionNumber = 0;
var captionLength = captions.length -1;

var changeCaption = function(increaseBy)
{
  captionNumber += increaseBy;
  if (captionNumber > captionLength){
    captionNumber =0;
  }
  if (captionNumber < 0){
    captionNumber = captionLength;
  }
document.getElementById("caption").innerHTML = captions[captionNumber];
}

function autoRun(){
  setInterval("changeCaption(1)", 5000);
}
