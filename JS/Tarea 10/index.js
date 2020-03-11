personas = new Array();

const addPersona = (persona) => {
    personas.push(persona);
    personas.forEach(persona => {
        let elemento = document.createElement('li');
        elemento.innerHTML = persona;
        document.getElementById("lista").appendChild(elemento);
    });
};