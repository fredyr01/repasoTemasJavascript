let persona = {
    nombre: 'Fredy',
    apellido: 'Rios',
    email: 'fredyrios01@gmail.com',
    edad: 27,
    nombreCompleto: function(){
        return this.nombre+' '+this.apellido;
    }
};
//* Agregar propiedad
persona.tel = "2606286";
console.log(persona);

//* Eliminar propiedad
delete persona.tel;
console.log(persona);