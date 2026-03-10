// Appena la pagina carica, controlla se c'è il token
if (!localStorage.getItem('authToken')) {
    // Se NON c'è il token, rispedisci l'utente al login
    window.location.href = 'index.html'; // Assumendo che index.html sia la pagina di login
}

// Funzione di logout (da collegare a un bottone "Esci")
function logout() {
    localStorage.removeItem('authToken');
    window.location.href = 'index.html';
}