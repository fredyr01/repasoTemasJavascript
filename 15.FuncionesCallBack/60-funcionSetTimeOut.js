//* --- Llamadas asincronas con uso de setTimeout

function miFuncionCallBack(){
    console.log("Saludo asincrono despues de 3 segundos");
}

setTimeout(miFuncionCallBack, 3000); //* Despues de 3 segundos

//* --- Adaptandolo con función flecha

setTimeout( () => console.log("Saludo asincrono 2"), 5000);