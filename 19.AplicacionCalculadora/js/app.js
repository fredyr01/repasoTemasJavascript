function sumar(){
    const formulario = document.getElementById('formulario');
    let operandoA = formulario['opa'];
    let operandoB = formulario['opb'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
    }