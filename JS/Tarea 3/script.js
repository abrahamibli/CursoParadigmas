function EncenderOApagar() {
    element = document.getElementById('foco');
    if(element.src.match('focoOff')) {
        element.src = 'focoOn.png';
    }else {
        element.src = 'focoOff.png';
    }
}