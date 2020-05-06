const message = document.getElementById('message');

const pay = new Promise((resolve, reject) => {
    message.innerHTML = "pagando";
    setTimeout(() => {
        Promise.race([paypal, creditCard]).then(paymentProvider => {
            message.innerHTML = `proveedor de pago elegido: ${paymentProvider}`; 
            resolve(resolve({paymentDone: true, paymentProvider, clientId: 76483}));
        });
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

const startProcess = () => {
    Promise.all([pay, sendFood])
    .then(orden => {
        message.innerHTML = orden[1];
    });
};

startProcess();