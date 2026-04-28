function caricaSingoloArticolo() {
    //Trovare id dell'articolo da URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (!id) {
        document.getElementById('singoloArticolo').innerHTML = "<p>Articolo non trovato.</p>";
        return;
    }
    // Chiamare API per ottenere i dati dell'articolo
    fetch(apiUrl + 'posts/' + id).then(response => {
        if (!response.ok) throw new Error("Errore recupero articolo");
            return response.json();
        })
        .then(singoloArticolo => {
            // Inserire i dati nella pagina
            const divSingolo = document.getElementById('singoloArticolo');
            document.querySelector('#singoloArticolo h1').innerText = singoloArticolo.title;
            document.querySelector('#singoloArticolo img').src = singoloArticolo.image;
            document.querySelector('#singoloArticolo img').alt = singoloArticolo.title;
            document.querySelector('#breadcrumbTitle').innerText = singoloArticolo.category; // Aggiorniamo anche il breadcrumb con la categoria dell'articolo
            document.querySelector('#singoloArticolo p').innerText = singoloArticolo.content;

            
        })
        .catch(error => {
            console.error(error);
            document.getElementById('singoloArticolo').innerHTML = "<p>Impossibile caricare l'articolo.</p>";
        });
}
// Eseguiamo al primo avvio
document.addEventListener('DOMContentLoaded', caricaSingoloArticolo);