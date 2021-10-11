//* ---- Función con hoisting

miFuncion();

function miFuncion(){
    console.log("Saludos desde miFuncion");
}
//*---------------------------------------------------------------------

//* Funciones anonima
let miFuncion2 = function(){
    console.log("Saludos desde miFuncion2");
}

miFuncion2();
//*---------------------------------------------------------------------

//* Funcion flecha
const miFuncionFlecha = () => {
    console.log("Saludos desde la función flecha");
}

miFuncionFlecha();






