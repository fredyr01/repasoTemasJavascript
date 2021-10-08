let sumar = function (a=4, b=5){
    console.log(arguments[0]); //3
    console.log(arguments[1]); //6
    console.log(arguments[2]); //7
    return a+b+arguments[2];
}
resultado = sumar(3,6,7);
console.log(resultado); // El resultado sería la suma: 3+6+7