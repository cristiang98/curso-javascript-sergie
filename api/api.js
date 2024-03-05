// prueba de api de jsonplaceholder

// tenemos 4 metodos para hacer peticiones a una api
// get, post, put, delete
// get es para obtener datos
// post es para enviar datos
// put es para actualizar datos
// delete es para eliminar datos

//tambien tenemos los codigos de respuesta de las peticiones
// 200 ok, la peticion fue exitosa
// 201 created, la peticion fue exitosa y se creo un nuevo recurso
// 204 no content, la peticion fue exitosa pero no hay contenido para mostrar

// 400 bad request, la peticion no fue exitosa por un error en la peticion
// 401 unauthorized, la peticion no fue exitosa por falta de autenticacion
// 403 forbidden, la peticion no fue exitosa por falta de permisos
// 404 not found, la peticion no fue exitosa porque el recurso no existe

// 500 internal server error, la peticion no fue exitosa por un error en el servidor
// 503 service unavailable, la peticion no fue exitosa porque el servidor no esta disponible



// fetch es una funcion de javascript que nos permite hacer peticiones http
// fetch recibe dos parametros, el primero es la url a la que queremos hacer la peticion
// el segundo es un objeto con las configuraciones de la peticion
// fetch retorna una promesa
// para obtener los datos de la promesa, usamos el metodo then
// then recibe una funcion que recibe como parametro la respuesta de la peticion
// la respuesta de la peticion es un objeto que tiene un metodo json
// json tambien retorna una promesa

let urlBase = 'https://jsonplaceholder.typicode.com'
let query = 'comments?postId=5'

//fetch en si es un get por defecto si no se especifica el metodo en el objeto de configuracion
//------------------------------------------------------------------------------------------------
// get pedir informacion
// fetch(`${urlBase}/${query}`)
//       .then(response => response.json())
//       .then(json => console.log(json))
//------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------

//post enviar informacion
//Body es el cuerpo de la peticion que se envia al servidor en una peticion post
// let requestBody = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// }

// //payload es el contenido de la peticion que se envia al servidor en una peticion post

// fetch(`${urlBase}/posts`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify(requestBody)
// })
//     .then(response => response.json())
//     .then(json => console.log(json))

//------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------
//put actualizar o editar informacion
//Body es el cuerpo de la peticion que se envia al servidor en una peticion put
//pero debe llevar el id del recurso que se quiere actualizar
//para obtener el id del recurso que se quiere actualizar se debe hacer una peticion get

// let requestBody2 = {
//     id: 3,
//     title: 'foo',
//     body: 'bar',
//     userId: 5,

// }

// let id_del_posteo = 5

// fetch(`${urlBase}/posts/${id_del_posteo}`,{
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify(requestBody2)

// }).then(response => response.json())
//     .then(json => console.log(json))


//------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------  

//patch actualizar o editar(solo pa editar un atributo) informacion

let requestBody3 = {
    title: 'este titulo se cambio',
}

let id_del_posteo2 = 10

fetch(`${urlBase}/posts/${id_del_posteo2}`,{

    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(requestBody3)

}).then(response=>response.json())
.then(json => console.log(json))




//------------------------------------------------------------------------------------------------  
//delete eliminar informacion

let id_delete = 7

fetch(`${urlBase}/posts/${id_delete}`, {

    method:'DELETE'

});