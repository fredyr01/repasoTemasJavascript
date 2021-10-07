//* Se crea función iniciando el nombre con mayuscula
//* Función constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona('John','Rios','fredyrios01@gmail.com');
console.log(padre);

let madre = new Persona('Aneth', 'Herrera', 'aneth@gmail.com');
console.log(madre);

