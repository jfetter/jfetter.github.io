$(document).ready(function(){
    $("#darkBkrnd").click(function(){
      $("body").addClass("dark");
    });
    $("#lightBkrnd").click(function(){
      $("body").removeClass("dark");
    });
  });

var captions = ["The mewing kitten video of web developers", "i.e. adorable and always in demand","They call me Jife pop 'cause I be pushin' and popin in arrays like a pie tin full of oil and corn...", "and also 'cause its the first 2 letters of my first and last name" ];
var captionNumber = 0;
var captionLength = captions.length -1;

function changeCaption(x)
{
  captionNumber += x;
  if (captionNumber > captionLength){
    captionNumber =0;
  }
  if (captionNumber < 0){
    captionNumber = captionLength;
  }

document.getElementById("caption").innerHTML = captions[captionNumber];

return false;
}

function autoRun(){
  setInterval("changeCaption(1)", 5000);
};
