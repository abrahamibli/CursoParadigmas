var startTime;
var finalTime;
const poolCost = 50;
const pokerCost = 80;

const changeTableState = number => {
    table = document.getElementById(`table${number}`);

    if(table.src.match("./assets/apagado.png")) {
        resetValues(`hInicio${number}`, `hFinal${number}`, `total${number}`);
        table.src = "./assets/encendido.png";
        startTime = new Date();
        document.getElementById(`hInicio${number}`).innerHTML = `Hora de Inicio: ${startTime.getHours()}:${startTime.getMinutes()}:${startTime.getSeconds()}`;
    }else {
        table.src = "./assets/apagado.png";
        finalTime = new Date();
        document.getElementById(`hFinal${number}`).innerHTML = `Hora Final: ${finalTime.getHours()}:${finalTime.getMinutes()}:${finalTime.getSeconds()}`;
        document.getElementById(`total${number}`).innerHTML = `Total: $${getTotal(poolCost, startTime, finalTime)} pesos`;
    }
};

const getTotal = (cost, start, final) => {
    const costInSeconds = cost/(60*60);
    let difSeconds = (final.getTime() - start.getTime()) / 1000;
    return (costInSeconds * difSeconds).toFixed(2);
};

const randomProduct = () => {
    products = ["cerveza: $20 pesos", "nachos: $30 pesos", "dogos: $50 pesos", "hamburguesa: $50 pesos", "alitas: $70 pesos"];
    document.getElementById("productDescription").innerHTML = `Compraste ${products[Math.floor(Math.random() * products.length)]}`;
};

const changePokerState = () => {
    table = document.getElementById("pokerTable");

    if(table.src.match("./assets/poker_table_off.png")) {
        resetValues("hInicioPoker", "hFinalPoker", "totalPoker");
        table.src = "./assets/poker_table.png";
        startTime = new Date();
        document.getElementById("hInicioPoker").innerHTML = `Hora de Inicio: ${startTime.getHours()}:${startTime.getMinutes()}:${startTime.getSeconds()}`;
    }else {
        table.src = "./assets/poker_table_off.png";
        finalTime = new Date();
        document.getElementById("hFinalPoker").innerHTML = `Hora Final: ${finalTime.getHours()}:${finalTime.getMinutes()}:${finalTime.getSeconds()}`;
        document.getElementById("totalPoker").innerHTML = `Total: $${getTotal(pokerCost, startTime, finalTime)} pesos`;
    }
};

const resetValues = (hInicioId, hFinalId, totalId) => {
    document.getElementById(hInicioId).innerHTML = "Hora de Inicio: ";
    document.getElementById(hFinalId).innerHTML = "Hora Final: ";
    document.getElementById(totalId).innerHTML = "Total: ";
};