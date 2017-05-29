console.log("Bienvenido");

$(document).ready(function () {
  $(".carrusel div:gt(1)").hide();

  $(".circ2").click(function () {
    $(".sld").hide();
    $("#sld2").show();
  });
});
