let persona1 = {
    nombre: 'Fredy',
    apellido: 'Rios',
    nombreCompleto: function(titulo, tel){
        return titulo+': '+this.nombre+' '+this.apellido+' '+ tel;
    }
}
let persona2 = {
    nombre: 'John',
    apellido: 'Herrera'
}
//* ----- Uso de metodo Call
console.log(persona1.nombreCompleto.call(persona2,'Ing','5555'));
//todo --- Se imprime Ing: John Herrera 5555