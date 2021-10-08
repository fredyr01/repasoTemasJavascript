const persona= {
    nombre: 'Fredy',
    apellido: 'Rios'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'John';
    p1.apellido = "Herrera";
}
//* --- Paso por referencia
cambiarValorObjeto(persona);

console.log(persona); //Imprime John Herrera