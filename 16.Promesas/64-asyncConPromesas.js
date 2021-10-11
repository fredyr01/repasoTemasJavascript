//* ASYNC indica que una función regresa una promesa

let promesa = new Promise((resolver) => {
    console.log("Inicio promesa");
    setTimeout(() => resolver("Saludos con promesa y timeout"), 3000);
    console.log("Fin promesa");
});

//promesa.then(valor => console.log(valor));

async function miFuncionConPromesa(){
    return "Saludos con promesa y async";
}

miFuncionConPromesa().then(valor => console.log(valor));
//*- Consume la promesa