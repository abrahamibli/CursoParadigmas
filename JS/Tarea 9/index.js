const invertirTexto = () => {
    let texto = document.getElementById("texto").value.split("").reverse().join("");
    document.getElementById("invertido").innerHTML = texto;
};