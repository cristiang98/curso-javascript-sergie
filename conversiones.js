//string to number

let number = "123";
// console.log(`${number} el tipo de dato es: ` + typeof number);
number = Number(number);// or parseInt(number) , or parseFloat(number); or +number;
// console.log(`${number} el tipo de dato es: ` + typeof number);


//number to string
let cadena = 123;
// console.log(`${cadena} el tipo de dato es: ` + typeof cadena);
cadena = cadena.toString(); // or String(cadena); or cadena + "";
// console.log(`${cadena} el tipo de dato es: ` + typeof cadena);

//number to boolean

let booleano = 0;// 0 is false, 1 is true
// console.log(`${booleano} el tipo de dato es: ` + typeof booleano);
booleano = Boolean(booleano); // or !!booleano; or Boolean(booleano);
// console.log(`${booleano} el tipo de dato es: ` + typeof booleano);

//string to boolean

let boolean2 = "true";
// console.log(`${boolean2} el tipo de dato es: ` + typeof boolean2);
boolean2 = Boolean(boolean2);
// console.log(`${boolean2} el tipo de dato es: ` + typeof boolean2);

//date to number

let fecha = new Date();
// console.log(`${fecha} el tipo de dato es: ` + typeof fecha);
fecha = fecha.getTime();
// console.log(`${fecha} el tipo de dato es: ` + typeof fecha);


// date to string

let fecha2 = new Date();
// console.log(`${fecha2} el tipo de dato es: ` + typeof fecha2);
fecha2 = fecha2.toString();
// console.log(`${fecha2} el tipo de dato es: ` + typeof fecha2);

// 
