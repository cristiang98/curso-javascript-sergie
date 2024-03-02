// vamos a importar el archivo js ciudades.js, se llama desestructuracion de datos
import {barcelona, roma, paris, londres} from './ciudades.js';

// obtener los elementos del DOM que vamos a utilizar en el script 
// para ello utilizamos el metodo querySelector que nos permite seleccionar un elemento del DOM
// query significa consulta o buscar, selector significa seleccionar osea; consultar un elemento del DOM

// el metodo querySelector nos permite seleccionar un elemento del DOM
// el parametro del metodo querySelector se le pasa el nombre de la etiqueta que se quiere seleccionar

// el metodo querySelectorAll nos permite seleccionar todos los elementos del DOM que cumplan con el criterio de busqueda
// en el parametro del metodo querySelectorAll se le pasa el nombre de la etiqueta que se quiere seleccionar

let enlaces = document.querySelectorAll('a');
let elementoTitulo = document.getElementById('titulo');
let elementoSubtitulo = document.getElementById('subtitulo');
let elementoPrecio = document.getElementById('precio');
let elementoParrafo = document.getElementById('parrafo');

// vamos a recorrer el array de enlaces y vamos a agregar un evento a cada uno de ellos

enlaces.forEach(function(enlace){
    // vamos a agregar un evento a cada enlace
    // el metodo addEventListener nos permite agregar un evento a un elemento del DOM
    // el primer parametro del metodo addEventListener es el nombre del evento que se quiere agregar
    // el segundo parametro del metodo addEventListener es la funcion que se va a ejecutar cuando se dispare el evento
    // el evento click se dispara cuando se hace click en el elemento
    
    enlace.addEventListener('click', function(){

        //remover el activo de todos los enlaces 
        enlaces.forEach(function(enlace){
            //el metodo classList nos permite acceder a las clases de un elemento del DOM 
            //classList nos dice si el elemento tiene una clase o no
            //el metodo remove nos permite remover una clase de un elemento del DOM
            enlace.classList.remove('active');
        
        })

        //agregar la clase 'active' al enlace que se hizo click
        //add nos permite agregar una clase a un elemento del DOM
        this.classList.add('active');

        // obtener el texto del enlace que se hizo click
        let contenido = obtenerContenido(this.textContent);
        console.log(contenido);

        //mostrar el contenido de la ciudad que se hizo click
        elementoTitulo.innerHTML = contenido.titulo;
        elementoSubtitulo.innerHTML = contenido.subtitulo;
        elementoPrecio.innerHTML = contenido.precio;
        elementoParrafo.innerHTML = contenido.parrafo;
        


    });
        

});


//funcion para mostrar la informacion de la ciudad que se hizo click correctamente desde ciudades.js

function obtenerContenido(enlace){

    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];

}