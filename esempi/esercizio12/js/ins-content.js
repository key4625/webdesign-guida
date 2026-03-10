//ApiUrl la prendo da api-config.js

//FASE DI CHIAMATA Utilizziamo fetch per recuperare i dati dall'API
fetch(apiUrl + "posts").then(response => {
    // Controlliamo se la risposta è stata ricevuta correttamente
    if (!response.ok) {
        console.error('L\'API ha risposto con un errore: ' + response.statusText);
    }
    return response.json(); // Convertiamo la risposta in formato JSON
})
.then(data => {
    // Ora abbiamo i dati in formato JSON, possiamo visualizzarli in console e salvarli nella variabile listaArticoli
    console.log('Dati recuperati dall\'API:', data);
    visualizzaArticoli(data);
})
.catch(error => {
    // Gestiamo eventuali errori che si sono verificati durante la richiesta
    console.error('C\'è stato un problema con la fetch operation:', error);
});

//FASE DI VISUALIZZAZIONE Funzione che si occupa di visualizzare gli articoli recuperati dall'API all'interno del div con id listaArticoli
function visualizzaArticoli(listaArticoli) {
    //inserisco nel div listaArticoli un elenco degli articoli recuperati dall'API
    const divListaArticoli = document.getElementById('listaArticoli');
    //creo una griglia di articoli con bootstrap
    listaArticoli.forEach(singoloArticolo => {
        const col = document.createElement('div');
        col.classList.add('col-md-4', 'mb-4');
        col.innerHTML = `
            <div class="card h-100">
                <img src="${singoloArticolo.image}" class="card-img-top" alt="${singoloArticolo.title}">
                <div class="card-body">
                    <h5 class="card-title">${singoloArticolo.title}</h5>
                    <p class="card-text">${singoloArticolo.content}</p>
                </div>
            </div>
        `;
        divListaArticoli.appendChild(col);
    });
}