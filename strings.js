//string

let variable = 'pedro';
let a = `Cadena de texto con ${variable}`;

// esto es un string con comillas simples para usar la barra
// invertida se debe usar el backslash para escapar el caracter especial
// y saltear el error de sintaxis
let string = 'let\'s do it';

//ejm 
let string2 = 'alber einstein dijo \'la relativdad esta re good\''
//console.log(string2);
//salto de linea 
let string3 = 'hola \n mundo';

//tabulacion
let string4 = 'hola \t mundo';

//concatenacion
let string5 = 'hola' + 'mundo';

//concatenacion con variables
let string6 = 'hola' + variable;

//concatenacion con variables
let string7 = `hola ${variable}`;

//longitud de un string
let string8 = 'hola mundo';
let longitud = string8.length;

//acceder a un caracter de un string
let string9 = 'hola mundo';
let caracter = string9[0];

//acceder a un caracter de un string
let string10 = 'hola mundo';
let caracter2 = string10.charAt(0);

//acceder a un caracter de un string
let string11 = 'hola mundo';
let caracter3 = string11.charCodeAt(0);

//slice para extraer una parte de un string
let string12 = 'hola mundo';
let string13 = string12.slice(1, 6);
// console.log(string13);

//replace para reemplazar un string por otro
let string14 = 'hola mundo';
let string15 = string14.replace('hola', 'chao');
// console.log(string15);

//toUpperCase para convertir a mayusculas
let string16 = 'hola mundo';
let string17 = string16.toUpperCase();

//toLowerCase para convertir a minusculas
let string18 = 'HOLA MUNDO';
let string19 = string18.toLowerCase();

//trim o trimEnd o trimStart para quitar espacios en blanco al inicio y al final de un string 
let cadena = '             hola mundo               ';
let cadena2 = cadena.trim();
// console.log(cadena2);

//concat para concatenar strings
let string20 = 'hola';
let string21 = 'mundo';
let string22 = string20.concat(' ', string21);

//split para convertir un string en un array, 
// dentro de split se coloca el separador que se usara para dividir el string
// puede ser un espacio, una coma, un punto, etc
let string23 = 'hola mundo';
let array = string23.split(' ');
// console.log(array);

//eval coge un string y lo calcula como si fuera un integer o un float

let string24 = '2 + 2';
let resultado = eval(string24);
// console.log(resultado);
