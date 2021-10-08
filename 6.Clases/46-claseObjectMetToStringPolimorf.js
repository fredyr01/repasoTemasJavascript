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
    //* ----- Sobreescribir el metodo toString()
    toString(){
        //* Se aplica polimorfismo
        return this.nombreCompleto();
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

let empleado1 = new Empleado('Maria', 'Jimenez', 'Contabilidad');
console.log(empleado1.toString()); // Maria Jimenez, Contabilidad