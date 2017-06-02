console.log("Bienvenido");
var contador = 0;
// Funciones
var modal = function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
};

var datosForm = function () {
  contador++;
  var $nombre = $("#icon_prefix").val();
  var $tel = $("#icon_telephone").val();
  var $cumple = $("#date_range").val();

  console.log($nombre);
  console.log($tel);
  console.log($cumple);
  mostrarDatos($nombre, $tel, $cumple);
};

function mostrarDatos(nombre, tel, cumple) {

}

// Eventos
$("#enviar").click(datosForm);
$(document).ready(modal);
