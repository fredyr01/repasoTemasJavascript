//* Declaración de función tipo expresión
let x = function(a,b){return a + b};
let resultado = x(1,2);
console.log(resultado);

//* ---- Función tipo flecha
//todo ---- No se usa la palabra reservada FUNCTION y RETURN
const sumarFuncionTipoFlecha = (a,b) => a + b;

resultado = sumarFuncionTipoFlecha(3,5);
console.log(resultado);