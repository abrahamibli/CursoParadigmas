const message = document.getElementById('message');

const pay = new Promise(async (resolve, reject) => {
    message.innerHTML = "pagando";
    setTimeout(() => {
        let paymentProvider = await Promise.race([paypal, creditCard]);
        message.innerHTML = `proveedor de pago elegido: ${paymentProvider}`; 
        resolve(resolve({paymentDone: true, paymentProvider, clientId: 76483}));
    }, 3000);
});

const paypal = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Paypal");
    }, 5000);
});

const creditCard = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Tarjeta");
    }, 12000);
});

const sendFood = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Comida Entregada");
    }, 20000);
});

const startProcess = async () => {
    let orden = await Promise.all([pay, sendFood])
    message.innerHTML = orden[1];
};

startProcess();