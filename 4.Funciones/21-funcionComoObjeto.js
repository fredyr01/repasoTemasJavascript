//* Declaración de la función

function miFuncion(a,b){

    //* Saber cuantos argumentos tiene la función dentro de la función
    console.log(arguments.length);
    return a + b;
}

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);