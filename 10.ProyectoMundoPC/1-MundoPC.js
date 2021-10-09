//todo ---------------------- CLASE DISPOSITIVO ENTRADA ------------------------------------------------------
class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada = this.tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca = this.marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

//todo ---------------------- CLASE MOUSE -------------------------------------------------------------------
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `IdRaton: ${this._idRaton}, Tipo entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

let raton1 = new Raton('USB', 'GENIUS');
console.log(raton1.toString());
let raton2 = new Raton("PS/2", "HP");
console.log(raton2.toString());

//todo ---------------------- CLASE TECLADO -------------------------------------------------------------------
class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Id teclado: ${this._idTeclado}, Tipo entrada: ${this._tipoEntrada}, Marca:${this._marca}`;
    }
}

let teclado1 = new Teclado("USB", "Lenovo");
console.log(teclado1.toString());
let teclado2 = new Teclado("Bluetooth", "Compaq");
console.log(teclado2.toString());

//todo ---------------------- CLASE MONITOR -------------------------------------------------------------------
class Monitor{

    static contadorMonitores = 0;

    constructor(marca, tamano){
        this._idMonitor = ++ Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    get tamano(){
        return this._tamano;
    }
    set tamano(tamano){
        this._tamano = tamano;
    }

    toString(){
        return `IdMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamano}`;
    }
}

let monitor1 = new Monitor("Samsung", 20);
let monitor2 = new Monitor("DELL", 25);

console.log(monitor1.toString());
console.log(monitor2.toString());

//todo ---------------------- CLASE COMPUTADORA ----------------------------------------------------------------

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString(){
        return `Computadora: ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}

let computadora1 = new Computadora("HP", monitor1, raton1, teclado1);
//*  ------ Son iguales los siguientes llamados a toString()
console.log(computadora1.toString());
//todo   ------  console.log(`${computadora1}`);

let computadora2 = new Computadora("Acer", monitor2, raton2, teclado2);
console.log(`${computadora2}`);



//todo ---------------------- CLASE ORDEN ----------------------------------------------------------------
class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = '';
        for(let computadora of this._computadoras){
            computadorasOrden+= '\n{'+computadora.toString()+'}';
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);

orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();


