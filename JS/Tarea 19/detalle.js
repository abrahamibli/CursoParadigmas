let card = document.getElementById('card');
const urlLocal = new URL(window.location.href);
const search_params = urlLocal.searchParams;
const id = search_params.get('id');

const getInfo = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (response.status == 200) {
            const data = await response.json();
            console.log(data);
            detail(data);
        }
    } catch (e) {
        console.log(e);
    }
}

const detail = (data) => {
    let body = document.createElement('div');
    body.className = "card-body";
    body.innerHTML = `<h5 class="card-title">ID: ${data.id} Usuario ID: ${data.userId} Titulo: ${data.title}</h5>
    <h5 class="card-title">Usuario ID: ${data.userId}</h5>
    <h5 class="card-title">Titulo: ${data.title}</h5>
    <p class="card-text">${data.body}</p>
    <a href="index.html" class="btn btn-primary">Regresar a la lista</a>`;
    card.appendChild(body);
}

getInfo();