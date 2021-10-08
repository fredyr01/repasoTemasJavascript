let persona1 = {
    nombre: 'Fredy',
    apellido: 'Rios',
    nombreCompleto: function(){
        return this.nombre+' '+this.apellido;
    }
}
let persona2 = {
    nombre: 'John',
    apellido: 'Herrera'
}
//* ----- Uso de metodo Call
//* Metodo persona1.nombreCOmpleto con los datos
//* de persona2
console.log(persona1.nombreCompleto());

//* Se puede hacer debido a que tienen la misma estructura
console.log(persona1.nombreCompleto.call(persona2));