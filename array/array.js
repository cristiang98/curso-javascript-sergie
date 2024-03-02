// definir arreglo
//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// otra forma de definir un arreglo
// const array2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function mostrarArrayHtml(array) {
  // recorrer un arreglo
    let text = '';
    for (let i = 0; i < array.length; i++) {
      text += `<li> ${array[i]} </li>`;
    }
    document.getElementById('lista').innerHTML = text;
    document.getElementById('lista').innerHTML += `<p>-------------------</p>`;
}

function mostrarArrayHtmlEach(array) {
    array.forEach(element => {
        document.getElementById('lista2').innerHTML += `<li> ${element} </li>`;
    });
    document.getElementById('lista2').innerHTML += `<br>-------------------</br>`;
  }

// --------------------------------------------------------------
//otra forma de definir un arreglo
const arreglo = new Array();

document.getElementById('seleccionable').innerHTML = 'arreglo de cursos';

arreglo[0] = 'curso de html';
arreglo[1] = 'curso de css';
arreglo[2] = 'curso de javascript';
// --------------------------------------------------------------

mostrarArrayHtml(arreglo);

//- --------------------------------------------------------------

// ordenar un arreglo y tambien ordena alfabeticamente si son strings 

const numeros = [99, 50, 100,2,8]

numeros.sort((a, b) => a - b);

document.getElementById('seleccionable2').innerHTML = 'arreglo de numeros';
// --------------------------------------------------------------

// para acceder al ultimo elemento de un arreglo

console.log(numeros[numeros.length - 1]); //--> accede al ultimo elemento del arreglo
mostrarArrayHtmlEach(numeros);
//---------------------------------------------------------------
// eliminamos el ultimo elemento de la lista

const ultimo = numeros.pop(); // --> elimina el ultimo elemento del arreglo
//console.log(ultimo);
mostrarArrayHtmlEach(numeros);

// --------------------------------------------------------------

// filter para filtrar elementos de un arreglo

const filtrados = numeros.filter(numero => numero > 10);
mostrarArrayHtmlEach(filtrados);

// --------------------------------------------------------------
// find para encontrar un elemento en un arreglo

const encontrado = numeros.find(numero => numero === 50);
console.log(encontrado);

// --------------------------------------------------------------
// map para mapear un arreglo
const texto = 'arreglo de numeros mapeados';


const mapeado = numeros.map(numero => numero * 2);
mostrarArrayHtmlEach(mapeado);

// --------------------------------------------------------------
// reduce para reducir un arreglo a un solo valor
const reducido = numeros.reduce((a, b) => a + b);
console.log(reducido);


// --------------------------------------------------------------

// fill para rellenar un arreglo
const rellenado = numeros.fill(0, 1);
mostrarArrayHtmlEach(rellenado);







