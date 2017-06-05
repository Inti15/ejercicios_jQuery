console.log("Bienvenido");

// Funciones
var modal = function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
};

function mostrarTweet(tweet) {
  var tweets = $("#tweets");
  tweets.prepend("<div class='row'><div class='col s12 m12'><div class='card'><div class='card-content'><span class='card-title activator grey-text text-darken-4'>" + tweet + "</span></div></div></div></div>");
}

// Eventos
$("#enviar").click(function(event) {
    var $tweet = $("#tweet").val();

    console.log($tweet);

    if($tweet && $tweet.length <= 140){
      mostrarTweet($tweet);
      $("#tweet").val("");
    } else {
      event.preventDefault();
    }
});

$("#tweet").keyup(function(){
  if($("#tweet").val().length < 120) {
    $(".character-counter").css('color', 'black');
  }
  if($("#tweet").val().length > 120 && $("#tweet").val().length < 140) {
    $(".character-counter").css('color', 'yellow');
  }
  if($("#tweet").val().length > 140) {
    $(".character-counter").css('color', 'red');
      var caracteresExtra = $("#tweet").val().length - 140;
      $(".character-counter").text('(-' + caracteresExtra + ') ' + $(".character-counter").text());
  }
});
$(document).ready(modal);
