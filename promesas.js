// las promesas en js son una forma de trabajar con código asíncrono, y son una mejora a los callbacks.
// Las promesas tienen tres estados: pendiente, resuelta o rechazada.
// Las promesas se crean con la palabra reservada new, y se les pasa una función como argumento.
// La función que se pasa como argumento recibe dos parámetros, resolve y reject, que son funciones que se ejecutarán dependiendo del resultado de la promesa.
// Si la promesa se resuelve, se ejecutará la función resolve, y si la promesa se rechaza, se ejecutará la función reject.
// Las promesas tienen dos métodos: then y catch.
// El método then se ejecuta si la promesa se resuelve, y el método catch se ejecuta si la promesa se rechaza.
// Ejemplo de promesa:


// En el ejemplo anterior, la promesa se resuelve, por lo que se ejecuta el método then, y se imprime en consola el mensaje 'La promesa se resolvió correctamente'.
// Si la promesa se rechaza, se ejecuta el método catch, y se imprime en consola el mensaje 'La promesa se rechazó'.
// Las promesas son muy útiles para trabajar con código asíncrono, ya que permiten manejar de forma más sencilla el resultado de una operación asíncrona.


let promesa = new Promise((resolve, reject) => {

    resolve('1La promesa se resolvió correctamente');
    reject('1La promesa se rechazó');

});

promesa.then(res => {
    // console.log(res);
}).catch(error => {
    // console.error(error);
});




// Ejemplo de promesa con setTimeout:


let promesa2 = new Promise((response, reject)=>{

    setTimeout(() => {
        let resp = {
            response:200,
            message: '2esta informacion es importante pero demora mucho en llegar'
        }

        response(resp);
        reject('2Error en la peticion');
    },5000)
    

});

promesa2.then(res => {
    // console.log(res.message);
}).catch(error => {
    // console.error(error);
});

// En el ejemplo anterior, la promesa se resuelve después de 3 segundos, por lo que se ejecuta el método then, y se imprime en consola el mensaje 'esta informacion es importante'.
// Si la promesa se rechaza, se ejecuta el método catch, y se imprime en consola el mensaje 'Error en la peticion'.
// Las promesas son muy útiles para trabajar con código asíncrono, ya que permiten manejar de forma más sencilla el resultado de una operación asíncrona.
// Las promesas también se pueden encadenar, es decir, se pueden ejecutar varias promesas en secuencia, y manejar el resultado de cada una de ellas.


// Ejemplo de promesas encadenadas:

let promesa3 = new Promise((resolve, reject) => {

    setTimeout(()=>{
        let resp = {
            response:200,
            message: '3informacion rapida'
        }

        resolve(resp);
        reject('3Error en la peticion');
    },2500)

})


promesa.then(res =>{

    console.log(res);

    promesa2.then(res =>{
        console.log(res.message);
        
        promesa3.then(res => {
            console.log(res.message);
        
        }).catch(error =>{
            console.error(error);
        })

    }).catch(error =>{
        console.error(error);
    })

}).catch(error =>{

    console.error(error);

})

// En el ejemplo anterior, se ejecutan tres promesas en secuencia, y se maneja el resultado de cada una de ellas.
// pero esta cadena no es la mejor forma de trabajar con promesas, ya que se conoce como callback hell, y puede ser difícil de leer y mantener.
// Para evitar este problema, se pueden utilizar async/await, que es una forma más sencilla de trabajar con promesas.
// buscar el archivo async.js para ver como se trabaja con async/await.