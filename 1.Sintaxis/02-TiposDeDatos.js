//* --------- Tipo de dato String
var nombre = "Fredy";
console.log(nombre);

//* --------- Tipo de dato number
var numero = 30;
console.log(numero);

//* -------- Tipo de dato Object
var objeto = {
    nombre:'Fredy',
    apellido:'Rios',
    edad:27
}
console.log(objeto);


//* ------- typeof: Saber el tipo de dato de la variable
console.log(typeof(numero));

//* ---------- Tipo de dato boolean
var bandera = true;
console.log(bandera);

//* --------- Tipo de dato: function
function miFuncion(){
}
console.log(typeof(miFuncion));

//* --------- Tipo de dato: Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//* --------- Tipo clase es una function
//* Las clases en javascript son una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);

//* -------- Tipo de dato undefined
var x; //todo --- O puede definirse ... var x = undefined
console.log(x);


//* -------- Tipo de dato null
//* Null = ausencia de valor
var y = null;
console.log(y);
//todo Si se usa typeof para y da como resultado object


//? ------------------ Arreglos -----------------------

var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
//todo Si se usa typeof para autos da como resultado object

