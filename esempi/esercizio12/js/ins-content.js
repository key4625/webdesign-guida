//ApiUrl la prendo da api-config.js
function caricaArticoli() {
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
}
// Eseguiamo al primo avvio
document.addEventListener('DOMContentLoaded', caricaArticoli);

// Eseguiamo ANCHE quando l'utente torna indietro col tasto Back
window.addEventListener('pageshow', (event) => {
    // Se la pagina era in cache (persisted), ricarichiamo i dati
    if (event.persisted) {
        caricaArticoli();
    }
});

//FASE DI VISUALIZZAZIONE Funzione che si occupa di visualizzare gli articoli recuperati dall'API all'interno del div con id listaArticoli
function visualizzaArticoli(listaArticoli) {
    //inserisco nel div listaArticoli un elenco degli articoli recuperati dall'API
    const divListaArticoli = document.getElementById('listaArticoli');
    //creo una griglia di articoli con bootstrap
    listaArticoli.forEach(singoloArticolo => {
        const col = document.createElement('div');
        col.classList.add('col-md-4', 'mb-4');
        let bottoniModifica = '';
        //Se ho authtoken e se sono in dashboard, mostro i bottoni di modifica ed eliminazione
        if (localStorage.getItem('authToken')&& window.location.pathname.includes('admin/dashboard.html')) {
            // Modifico il bottone "Matita" per renderlo un link verso create.html passando l'ID come parametro GET
            bottoniModifica = `
                <div class="card-footer d-flex justify-content-between">
                    <a href="create.html?id=${singoloArticolo.id}" class="btn btn-primary"><i class="bi bi-pencil"></i> Modifica</a>
                    <button class="btn btn-danger" data-id="${singoloArticolo.id}"><i class="bi bi-trash"></i> Elimina</button>
                </div>`;
        }
        col.innerHTML = `
            <div class="card h-100">
                <img src="${singoloArticolo.image}" class="card-img-top" alt="${singoloArticolo.title}">
                <div class="card-body">
                    <h5 class="card-title">${singoloArticolo.title}</h5>
                    <p class="card-text">${singoloArticolo.content.substring(0, 200)}...</p>
                </div>
                ${bottoniModifica}
            </div>`;
        divListaArticoli.appendChild(col);
    });
}

// GESTIONE CANCELLAZIONE (Event Delegation)
// Ascoltiamo i click sull'intero contenitore degli articoli
document.getElementById('listaArticoli').addEventListener('click', async (event) => {
    // Cerchiamo il bottone "Elimina" più vicino all'elemento cliccato
    // (serve .closest perché l'utente potrebbe cliccare sull'icona <i> invece che sul bottone)
    const pulsansteElimina = event.target.closest('.btn-danger');

    // Se abbiamo trovato un bottone delete E ha un attributo data-id
    if (pulsansteElimina && pulsansteElimina.dataset.id) {
        const idArticolo = pulsansteElimina.dataset.id;
        
        // Chiediamo conferma all'utente
        const conferma = confirm("Sei sicuro di voler eliminare questo articolo? L'operazione non può essere annullata.");
        
        if (conferma) {
            try {
                const token = localStorage.getItem('authToken');
                if (!token) {
                    alert('Token mancante! Esegui il login.');
                    return;
                }

                // Chiamata API per eliminare il post
                const response = await fetch(apiUrl + 'posts/' + idArticolo, { // endpoint: /posts/{id}
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });

                if (response.ok) {
                    alert('Articolo eliminato con successo!');
                    // Rimuoviamo la card dalla pagina senza ricaricare tutto
                    // Risaliamo fino al contenitore col-md-4 e lo rimuoviamo dal DOM
                    pulsansteElimina.closest('.col-md-4').remove();
                } else {
                    const errorText = await response.text();
                    alert('Errore durante la cancellazione: ' + errorText);
                }
            } catch (error) {
                console.error('Errore di rete:', error);
                alert('Impossibile contattare il server.');
            }
        }
    }
});