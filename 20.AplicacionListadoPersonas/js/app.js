// console.log("Listado de personas");

const personas = [
    new Persona("Fredy", "Rios"),
    new Persona("Angelica", "Perdomo")
];

function mostrarPersonas(){
    console.log("Mostrando personas...");
    let texto = "";
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const formulario = document.forms['formulario'];
    const nombre = formulario['nombre'];
    const apellido = formulario['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    } else {
        console.log("No hay información para agregar!");
    }

    
}
