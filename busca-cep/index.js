const URl = "http://127.0.0.1:5500/Buscar-cep/index.html";

fetch(URL)
    .then((response) => {
     return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });