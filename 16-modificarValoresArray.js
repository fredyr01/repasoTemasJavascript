const autos = ['BMW', 'Mercedes Benz', 'Volvo'];

//* ---------- Recorrer todos los elementos del arreglo
for(let i = 0; i < autos.length; i++){
    console.log(autos[i]);
}

autos[1] = 'MercedesBenz';
console.log(autos[1]); //Me mostrará el nombre modificado

autos.push('Audi'); // Se agrega este elemento al final del arreglo
console.log(autos);

//*------------- Preguntar si es un array
console.log(Array.isArray(autos));
console.log(autos instanceof Array);
