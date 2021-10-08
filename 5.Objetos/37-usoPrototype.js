function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}

Persona.prototype.tel='443322';

let hijo = new Persona('John','Rios','fredyrios01@gmail.com');
hijo.tel='112233';
console.log(hijo.tel);
let madre = new Persona('Aneth', 'Herrera', 'aneth@gmail.com');
console.log(madre.tel);

