console.log("Bienvenido");
// 19.4178433,-99.1658707,18z -> Laboratoria

//Arreglo de objetos
var restaurante = [
  {
    nombre: "Falafelito",
    direccion: "Av. México 105, Hipódromo Condesa, 06100, CDMX.",
    latitud: 19.4102471,
    longitud:-99.1704605,
    comida: "Vegana"
  },
  {
    nombre: "Zapote",
    direccion: "Calle Guanajuato 138, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX",
    latitud: 19.416378,
    longitud: -99.16085,
    comida: "Mediterránea"
  },
  {
     nombre: "El Japonez",
     direccion: "Av. Vicente Suarez 42A, Cuauhtemoc, Hipódromo Condesa, 06170 Ciudad de México, CDMX",
     latitud: 19.4111767,
     longitud: -99.1749857,
     comida: "Japonesa"
   },
   {
     nombre: "Fonda Mexicana",
     direccion: "Avenida Montevideo 279, Gustavo A. Madero, Lindavista",
     latitud: 19.4901029,
     longitud: -99.1309569,
     comida: "Mexicana"
   },
   {
     nombre: "El Cardenal",
     direccion: "Av. de la Paz Núm. 32, Alvaro Obregon, San Ángel, 01000 Ciudad de México, CDMX",
     latitud: 19.34692,
     longitud: -99.1887497,
     comida: "Mexicana"
   }
];

// Verificación de compatibilidad con el navegador
var compatibilidad = function (e) {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(obtenerPosicion);
  }
  else{
    alert("Lo sentimos, tu navegador no es compatible necesitas actualizarlo");
  }
};

var obtenerPosicion = function (posicion) {
  console.log(posicion);

  var coordenadas = {
    lat: posicion.coords.latitude,
    lng: posicion.coords.longitude
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

$(document).ready(compatibilidad);
