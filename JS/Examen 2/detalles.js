let card = document.getElementById('card');
let cardComics = document.getElementById('card-comics');
const urlLocal = new URL(window.location.href);
const search_params = urlLocal.searchParams;
const id = search_params.get('id');

const getInfo = async () => {
    const api_key = '0287efb168fda099ac59fe6ad2c63420';
    const ts = '1';
    const hash = '61a15d1b209fbedd061f988de5602572';
    const url = `https://gateway.marvel.com/v1/public/characters/${id}?apikey=${api_key}&ts=${ts}&hash=${hash}`;

    params = {
        method: 'GET',
    }

    try {
        const response = await fetch(url, params);
        if (response.status == 200) {
            const data = await response.json();
            console.log(data);
            detail(data.data.results[0]);
        }
    } catch (e) {
        console.log(e);
    }
}

const detail = (data) => {
    //card detalles
    let body = document.createElement('div');
    body.className = "card-body";
    body.innerHTML = `<img class="card-img-top" src="${data.thumbnail.path}.${data.thumbnail.extension}" alt="Card image cap">
    <h5 class="card-title">ID: ${data.id}</h5>
    <h5 class="card-title">Nombre: ${data.name}</h5>
    <p class="card-text">${data.description || 'No hay descripcion de este personaje'}</p>
    <a href="index.html" class="btn btn-primary"> <- Regresar a la lista</a>
    <a href="${data.urls[0].url}" class="btn btn-primary">Mas detalles...</a>`;
    card.appendChild(body);

    //card comics
    let body2 = document.createElement('div');
    body2.className = "card-body";
    body2.innerHTML = '<h5 class="card-title">Comics:</h5>';
    if(data.comics.items.length != 0) {
        data.comics.items.forEach(element => {
            body2.innerHTML += `<p> - ${element.name}</p>`;
        });
    }else {
        body2.innerHTML += '<p> Este personaje no tiene comics disponibles </p>';
    }
    cardComics.appendChild(body2);

}

getInfo();