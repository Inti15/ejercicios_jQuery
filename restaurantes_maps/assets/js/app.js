console.log("Bienvenido");
// 19.4178433,-99.1658707,18z -> Laboratoria

//Arreglo de objetos
var restaurantes = [
  {
    nombre: "Falafelito",
    direccion: "Av. México 105, Hipódromo Condesa, 06100, CDMX.",
    latitud: 19.4102471,
    longitud:-99.1704605,
    comida: "Vegana"
  },
  {
    nombre: "Zapote",
    direccion: "Calle Guanajuato 138, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX.",
    latitud: 19.416378,
    longitud: -99.16085,
    comida: "Mediterránea"
  },
  {
     nombre: "El Japonez",
     direccion: "Av. Vicente Suarez 42A, Cuauhtemoc, Hipódromo Condesa, 06170 Ciudad de México, CDMX.",
     latitud: 19.4111767,
     longitud: -99.1749857,
     comida: "Japonesa"
   },
   {
     nombre: "Fonda Mexicana",
     direccion: "Avenida Montevideo 279, Gustavo A. Madero, Lindavista.",
     latitud: 19.4901029,
     longitud: -99.1309569,
     comida: "Mexicana"
   },
   {
     nombre: "El Cardenal",
     direccion: "Av. de la Paz Núm. 32, Alvaro Obregon, San Ángel, 01000 Ciudad de México, CDMX.",
     latitud: 19.34692,
     longitud: -99.1887497,
     comida: "Mexicana"
   }
];

var plantillaTarjeta = '<section class="row">'+
  '        <div class="card-panel z-depth-3 ">'+
            '<span class="restaurante row" data-latitud="__latitud__" data-longitud="__longitud__">'+
              '<input class="with-gap" name="group1" type="radio" id=""  />'+
              '<label for="" class="cyan-text tex-darken-3"><strong>__nombre__</strong></label>'+
            '</span>'+
            '<span class="row">'+
              '<p class="offset-s1 col s10">'+
                '<i class="tiny material-icons green-text">room</i>'+
                ' '+'__direccion__'+
             '</p>'+
            '</span>'+
            '<span class="row">'+
              '<p class="offset-s1 col s8">'+
                '<i class="tiny material-icons orange-text">info</i>'+
                ' '+ 'Tipo:'+ ' '+'<strong>'+' __tipo__'+'</strong>'+
              '</p>'+
            '</span>'+
          '</div>'+
        '</section>';
// **********  FUNCIONES  **********

function cargarPagina() {
  compatibilidad();
  mostrarDatos(restaurantes);
  $(".restaurante").click(cambiarUbicacion);
}

function mostrarDatos(restaurantes) {
  var tarjetaConDatos = "";

  restaurantes.forEach(  function (restaurante) {
      tarjetaConDatos += plantillaTarjeta.replace("__nombre__", restaurante.nombre)
      .replace("__latitud__", restaurante.latitud)
      .replace("__longitud__", restaurante.longitud)
      .replace("__direccion__", restaurante.direccion)
      .replace("__tipo__", restaurante.comida)
  });
  $("#infoRestaurantes").html(tarjetaConDatos);
}


// Verificación de compatibilidad con el navegador
var compatibilidad = function (e) {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(obtenerPosicionAct);
  }
  else{
    alert("Lo sentimos, tu navegador no es compatible necesitas actualizarlo");
  }
};

var obtenerPosicionAct = function (posicion) {
  // console.log(posicion);
  var latitud = posicion.coords.latitude;
  var longitud = posicion.coords.longitude;
  var coordenadas = {
    lat: latitud,
    lng: longitud
  };

    mostrarMapa(coordenadas);
};

var mostrarMapa = function (coordenadas) {

  var mapa = new google.maps.Map($("#mapa")[0],{
    zoom:17,
    center: coordenadas,
    map: mapa
  });

  var marcador = new google.maps.Marker({
    position: coordenadas,
    map: mapa
  });

}

function cambiarUbicacion() {
  var nvaLatitud = $(this).data("latitud");
  var nvaLongitud = $(this).data("longitud");

  var coordenadas = {
    lat: nvaLatitud,
    lng: nvaLongitud
  };

  console.log(coordenadas);
  mostrarMapa(coordenadas);
}

$(document).ready(cargarPagina);
