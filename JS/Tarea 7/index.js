function msj(nombre, sexo) {
    let mensaje = (sexo == '1') ? `Bienvenido ${nombre}` : mensaje = `Bienvenida ${nombre}`;
    document.getElementById("resultado").innerHTML = mensaje;
}