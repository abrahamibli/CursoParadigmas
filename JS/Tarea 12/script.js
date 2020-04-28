const funcion1 = (mensaje, callback) => {
    setTimeout(callback, 3000);
    console.log(mensaje);
}

const funcionCallBack = () => {
    console.log("Salir de antro");
}

funcion1("Hacer tarea", funcionCallBack);
