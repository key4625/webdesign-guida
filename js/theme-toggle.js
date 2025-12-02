// Dark Mode Toggle Script for Web Design Guide
// Questo script permette di passare manualmente tra modalità chiara e scura

(function() {
    'use strict';
    
    // Funzione per impostare il tema
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateToggleButton(theme);
    }
    
    // Funzione per ottenere il tema corrente
    function getTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        
        // Se non c'è un tema salvato, usa la preferenza del sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        return 'light';
    }
    
    // Funzione per aggiornare il bottone di toggle
    function updateToggleButton(theme) {
        const toggleBtn = document.getElementById('theme-toggle');
        if (!toggleBtn) return;
        
        const icon = toggleBtn.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'bi bi-sun-fill';
            toggleBtn.setAttribute('aria-label', 'Passa alla modalità chiara');
        } else {
            icon.className = 'bi bi-moon-fill';
            toggleBtn.setAttribute('aria-label', 'Passa alla modalità scura');
        }
    }
    
    // Funzione per cambiare tema
    function toggleTheme() {
        const currentTheme = getTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }
    
    // Inizializza il tema al caricamento della pagina
    document.addEventListener('DOMContentLoaded', function() {
        const theme = getTheme();
        setTheme(theme);
        
        // Aggiungi event listener al bottone di toggle se esiste
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleTheme);
        }
    });
    
    // Ascolta i cambiamenti nella preferenza di sistema
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            // Cambia solo se l'utente non ha una preferenza salvata
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
})();
