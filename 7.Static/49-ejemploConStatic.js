//* Clase PADRE
class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona+' '+this._nombre+' '+this.apellido;
    }
    //* ----- Sobreescribir el metodo toString()-----------------------------------------------------------
    toString(){
        //* Se aplica polimorfismo----------------------------------------------
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("Saludos desde el metodo static");
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

//* CLASE HIJA
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento;
    }
}

let persona1 = new Persona('Fredy', 'Rios');
console.log(persona1.toString()); // 1 Fredy Rios
let empleado1 = new Empleado('John', 'Herrera', 'Sistemas');
console.log(empleado1.toString()); // 2 John Herrera, Sistemas

console.log(Persona.contadorPersonas);

let persona2 = new Persona('Carla', 'Ramirez');
console.log(persona2.toString()); // 3 Carla Ramirez

console.log(Persona.contadorPersonas);


