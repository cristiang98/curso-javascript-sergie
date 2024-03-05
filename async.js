let promesa = new Promise((resolve, reject) => {

    setTimeout(() =>{ 
        let resp ={
            response:200,
            message: '1La promesa se resolvió correctamente'
        }
        resolve(resp);
        reject('1La promesa se rechazó');
    },3000)
});





let promesa2 = new Promise((response, reject)=>{

    setTimeout(() => {
        let resp = {
            response:200,
            message: '2esta informacion es importante, demora mucho en llegar'
        }

        response(resp);
        reject('2Error en la peticion');
    },5000)
    

});



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


async function ejecutarPtomesas(){
    let respuestaPromesa1 = await promesa
    console.log(respuestaPromesa1);

    let respuestaPromesa2 = await promesa2
    console.log(respuestaPromesa2);

    let respuestaPromesa3 = await promesa3
    console.log(respuestaPromesa3);
}

ejecutarPtomesas();