let array = [7,2,5,9,4,6,8,1,3];

let i, j, temp;

console.log("Antes de ordenar ...");

for(i=0; i< array.length; i++){
    console.log(array[i]);
}

for(i=0; i < array.length; i++){
    for(j=0; j < array.length-1; j++){
        if(array[j] > array[j+1]){
            temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
}

console.log("Despues de ordenar");

for(i=0; i < array.length; i++){
    console.log(array[i]);
}

//* Ordenando numeros con sort

const numeros = [9, 999, 50, 301, 489, 172, 3, 14, 999, 9];

console.log(numeros.sort(
    function(a,b){
        if (a > b){
            return 1;
        } if (a < b){
            return -1;
        }
    }
));