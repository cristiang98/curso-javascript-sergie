// agrega el valor de los botones a la pantalla
function agregar(x){
    document.getElementById("pantalla").value += x;
}
// calcula el resultado
function calcular(){
    const valor = document.getElementById("pantalla").value ;
    const resultado = eval(valor);
    document.getElementById("pantalla").value = resultado;
}

// borra el contenido de la pantalla
function borrar(){
    document.getElementById("pantalla").value = "";
}
