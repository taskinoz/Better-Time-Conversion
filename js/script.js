$(window).on('load', function () {
  //Random Function (so I dont have to typle a Math.random every time)
  var rand = function (r){return Math.floor(Math.random()*r);}
  var colorPalettes = ["#FFB3BA","#FFDFBA","#FFFFBA","#BAFFC9","#BAE1FF","#9FB9BF"];
  $("body").css("background",colorPalettes[rand(colorPalettes.length)]);
});

$(document).ready(function(){
  var hashTime = window.location.hash.substr(1);

  function convert(a) {
    secs = a%60;
    mins = Math.floor(a/60%60);
    hours = Math.floor(a/60/60%24);
    days = Math.floor(a/60/60/24%7)
    weeks = Math.floor(a/60/60/24/7)
    output = ((weeks > 0) ? weeks+((weeks>1)?" weeks ":" week "):"")+
             ((days > 0) ? days+((days>1)?" days ":" day "):"")+
             ((hours > 0) ? hours+((hours>1)?" hours ":" hour "):"")+
             ((mins > 0) ? mins+((mins>1)?" minutes ":" minute "):"")+
             ((secs > 0) ? secs+((secs>1)?" seconds ":" second "):"");
   return output;
  }



if (hashTime) {
  $('#input').val(hashTime);
  convert($('#input').val());
  $("#output").text(output);
}

$('#input').on('change paste keyup keydown', function () {
  convert($(this).val());
  $("#output").text(output);
});

});
