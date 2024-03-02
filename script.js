// function suma(x , y) {
//   // Código de la función

//   return x + y;

// }


// console.log(suma(1, 3)); 

//input para temperatura

// funcion normal

const temperaturaF = 76;

function transACelsius(f){

    //redondear a 2 decimales es con toFixed
    return ((f - 32) * 5/9).toFixed(2);

}

const temperaturaC = transACelsius(temperaturaF);

//console.log(`La temperatura en grados Celsius es: ${temperaturaC}°C`)

//funcion flecha

let transACelsiusFlecha = (f) => { 
    return ((f - 32) * 5/9).toFixed(2); 
}