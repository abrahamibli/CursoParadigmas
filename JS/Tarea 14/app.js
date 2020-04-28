const limpiarCuarto = () => {
    return new Promise((resolve, reject) => {
        console.log("Limpiar cuarto");
        document.getElementById("process").innerHTML = "Limpiar Cuarto";
        setTimeout(() => resolve(hacerTarea()), 2000);
        
    });
}

const hacerTarea = () => {
    return new Promise((resolve, reject) => {
        console.log("Hacer Tarea");
        document.getElementById("process").innerHTML = "Hacer Tarea";
        setTimeout(() => resolve(salirDeAntro()), 2000);
    });
}

const salirDeAntro = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Salir de Antro"), 2000);
    });
}

limpiarCuarto()
.then(res => {
    document.getElementById("process").innerHTML = res;
    console.log(res);
});