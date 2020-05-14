const obtenerClima = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Clima soleado: 30 grados centigrados");
        });
    });
}

const obtenerTrafico = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sin trafico");
        });
    });
}

const planViaje = async () => {
    try {
        const clima = obtenerClima();
        const trafico = obtenerTrafico();
        const plan = await Promise.all([clima, trafico]);
        return plan
    }catch(e) {
        throw e;
    }
}

planViaje().then(infoPlan => {
    console.log(infoPlan);
}).catch(error => {
    console.log(error);
});