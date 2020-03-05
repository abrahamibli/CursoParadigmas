const msj = (nombre, sexo) => {
    let mensaje = (sexo == '1') ? `Bienvenido ${nombre}` : `Bienvenida ${nombre}`;
    document.getElementById("resultado").innerHTML = mensaje;
};