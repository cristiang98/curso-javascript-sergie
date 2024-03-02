//aca el juego selecciona un numero al azar para adivinar
let numAzar = Math.floor(Math.random() * 100) + 1; //Genera un numero aleatorio entre 1 y 100


let numeroEntrada = document.getElementById('numeroEntrada')//Aca se va a guardar el numero que ingrese el usuario

let mensaje = document.getElementById('mensaje')//Aca se va a mostrar el mensaje de si el numero es mayor o menor


let intentos = 0 //Aca se va a guardar la cantidad de intentos que hizo el usuario



//Esta accion se va a ejectutar cuando se toque el boton comprobar

function chequearResultado() {
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        //textContent es un atributo del parrafo que va a mostrar el mensaje de error.
        mensaje.textContent = 'El numero debe estar entre 1 y 100'
        mensaje.style.color = 'black'
        
        return
    }

    if(numeroIngresado === numAzar){
        mensaje.textContent = 'Felicidades, has acertado'
        mensaje.style.color = 'green'
        numeroEntrada.disabled = true
        contador()
    }
    else if(numeroIngresado < numAzar){

        mensaje.textContent = '!mas alto! El numero es mayor al que ingresaste'
        mensaje.style.color = 'red'
        contador()
    }
    else{
        mensaje.textContent = '!mas bajo! El numero es menor al que ingresaste'
        mensaje.style.color = 'red'
        contador()
    }

    

}

function contador(){
    
    intentos++
    document.getElementById('contador').innerHTML = 'Intentos: ' + intentos

}

function reload(){
    location.reload()
}