function mostrarConsola(numero){

    console.log(numero);

}

function calcular(num1, num2, callback){

    let suma = num1 + num2;
    callback(suma);



}

calcular(5, 5, mostrarConsola); // 10 

// los callbacks se utilizan para ejecutar una función después de que otra función haya terminado de ejecutarse.
// En el ejemplo anterior, la función calcular recibe dos números y una función, la cual se ejecutará después de que la suma de los dos números se haya realizado.
// En este caso, la función mostrarConsola se ejecutará después de que la suma de los dos números se haya realizado.
// Los callbacks son muy utilizados en JavaScript, especialmente en operaciones asíncronas, como por ejemplo, en la lectura de archivos, peticiones a servidores, entre otros.
