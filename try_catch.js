//el try y catch es para manejar errores en el codigo y el finally se ejecuta siempre al final del try y catch


//este try es una prueba de un cliente que quiere comprar un producto en una tienda virtual 
//el catch es para manejar el error que se produce cuando el cliente no esta apto para la compra
//el finally se ejecuta siempre al final del try y catch
// el throw es para lanzar un error personalizado
try {
    //llamado al backend (a traves de un api rest)
    // console.log("llamando al backend");
    throw ('este cliente no esta apto para la compra')
    // console.log("salio con exito");
} catch (error) {
    // tomamos el error y hacemos algo que nos parezca correcto

    // console.log("algo fallo en el call, \n" + error);
} finally {
    //se ejecuta siempre por mas que falle o no falle el try y catch
    // console.log("se ejecuta siempre al final del try y catch");
}

// --------------------------------------------------------2 ejemplo con timeout---------------------------------------------
try {
    //llamado al backend (a traves de un api rest)
    // console.log("llamando al backend");
    setTimeout(() => {
        // console.log("el backend nos responde:");
        // console.log('el cliente esta apto para la compra');
        
    }, 1000);
} catch (error) {
    // tomamos el error y hacemos algo que nos parezca correcto

    // console.log("algo fallo en el call, \n" + error);
} finally {
    //se ejecuta siempre por mas que falle o no falle el try y catch
    // console.log("se ejecuta siempre al final del try y catch");
}

// --------------------------------------------------------3 ejemplo con timeout y throw---------------------------------------------

// con el throw en este ejemplo no se puede manejar porque es asincrono y el catch no lo puede capturar 
// el catch solo captura errores sincronos, tocaria trabajar con promesas o async await para manejar errores asincronos

try {
    //llamado al backend (a traves de un api rest)
    console.log("llamando al backend");
    setTimeout(() => {
        console.log("el backend nos responde:");
        // console.log('el cliente esta apto para la compra');
        throw ('este cliente no esta apto para la compra')
        
    }, 1000);
} catch (error) {
    // tomamos el error y hacemos algo que nos parezca correcto

    console.log("algo fallo en el call, \n" + error);
} finally {
    //se ejecuta siempre por mas que falle o no falle el try y catch
    console.log("se ejecuta siempre al final del try y catch");
}