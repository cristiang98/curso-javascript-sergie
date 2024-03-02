//set 
let array = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7]);
// lo que imprime es un set con los valores unicos del array sin repetir los valores 
// console.log(array);

// para pasar de set a array 

let array2 = [...array];
// console.log(array2);


//--------------------------------------------------------------
//map

let mapa = new Map([

    ['name', 'juan'],
    ['age', 23],
    ['country', 'MX']

]);
// lo que imprime es un map con los valores que se le pasaron en el array
// console.log(mapa);

// metodos de map

mapa.set( 'lastname', 'perez');

// console.log(mapa.size);

mapa.delete('country');
// console.log(mapa);

// mapa.clear(); // limpia el mapa
// console.log(mapa);

console.log(mapa.has('lastname')); // verifica si existe el valor que se le pasa