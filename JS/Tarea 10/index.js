const addPersona = (persona) => {
    personas = new Array();
    personas.push(persona);
    personas.forEach(persona => {
        let elemento = document.createElement('li');
        elemento.innerHTML = persona;
        document.getElementById("lista").appendChild(elemento);
    });
};