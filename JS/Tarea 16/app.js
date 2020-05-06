let input;
const message = document.getElementById('result');

const validateAge = () => {
    validate().then(res => {
        message.innerHTML = `resultado positivo: ${res}`;
    }).catch(err => {
        message.innerHTML = `resultado negativo: ${err}`;
    });
};

const validate = () => {
    input = document.getElementById("age").value;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(input >= 18) {
                resolve("mayor de 18");
            }else {
                reject("menor de 18");
            }
        }, 2000);
    });
};