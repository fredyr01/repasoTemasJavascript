//* ----------- Ejemplo con ASYNC - AWAIT

async function funcionConPromesayAwait(){
    let miPromesa = new Promise(resolver => {
        resolver("Promesa con await");
    });
    //*Se consume la promesa
    console.log(await miPromesa);
}

funcionConPromesayAwait();