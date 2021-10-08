class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }
    
    set nombre(nombre){
        this._nombre = nombre;
    }
}
let persona1 = new Persona('Fredy', 'Rios');
//*------ Usando el metodo set
persona1.nombre = 'John';
//* ---- Llamar el metodo get nombre
console.log(persona1.nombre);
