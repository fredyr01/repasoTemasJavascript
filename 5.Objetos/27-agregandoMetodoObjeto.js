let persona = {
    nombre: 'Fredy',
    apellido: 'Rios',
    email: 'fredyrios01@gmail.com',
    edad: 27,
    nombreCompleto: function(){
        return this.nombre+' '+this.apellido;
    }
};
console.log(persona.nombreCompleto());