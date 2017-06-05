console.log("Bienvenido");

// $('.datepicker').pickadate({
//    selectMonths: true,
//    selectYears: 90,
//    max: new Date(),
//    format: 'dd/mm/yyyy'
//  });

var contador = 0;
// Funciones
var modal = function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
};

function mostrarDatos(nombre, tel, cumple) {
  var listaContactos = $("#listaContactos");
  listaContactos.append(
    "<div class='row'><div class='col s12 m12'><div class='card'><div class='card-content'><span class='card-title activator grey-text text-darken-4'><i class='material-icons prefix'>account_circle</i>"+" "+ nombre + "</span><p><i class='material-icons prefix'>phone</i>" +" "+ tel + "</p></div><div class='card-action right-align'><h6 class='teal-text'> Cumpleaños:" + " " + cumple + "</h6></div></div></div></div>");
}


var realizaBusqueda = function () {
};

// Eventos
$("#enviar").click(function(e) {
    var $nombre = $("#icon_prefix").val();
    var $tel = $("#icon_telephone").val();
    var $cumple = $("#date_range").val();

    // console.log($nombre);
    // console.log($tel);
    // console.log($cumple);

    if($nombre && $tel){
      mostrarDatos($nombre, $tel, $cumple);

      contador++;
      var estatusContactos = $("#estatusContactos");
      estatusContactos.text("Número de contactos: " + contador);

      $("#icon_prefix").val("");
      $("#icon_telephone").val("");
      $("#date_range").val("");
    } else {
      e.preventDefault();
    }
});
$("#buscar").click(realizaBusqueda);
$(document).ready(modal);
