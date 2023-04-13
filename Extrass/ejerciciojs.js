//Objeto Windows. Metodo alert()
window.alert("Hola mundo como te va")
alert("Como vas?")

/*Declarando una variable - Creando una cajita de datos */
let ItemMensaje;

// Asignar valor a la variable ItemMensaje
ItemMensaje = window.document.getElementById("Mensaje");

//Declarar y asignar valor en una variable
let nombre = window.prompt("Ingrese su nombre");

//Reemplazar el texto del primer parrafo
ItemMensaje.innerHTML = "Bienvenido " + nombre + " a este sitio Web"

//Colocar nuevo contenido
document.write("<h1>Pagina realizada por Emiliano G.<h1>")

//Mnesaje en la consola solo para desarrolladores
console.log("Mensaje en la consola")
