var startTime = [];
var pokerStartTime;
var finalTime;
var liveTotal = [];
const poolCost = 50;
const pokerCost = 80;

const changeTableState = number => {
    table = document.getElementById(`table${number}`);

    if (table.src.match("./assets/apagado.png")) {
        resetValues(`hInicio${number}`, `hFinal${number}`, `total${number}`);
        table.src = "./assets/encendido.png";
        startTime[number] = new Date();
        document.getElementById(`hInicio${number}`).innerHTML =
            `Hora de Inicio: ${startTime[number].getHours()}:${startTime[number].getMinutes()}:${startTime[number].getSeconds()}`;
        setLiveTotal (number, poolCost, startTime[number]);
    } else {
        table.src = "./assets/apagado.png";
        finalTime = new Date();
        document.getElementById(`hFinal${number}`).innerHTML =
            `Hora Final: ${finalTime.getHours()}:${finalTime.getMinutes()}:${finalTime.getSeconds()}`;
        document.getElementById(`total${number}`).innerHTML =
            `Total: $${getTotal(poolCost, startTime[number], finalTime)} pesos`;
    }
};

const getTotal = (cost, start, final) => {
    const costInSeconds = cost / (60 * 60);
    let difSeconds = (final.getTime() - start.getTime()) / 1000;
    return (costInSeconds * difSeconds).toFixed(2);
};

const randomProduct = () => {
    products = ["cerveza: $20 pesos", "nachos: $30 pesos", "dogos: $50 pesos", "hamburguesa: $50 pesos", "alitas: $70 pesos"];
    document.getElementById("productDescription").innerHTML = `Compraste ${products[Math.floor(Math.random() * products.length)]}`;
};

const changePokerState = () => {
    table = document.getElementById("pokerTable");

    if (table.src.match("./assets/poker_table_off.png")) {
        resetValues("hInicioPoker", "hFinalPoker", "totalPoker");
        table.src = "./assets/poker_table.png";
        pokerStartTime = new Date();
        document.getElementById("hInicioPoker").innerHTML =
            `Hora de Inicio: ${pokerStartTime.getHours()}:${pokerStartTime.getMinutes()}:${pokerStartTime.getSeconds()}`;
        setLiveTotalPoker (pokerCost, pokerStartTime);
    } else {
        table.src = "./assets/poker_table_off.png";
        finalTime = new Date();
        document.getElementById("hFinalPoker").innerHTML = `Hora Final: ${finalTime.getHours()}:${finalTime.getMinutes()}:${finalTime.getSeconds()}`;
        document.getElementById("totalPoker").innerHTML = `Total: $${getTotal(pokerCost, pokerStartTime, finalTime)} pesos`;
    }
};

const resetValues = (hInicioId, hFinalId, totalId) => {
    document.getElementById(hInicioId).innerHTML = "Hora de Inicio: ";
    document.getElementById(hFinalId).innerHTML = "Hora Final: ";
    document.getElementById(totalId).innerHTML = "Total: ";
};

const setLiveTotal = (number, cost, start) => {
    table = document.getElementById(`table${number}`);
    if (table.src.match("./assets/encendido.png")) {
        let final = new Date();
        let costInSeconds = cost / (60 * 60);
        let difSeconds = (final.getTime() - start.getTime()) / 1000;
        document.getElementById(`total${number}`).innerHTML = `Total: $${(costInSeconds * difSeconds).toFixed(2)} pesos`;
        setTimeout(setLiveTotal, 1000, number, cost, start);
    }
};

const setLiveTotalPoker = (cost, start) => {
    table = document.getElementById("pokerTable");
    if (table.src.match("./assets/poker_table.png")) {
        let final = new Date();
        let costInSeconds = cost / (60 * 60);
        let difSeconds = (final.getTime() - start.getTime()) / 1000;
        document.getElementById("totalPoker").innerHTML = `Total: $${(costInSeconds * difSeconds).toFixed(2)} pesos`;
        setTimeout(setLiveTotalPoker, 1000, cost, start);
    }
};