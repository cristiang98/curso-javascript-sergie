let apiKey = "fafce95140846fbd60fb7397ce11b71e";

let city = "Medellín";

let difKelvin = 273.15; // Diferencia entre Kelvin y Celsius

let urlBase = `https://api.openweathermap.org/data/2.5/weather`;


// Función para obtener el clima de una ciudad
//usando el addEventListener para obtener el valor del input
document.getElementById("botonBusqueda").addEventListener("click", () => {
    // Obtener el valor del input de la ciudad
    // .value es para obtener el valor del input
    const city = document.getElementById("ciudadEntrada").value;

    if (city === "") {
        alert("Por favor ingrese una ciudad!");
        return;
    } else {
        fetchDatosClima(city);
    }
});

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((json) => mostrarDatosClima(json));
}

function mostrarDatosClima(data) {
    // agregamos a una variable el id del div que contiene los datos del clima
    // para poder agregarle el contenido que queremos mostrar en el html que traemos de la api
    const divDatosClima = document.getElementById("datosClima");

    // Limpiamos el contenido del div
    divDatosClima.innerHTML = "";
    
    //creamos variables de nombre , temperatura, descripcion

    const nombre = data.name;
    const temperatura = data.main.temp - difKelvin;
    const descripcion = data.weather[0].description;
    const ciudad = data.sys.country;
    const icono = data.weather[0].icon;

    // Creamos los elementos para poner nuestra información en el html para cada uno de las variables 
    // que creamos anteriormente 

    const h2Nombre = document.createElement("h2");
    h2Nombre.textContent = `${nombre}, ${ciudad}`;

    const pTemperatura = document.createElement("p");
    pTemperatura.textContent = `La temperatura de ${nombre} es de: ${temperatura.toFixed(2)}°C`;

    const pDescripcion = document.createElement("p");
    pDescripcion.textContent = `El clima de ${nombre} es: ${descripcion}`;

    const imgIcono = document.createElement('img');
    imgIcono.src = `http://openweathermap.org/img/wn/${icono}.png`
    

    // Agregamos los elementos al div
    // appendChild es para agregar un elemento hijo a un elemento padre
    // porque se usa appendChild? porque estamos agregando elementos al div que creamos 
    // si no usaramos appendChild no se agregarian los elementos al div entonces tocaria usar innerHTML 

    divDatosClima.appendChild(h2Nombre);
    divDatosClima.appendChild(pTemperatura);
    divDatosClima.appendChild(imgIcono);
    divDatosClima.appendChild(pDescripcion);
    
    

    
}
