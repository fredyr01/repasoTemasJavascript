//* Clase PADRE
class Persona{

    static contadorObjetosPersona = 0;

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
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
        return this._nombre+' '+this.apellido;
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
let empleado1 = new Empleado('John', 'Herrera', 'Sistemas');

//* persona1.saludar();   no es posible llamar un metodo static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);