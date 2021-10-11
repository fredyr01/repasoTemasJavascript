//* Funcion flecha
// const miFuncionFlecha = () => {
//     console.log("Saludos desde la función flecha");
// }

//* Si es una sola linea como anterior que es console.log se puede declarar así:
// const miFuncionFlecha = () => console.log("Saludos desde la función flecha");
// miFuncionFlecha();
//*------------------------------------------------------------------------
// const saludar = () => {
//     return "Saludos desde la función flecha";
// }
//* Forma anterior simplificada
const saludar = () => "Saludos desde la función flecha";
console.log(saludar());

//*---------------------------------------------------------------------------
//* Regresar objeto desde una función flecha

const regresaObjeto = () => ({nombre: "Fredy", apellido: "Rios"});
console.log(regresaObjeto());
//*---------------------------------------------------------------------------
//* Recibir parámetros

const funcionConParametros = (mensaje) => console.log(mensaje);
//* Si es solo un parametro se omiten los parentesis de (mensaje)
funcionConParametros('Saludos con parámetros');

//* Forma simplificada
//const funcionConVariosParametros = (op1, op2) => op1 + op2;
//* Forma extensa
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    // return resultado;
    return `Resultado: ${resultado}`;
};
console.log(funcionConVariosParametros(5,7));

