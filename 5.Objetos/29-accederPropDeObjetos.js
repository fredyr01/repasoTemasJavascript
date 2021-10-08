let persona = {
    nombre: 'Fredy',
    apellido: 'Rios',
    email: 'fredyrios01@gmail.com',
    edad: 27,
    nombreCompleto: function(){
        return this.nombre+' '+this.apellido;
    }
};
console.log(persona.nombre);
console.log(persona['apellido']);

//* Recorrer cada una de las propiedades del objeto
//* ----------- Se usa For in
for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad])
}