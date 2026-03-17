const formCreate = document.getElementById('createArticleForm');
// Controlliamo se ci sono parametri URL per capire se siamo in MODIFICA
const urlParams = new URLSearchParams(window.location.search);
const idArticoloModifica = urlParams.get('id');

// Al caricamento della pagina:
document.addEventListener('DOMContentLoaded', async () => {
    // Se c'è un ID, vuol dire che siamo in modalità MODIFICA
    if (idArticoloModifica) {
        document.querySelector('h1').innerText = "Modifica Articolo #" + idArticoloModifica;
        document.querySelector('button[type="submit"]').innerText = "Salva Modifiche";

        // Scarico i dati vecchi per riempire il form
        try {
            const response = await fetch(apiUrl + 'posts/' + idArticoloModifica);
            if (!response.ok) throw new Error("Errore recupero articolo");
            const data = await response.json();
            
            // Riempio i campi del form
            document.getElementById('title').value = data.title;
            document.getElementById('content').value = data.content;
            document.getElementById('category').value = data.category;
            
            // Nota: Le immagini (input type="file") non si possono precaricare per sicurezza del browser
        } catch (error) {
            console.error(error);
            alert("Impossibile caricare i dati dell'articolo.");
        }
    }
});

formCreate.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const imageFile = document.getElementById('image').files[0];
  const category = document.getElementById('category').value;

  // Se c'è l'ID, chiamo la funzione di aggiornamento, altrimenti quella di creazione
  if (idArticoloModifica) {
      aggiornaArticolo(idArticoloModifica, title, content, imageFile, category);
  } else {
      inserisciArticolo(title, content, imageFile, category);
  }
});

async function aggiornaArticolo(id, title, content, imageFile, category) {
    const token = localStorage.getItem("authToken");
    if (!token) return alert("Devi essere loggato!");

    const formData = new FormData();
    // TRUCCO PHP: Usiamo POST reale ma aggiungiamo un campo _method=PUT
    // Questo permette a PHP di popolare correttamente $_FILES
    formData.append('_method', 'PUT'); 

    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);
    if (imageFile) {
        formData.append('image', imageFile);
    }

    try {
        const response = await fetch(apiUrl + "posts/" + id, {
            method: "POST", // Fondamentale usare POST per l'upload file
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: formData
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Errore Server ${response.status}: ${errorText}`);
        }

        const result = await response.json();
        console.log("Successo:", result);
        alert("Articolo modificato con successo!");
        window.location.href = 'dashboard.html';

    } catch (error) {
        console.error("Errore modifica:", error);
        alert("Errore durante la modifica: " + error.message);
    }
}

async function inserisciArticolo(title, content, imageFile, category) {
    const token = localStorage.getItem("authToken");
    if (!token) {
        console.error("Utente non autenticato!");
        return;
    }
    // Usiamo FormData per gestire anche il caricamento file
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);
    if (imageFile) {
        formData.append('image', imageFile);
    }

    try {
        const response = await fetch(apiUrl + "posts/", {
            method: "POST",
            headers: {
                // Non impostare 'Content-Type' con FormData, il browser lo fa automaticamente
                "Authorization": `Bearer ${token}`
            },
            body: formData
        });
        if (!response.ok) {
            // Se c'è un errore (es. 404 o 500), leggiamo il testo dell'errore
            const errorText = await response.text();
            throw new Error(`Errore Server ${response.status}: ${errorText}`);
        }
        const result = await response.json();
        alert("Articolo creato con successo!");
        window.location.href = 'dashboard.html';
    } catch (error) {
        console.error("Errore creazione post:", error);
        alert("Errore durante la creazione dell'articolo: " + error.message);
    }
}