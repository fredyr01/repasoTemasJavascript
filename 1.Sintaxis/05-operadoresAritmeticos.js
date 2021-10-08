//* -- Suma +
//* -- Resta -
//* -- Multiplicacion *
//* -- Division /
//* -- Exponente **
//* -- Modulo %
//* -- Incremento ++
//* -- Decremento --

let a=5;
let b=8;
let z;
// *-------------------- Pre incremento
z=++a;
console.log(a);
console.log(z);
//* ---------------------Post incremento
z=b++;
console.log(b);
console.log(z);
//*--------------------- Pre decremento
z=--a;
console.log(a);
console.log(z);
//*--------------------- Post decremento
z=b--;
console.log(b);
console.log(z);


//*------------------- Ejercicio número par

function esPar(numero){
    if(numero % 2 == 0){
        console.log("El número es par");
    } else {
        console.log("El número es impar")
    }
}

esPar(10);

//*-------------------- Ejercicio mayor de edad o no

function esMayor(numero){
    let adulto = 18;
    if(numero >= adulto){
        console.log("La persona es mayor de edad");
    } else {
        console.log("La persona es menor de edad");
    }
}

esMayor(21);