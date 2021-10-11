let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver("Se resolvió correctamente");
    else 
        rechazar("Se produjo un error");
});

//* Forma en una sola linea
//*       miPromesa.then( valor => console.log(valor), error => console.log(error));

miPromesa
    .then(valor => console.log(valor))
    .catch(error => console.log(error));