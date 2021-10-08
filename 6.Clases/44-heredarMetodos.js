//* Clase PADRE
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
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
}

let persona1 = new Persona ('Fredy', 'Rios');
console.log(persona1);

let empleado1 = new Empleado('Maria', 'Jimenez', 'Contabilidad');
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());