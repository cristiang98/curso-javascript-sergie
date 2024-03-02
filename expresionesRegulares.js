//las expresiones regulares son un tipo de objeto que se utiliza para la busqueda de patrones en cadenas de texto
//se crean mediante la construccion de un objeto de tipo RegExp
//se pueden utilizar con los metodos de los objetos String
//se pueden utilizar con los metodos de los objetos RegExp
//se pueden utilizar con los metodos de los objetos Array
//se pueden utilizar con los metodos de los objetos Math
//se pueden utilizar con los metodos de los objetos Date
//se pueden utilizar con los metodos de los objetos Number etc


let texto = "este curso de javascript es muy bueno y muy completo, cristian es un estudiante de sergie code"; 

//busca la palabra cristian en el texto y devuelve la posicion de la primera letra de la palabra y la i es para que sea insensible a mayusculas y minusculas

let busqueda = texto.search(/cristian/i); 

//modificadores
//i: insensible a mayusculas y minusculas
//g: busca todas las coincidencias osea; no se detiene en la primera coincidencia que encuentre sino que recorre todo el texto
//m: busca en todas las lineas
//s: permite que el punto (.) busque tambien saltos de linea


let pattern = /cristian/i;
let resultado = pattern.test(texto); //devuelve true si encuentra la palabra y false si no la encuentra
// console.log(resultado);

let resultado2 = texto.match(/cristian/g); //devuelve un array con todas las coincidencias
// console.log(resultado2);

let resultado3 = pattern.exec(texto)
// console.log(resultado3);

// buscar por rango
let pattern2 =/[0-9]/
let resultado4 = pattern2.test(texto);
// console.log(resultado4);

//expresiones regulares del correo electronico
// este se puede utilizar para validar correos electronicos en formularios de registro de usuarios en una pagina web por ejemplo 

let pattern3 = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

let resultado5 = pattern3.test('cristiangallego40@gmail.com')
console.log(resultado5);

//en general las expresiones regulares son muy utiles para la busqueda de patrones en cadenas de texto
//y para la validacion de datos en formularios de registro de usuarios en paginas web
//tambien se pueden utilizar para la busqueda de patrones en archivos de texto
//y para la busqueda de patrones en bases de datos
