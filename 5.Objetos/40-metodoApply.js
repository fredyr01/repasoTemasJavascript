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
//* ----- Uso de metodo apply

console.log(persona1.nombreCompleto('Lic', '55824'));

let arrayArgumentos = ['Ing', '682682'];
console.log(persona1.nombreCompleto.apply(persona2, arrayArgumentos));