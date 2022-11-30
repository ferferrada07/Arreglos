const propiedades1 = [
    
    {nombre: "Casa de campo",descripcion: "Un lugar ideal para descansar de la ciudad",imagen: "casa-de-campo.jpeg",cuartos: 2, metros: 170,},
    {nombre: "Casa de playa",descripcion: "Despierta tus días oyendo el oceano",imagen: "casa-de-playa.jpeg",cuartos: 2, metros: 130,},
    {nombre: "Casa en el centro",descripcion: "Ten cerca de ti todo lo que necesitas",imagen: "casa-de-ciudad.jpeg", cuartos: 1, metros: 80,},
    {nombre: "Casa rodante",descripcion: "Conviertete en un nómada del mundo sin salir de tu casa", imagen: "casa-rodante.jpeg",cuartos: 1,metros: 6,},
    {nombre: "Departamento",descripcion: "Desde las alturas todo se ve mejor",imagen: "departamento.jpeg",cuartos: 3, metros: 200,},
    {nombre: "Mansión",descripcion: "Vive una vida lujosa en la mansión de tus sueños ",imagen: "mansion.jpeg",cuartos: 5,metros: 500,},

  ];

const formulario = document.querySelector ("#formulario");
const dormitorios= document.querySelector ("#cuartos")
const min= document.querySelector ("#min");
const max= document.querySelector ("#max");
const boton= document.querySelector('#boton');
const filtrados = document.querySelector('#filtrados');
var  PropiedadesDiv = document.querySelector("#PropiedadesDiv");

function renderizar(propiedades1){

  for(let propiedad in propiedades1){    
    PropiedadesDiv.innerHTML += '<div class="propiedad">';
    PropiedadesDiv.innerHTML += '<div class="img">';
    PropiedadesDiv.innerHTML += '<img src="http://127.0.0.1:5500/assets/img/'+propiedades1[propiedad].imagen+'" widht="90px" heigt="90px" alt="">';
    PropiedadesDiv.innerHTML += '</div>';
    PropiedadesDiv.innerHTML += '<article>';
    PropiedadesDiv.innerHTML += '<h5>'+propiedades1[propiedad].descripcion+'</h5>';
    PropiedadesDiv.innerHTML += '<div class="d-flex justify-content-between">';
    PropiedadesDiv.innerHTML += '<p>Cuartos:'+propiedades1[propiedad].cuartos+'</p>';
    PropiedadesDiv.innerHTML += '<p>Metros:'+propiedades1[propiedad].metros+'</p>';
    PropiedadesDiv.innerHTML += '</div>';
    PropiedadesDiv.innerHTML += '<p class="my-3">'+propiedades1[propiedad].nombre+'</p>';
    PropiedadesDiv.innerHTML += '<p class="my-3">Un lugar ideal para descansar de la ciudad</p>';
    PropiedadesDiv.innerHTML += '<button class="btn btn-info ">Ver más</button>';
    PropiedadesDiv.innerHTML += '</article>';
    PropiedadesDiv.innerHTML += '</div>';
    PropiedadesDiv.innerHTML += '<br>';
    PropiedadesDiv.innerHTML += '<br>';
  }
}

renderizar(propiedades1)

boton.addEventListener("click", () => {
  PropiedadesDiv.innerHTML =""
  const resultados = propiedades1.filter(p => p.cuartos === parseInt(dormitorios.value));
  for(let resultado in resultados){
    PropiedadesDiv.innerHTML +='<div class="propiedad">';
    PropiedadesDiv.innerHTML += '<div class="img">';
    PropiedadesDiv.innerHTML += '<img src="http://127.0.0.1:5500/assets/img/'+resultados[resultado].imagen+'" alt="">';
    PropiedadesDiv.innerHTML += '</div>';
    PropiedadesDiv.innerHTML += '<article>';
    PropiedadesDiv.innerHTML += '<h5>'+resultados[resultado].descripcion+'</h5>';
    PropiedadesDiv.innerHTML += '<div class="d-flex justify-content-between">';
    PropiedadesDiv.innerHTML += '<p>Cuartos:'+resultados[resultado].cuartos+'</p>';
    PropiedadesDiv.innerHTML += '<p>Metros:'+resultados[resultado].metros+'</p>';
    PropiedadesDiv.innerHTML += '</div>';
    PropiedadesDiv.innerHTML += '<p class="my-3">'+resultados[resultado].nombre+'</p>';
    PropiedadesDiv.innerHTML += '<p class="my-3">Un lugar ideal para descansar de la ciudad</p>';
    PropiedadesDiv.innerHTML += '<button class="btn btn-info ">Ver más</button>';
    PropiedadesDiv.innerHTML += '</article>';
    PropiedadesDiv.innerHTML += '</div>';
    PropiedadesDiv.innerHTML += '<br>';
    PropiedadesDiv.innerHTML += '<br>';
  }
  
});

