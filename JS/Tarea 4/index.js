const calcular = () => {
    let res;
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    console.log(numero2);
    switch(document.getElementById("operacion").value) {
        case '1': 
            res = numero1 + numero2;
            break;
        case '2':
            res = numero1 - numero2;
            break;
        case '3':
            res = numero1 * numero2;
    }
    console.log(res);
    document.getElementById("resultado").innerHTML = res;
};