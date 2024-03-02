

let auto1 = {

    marca : "Toyota",
    modelo : "Corolla",
    peso : 1200,
    color : "blanco",

}

let auto2 = {
    
        marca : "Nissan",
        modelo : "Sentra",
        peso : 1300,
        color : "gris",
        
    }
//hacemos un salto de linea con \n
//console.log(auto1.color + '\n' +  auto2.color);

let vendedor = { 

    nombre : "Juan",
    apellido : "Pérez",
    empresa : "Autos de México",
    habilidades : [ 'carisma', 'empatía', 'conocimiento de producto', 'cierre de ventas1'],
    vender: function() {
        return("Vendí un auto")
    },

    nombreCompleto : function(){
        return this.nombre + " " + this.apellido;
    }

}
// pasar a json un objeto
const vendedorJson = JSON.stringify(vendedor);


//console.log(vendedorJson);