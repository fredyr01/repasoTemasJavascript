let persona = {
    nombre: 'Fredy',
    apellido: 'Rios',
    email: 'fredyrios01@gmail.com',
    edad: 27,
    nombreCompleto: function(){
        return this.nombre+' '+this.apellido;
    }
};

//* ------ Primera forma
//* Concatenar cada valor de cada propiedad
console.log(persona.nombre+', '+persona.apellido+', '+persona.email
+', '+persona.edad+', '+persona.nombreCompleto());

//* ----- Segunda forma
//* Usando for in
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//* ----- Tercera forma
//* Usando object values que devuelve objeto como arreglo
let personaArray = Object.values(persona);
console.log(personaArray);

//* ----- Cuarta forma
//* Usando json stringify que convierte objeto a una cadena
let personaString = JSON.stringify(persona);
console.log(personaString);