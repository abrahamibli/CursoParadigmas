const changeState = number => {
    table = document.getElementById(`table${number}`);
    currentDate = new Date();
    startTime = [];
    finalTime = [];

    if(table.src.match("./assets/apagado.png")) {
        table.src = "./assets/encendido.png";
        startTime = [currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()];
        document.getElementById(`hInicio${number}`).innerHTML = `Hora de Inicio: ${startTime[0]}:${startTime[1]}:${startTime[2]}`;
    }else {
        table.src = "./assets/apagado.png";
        finalTime = [currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()];
        document.getElementById(`hFinal${number}`).innerHTML = `Hora Final: ${finalTime[0]}:${finalTime[1]}:${finalTime[2]}`;
        document.getElementById(`total${number}`).innerHTML = `Total: ${getTotal(startTime, finalTime)}`;
    }
};

const getTotal = (start, final) => {
    
};