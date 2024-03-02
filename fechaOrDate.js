//forma de poner la fecha AAAA-MM-DD (iso)



const fecha = new Date();

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let resultado = `${fecha.getDate()} ${meses[fecha.getMonth()]} ${fecha.getFullYear()}`;

console.log(resultado);