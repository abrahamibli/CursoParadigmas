let currentPage = 1;
const list = document.getElementById('list');

const getData = async () => {
    const api_key = '0287efb168fda099ac59fe6ad2c63420';
    const ts = '1';
    const hash = '61a15d1b209fbedd061f988de5602572';
    let offset = 0;
    offset += (currentPage*30);
    const url = `https://gateway.marvel.com/v1/public/characters?limit=30&apikey=${api_key}&ts=${ts}&offset=${offset}&hash=${hash}`;

    params = {
        method: 'GET',
    }
    
    try {
        const response = await fetch(url, params);
        if(response.status == 200) {
            const json = await response.json();
            console.log(json.data.results);
            addInfo(json.data.results);
        }else {
            throw 'error';
        }
    }catch(e) {
        console.log(e);
    }
}

const addInfo = (data) => {
    list.innerHTML = '';
    data.forEach(element => {
        let fila = document.createElement('a');
        fila.className = "list-group-item list-group-item-action";
        console.log(element.id);
        fila.href = `detalles.html?id=${element.id}`;
        fila.innerHTML = `<span class="badge badge-primary badge-pill justify-content-between">${element.id}</span> ${element.name}`;
        list.appendChild(fila);
    });
};

const nextPage = () => {
    currentPage++;
    getData();
}

const previousPage = () => {
    currentPage--;
    getData();
}

getData();