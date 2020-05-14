let list = document.getElementById('list');

const getInfo = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (response.status == 200) {
            const data = await response.json();
            addInfo(data);
        }
    } catch (e) {
        console.log(e);
    }
}

const addInfo = (data) => {
    data.forEach(element => {
        let fila = document.createElement('a');
        fila.className = "list-group-item list-group-item-action";
        console.log(element.id);
        fila.href = `detalle.html?id=${element.id}`;
        fila.innerHTML = `<span class="badge badge-primary badge-pill justify-content-between">${element.id}</span> ${element.title}`;
        list.appendChild(fila);
    });
};

getInfo();