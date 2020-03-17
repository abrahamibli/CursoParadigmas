const mapArray = num => {
    let arr = [1, 2, 4, 8];
    document.getElementById("res_map").innerHTML = arr.map(x => x*num);
}

const filterArray = num => {
    let arr = [1, 2, 4, 8];
    document.getElementById("res_filter").innerHTML = arr.filter(x => x>num);
}

const reduceArray = num => {
    let arr = [1, 2, 4, 8];
    reducer = (acumulator, actualValue) => acumulator + actualValue;
    let res = arr.reduce(reducer, parseInt(num));
    document.getElementById("res_reduce").innerHTML = res;
}