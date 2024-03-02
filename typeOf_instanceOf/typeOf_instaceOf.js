//String
let string = typeof "Cristian";
console.log(string);

//Number
let number = typeof 23;
console.log(number);

//Number case special NaN
let nan = typeof NaN;
console.log(nan + " NaN is a number but is not a number");

//Boolean
let boolean = typeof true;
console.log(boolean);

//array return object because in javascript array is an object
let array = typeof ['penelope', 'juan', 'pedro', 'luis', 'cristian'];
console.log(array);

//object
let object = typeof {
    name: 'cristian', 
    age: 23, 
    country: 'MX'
};
console.log(object);

//date also return object because in javascript date is an object, therefore(therefores es por eso en espa;ol) it is a case special
let date = typeof new Date();
console.log(date);

//function
let functionType = typeof function() {};
console.log(functionType);


//undefined return undefined because is a type of data in javascript 
let undefinedType = typeof undefined;
console.log(undefinedType);

//null return object because in javascript null is an object
let nullType = typeof null;
console.log(nullType);

// -----------------instanceOf-----------------

let arrayInstance = ['penelope', 'juan', 'pedro', 'luis', 'cristian'];
let fecha = new Date();
let set = new Set();
let map = new Map();
let null1 = null;// null is an object but instanceOf breaks because null is not an object for javascript

console.log(fecha instanceof Array);

//  instanceof return true if the object is an instance of the specified type
// en español instanceof regresa true si el objeto es una instancia del tipo especificado
if(set instanceof Array){
    console.log('Yes, is an array');
    document.write('Yes, is an array');
}else{
    console.log('No, is not an array');
    document.write('No, is not an array');
}







