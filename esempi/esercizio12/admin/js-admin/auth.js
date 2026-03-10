//Prendo il form di login e aggiungo un event listener per intercettare l'evento di submit
let loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    //Prendo i valori inseriti nei campi email e password
    let emailValue = document.getElementById('email').value;
    let passwordValue = document.getElementById('password').value;
    //Faccio una chiamata all'api che ha indirizzo salvato nella variabile apiUrl 
    fetch(apiUrl + 'login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailValue, password: passwordValue })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Login fallito');
        }
    }) //Converto la risposta in formato JSON
    .then(data => {
        // 1. SALVATAGGIO TOKEN Salviamo il token nella memoria locale del browser
        localStorage.setItem('authToken', data.token);
        // 2. REDIRECT Se il login va a buon fine, portiamo l'utente alla dashboard
        window.location.href = 'dashboard.html'; 
    }) //Stampo il token ricevuto dalla risposta
    .catch(error => {
        console.error('Errore:', error);
        alert("Login fallito! Controlla email e password.");
    }) //Gestisco eventuali errori nella chiamata
});