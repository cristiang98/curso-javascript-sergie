// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAKlFXocOA2h-3NiivGRhb5sDCpl55idpY",
    authDomain: "datos-de-formulario-js-433dc.firebaseapp.com",
    projectId: "datos-de-formulario-js-433dc",
    storageBucket: "datos-de-formulario-js-433dc.appspot.com",
    messagingSenderId: "388609143844",
    appId: "1:388609143844:web:cf63b9cc58d12cfbe894b1",
    measurementId: "G-G66WCP3GDS"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

// Add your code here to interact with the Firestore database

document.getElementById("formulario").addEventListener("submit", (event) => {
    // Evitar que se recargue la página
    event.preventDefault();

    //validar campo nombre

    let inp_nombre = document.getElementById("name").value;
    let error_nombre = document.getElementById("nameError");

    // textContent se usa en vez de innerHtml porque es más seguro y no se ejecuta código html que se haya introducido en el campo
    // innerHtml se usa cuando se quiere que el contenido sea interpretado como html
    if (inp_nombre.trim() === "") {
        error_nombre.textContent = "El campo nombre es obligatorio";
        error_nombre.classList.add("error-message");
    } else {
        error_nombre.textContent = "";
        error_nombre.classList.remove("error-message");
    }

    //validar campo correo

    let inp_correo = document.getElementById("email").value;
    let error_correo = document.getElementById("emailError");
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // funcion test es para comprobar si el valor cumple con la expresión regular que se le pasa como argumento
    // si cumple devuelve true, si no cumple devuelve false
    if (!emailRegex.test(inp_correo)) {
        error_correo.textContent = "Por favor, introduce un correo válido";
        error_correo.classList.add("error-message");
    } else {
        error_correo.textContent = "";
        error_correo.classList.remove("error-message");
    }

    //validar campo contraseña

    let inp_contrasena = document.getElementById("password");
    let error_contrasena = document.getElementById("passwordError");

    // expresión regular para validar contraseña
    // debe tener entre 8 y 16 caracteres y al menos una mayúscula, una minúscula, un número y un caracter especial
    // el regex se debe poner entre / / y se usa ^ para indicar que el valor debe empezar con lo que se pone a continuación
    let regex_contrasena =
        /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

    if (!regex_contrasena.test(inp_contrasena.value)) {
        error_contrasena.textContent =
            "la contraseña debe tener entre 8 y 16 caracteres, al menos una mayúscula, una minúscula, un número y un caracter especial";
        error_contrasena.classList.add("error-message");
    } else {
        error_contrasena.textContent = "";
        error_contrasena.classList.remove("error-message");
    }

    // si todos los cmapos son validos enviar formulario

    if (
        !error_nombre.textContent &&
        !error_correo.textContent &&
        !error_contrasena.textContent
    ) {
        //aqui ponemos un backend que reciba los datos

        db.collection("users")
            .add({
                name: inp_nombre,
                email: inp_correo,
                password: inp_contrasena.value,
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });

        alert("Formulario enviado con éxito!");

        document.getElementById("formulario").reset();
    }
});
