# Manuale Web Design — Documentazione Progetto

## Panoramica

Sito web educativo interattivo per il corso **Web Design 2 - Biennio WID** dell'Accademia di Belle Arti di Macerata (Prof. Michele Cappannari).  
È una guida didattica completa su HTML, CSS e JavaScript con esempi pratici, esercizi e best practices.  
Non richiede server: è HTML statico con librerie CDN.

---

## Struttura del Progetto

```
Manuale Web Design/
├── index.html                  Homepage con navigazione e card argomenti
├── html-guide.html             Guida completa HTML5
├── css-guide.html              Guida completa CSS3
├── javascript-guide.html       Guida JS base → ES6+ → DOM → eventi → asincrono
├── javascript-api-crud.html    Guida API RESTful e operazioni CRUD
├── web-components-guide.html   Guida Web Components nativi
├── bootstrap-guide.html        Guida Bootstrap 5
├── vue-guide.html              Guida Vue.js
├── react-guide.html            Guida React
├── gsap-guide.html             Guida GSAP (GreenSock Animation)
├── best-practices.html         Accessibilità, SEO, performance, BEM, sicurezza
├── RIEPILOGO_PROGETTO.md       Documentazione dettagliata di tutti i contenuti
├── agents.md                   ← questo file
├── css/
│   └── style.css               Stili custom: variabili, dark mode, componenti
├── js/
│   ├── navbar.js               Generazione dinamica navbar (rileva cartella corrente)
│   └── theme-toggle.js         Toggle dark/light mode con persistenza localStorage
└── esempi/
    ├── index.html              Indice degli esercizi
    ├── prova-1.html            Primo approccio HTML
    ├── form.html               Esempi form HTML
    ├── indice-html.html        Elementi HTML base originali
    ├── indice-stile.html       Esempi CSS originali
    ├── indice-stile.css        Proprietà CSS originali
    ├── stili.html              Selettori CSS originali
    ├── esempio-flex.html/css   Demo Flexbox
    ├── esempio-grid.html/css   Demo CSS Grid
    ├── esempio-js.html         Variabili, tipi di dati, operatori, cicli
    ├── esercizio-js.html       Array, oggetti, cicli for
    ├── esercizio2-funzioni-js.html  Funzioni JS
    ├── esercizio3-dom-js.html  DOM manipulation
    ├── esercizio4-ciclo-oggetti-js.html  Array di oggetti, HTML dinamico
    ├── esercizio5-ripasso-js.html
    ├── esercizio6-dom-oggetti-js.html
    ├── esercizio7-funzioni-eventi-js.html
    ├── esercizio8-scroll-effects.html
    ├── esercizio9-scroll-card.html
    ├── esercizio10-move-keyboard.html
    ├── esercizio11-drag-drop.html
    ├── esercizio13-api-fetch-json.html
    ├── esercizio14-gsap.html
    ├── ins-anagrafica.html
    └── esercizio12/            Sito completo con Web Components e area admin
        ├── index.html          Homepage con carosello e articoli da API
        ├── spiegazione.html    Spiegazione tecnica dell'esercizio
        ├── styles.css
        ├── js/
        │   ├── api-config.js   Configurazione endpoint API
        │   ├── components.js   Definizione Web Components (site-header, site-sidebar)
        │   └── ins-content.js  Inserimento contenuti dinamici
        └── admin/
            ├── index.html      Login area admin
            ├── dashboard.html  Dashboard admin
            ├── create.html     Creazione contenuti
            └── js-admin/
                ├── auth.js     Autenticazione
                ├── admin-check.js  Verifica accesso admin
                └── admin.js    Logica area admin
```

---

## Tecnologie Utilizzate

| Tecnologia | Versione | Uso |
|---|---|---|
| Bootstrap | 5.3.2 | Layout responsive, componenti UI |
| Bootstrap Icons | 1.11.1 | Icone SVG in tutto il sito |
| Prism.js | 1.29.0 | Syntax highlighting negli esempi di codice |
| GSAP | CDN latest | Animazioni nella guida GSAP |
| React + Babel | CDN | Esempi nella guida React |
| Next.js | Guida didattica (concettuale) | Continuita del percorso React e meta-framework |

Tutte le librerie vengono caricate via CDN, non ci sono dipendenze npm.

---

## Architettura e Pattern Principali

### Navbar Dinamica (`js/navbar.js`)
- Ogni pagina ha `<div id="navbar-container"></div>` nel body
- `navbar.js` genera l'intera navbar via JavaScript al caricamento
- Rileva automaticamente se la pagina è dentro `esempi/` e adatta i percorsi relativi (`pathPrefix`)
- La voce "JavaScript" è un dropdown con: Guida JS Base, API & CRUD, Web Components, React, Next.js, GSAP
- Il link attivo viene evidenziato confrontando `window.location.pathname` con il nome file
- React, Next.js e GSAP hanno stili navbar personalizzati (bordo inferiore colorato)

### Dark Mode (`js/theme-toggle.js` + `css/style.css`)
- Al caricamento legge `localStorage('theme')`, se assente usa `prefers-color-scheme`
- Imposta `data-theme="dark"` o `data-theme="light"` su `<html>`
- Bottone flottante in basso a destra (icona luna/sole) per toggle manuale
- Tutti i componenti CSS usano variabili CSS che cambiano con `[data-theme="dark"]`
- Transizione smooth `0.3s ease` su `background-color` e `color`

### Variabili CSS (`css/style.css`)
```css
/* Temi: le variabili cambiano con [data-theme="dark"] */
--bg-color, --text-color, --content-bg, --border-color
--code-bg, --example-bg, --shadow-color

/* Colori brand */
--primary-color: #0d6efd
--success-color: #198754
/* etc. */
```

### Layout delle Guide
Ogni guida (`*-guide.html`) ha struttura identica:
- Navbar (generata da JS)
- Page header con gradiente colorato
- Container con 2 colonne: sidebar sinistra (col-lg-3) + contenuto principale (col-lg-9)
- Sidebar sticky con indice interno dei paragrafi (nav-pills)
- Sezioni di contenuto con classi `.content-box`, `.code-example`, `.example-result`

### Web Components (esercizio12)
- `site-header` e `site-sidebar` sono Custom Elements definiti in `js/components.js`
- Pattern didattico: mostrare come creare componenti riutilizzabili nativi senza framework

---

## Convenzioni di Codice

- **HTML**: `lang="it"`, charset UTF-8, Bootstrap 5 come base, tag semantici HTML5
- **CSS**: approccio mobile-first, BEM per classi custom, variabili CSS per temi
- **JavaScript**: ES6+, `const`/`let` (no `var`), arrow functions, template literals
- **Sicurezza**: `rel="noopener noreferrer"` su link `target="_blank"`, `textContent` preferito a `innerHTML` per input utente
- **Accessibilità**: alt su immagini, label su form, ARIA labels, focus visibile, contrasto adeguato
- **Percorsi**: relativi ovunque, mai assoluti; le pagine in `esempi/` usano `../` per risalire

---

## Pagine Guide — Argomenti Principali

### `html-guide.html`
Struttura base HTML5, tag semantici, titoli, testo, link, immagini, liste, tabelle, form/input (tutti i tipi), multimedia (video, audio, iframe).

### `css-guide.html`
Selettori (tutti i tipi + pseudo-classi + pseudo-elementi + attributo), box model, display/posizionamento, Flexbox completo, CSS Grid, colori, tipografia, immagini (object-fit, filtri), effetti visivi (ombre, gradienti, backdrop-filter), transizioni, trasformazioni, animazioni @keyframes, media queries responsive.

### `javascript-guide.html`
Variabili (var/let/const), tipi primitivi, array (metodi completi), oggetti, operatori, condizionali, cicli, funzioni (dichiarazione/expression/arrow/default params), metodi array (map/filter/reduce/find/some/every), DOM manipulation, eventi (mouse/tastiera/form + Event object + delegation), ES6+ (destructuring, spread, optional chaining, nullish coalescing), programmazione asincrona (callbacks/Promise/async-await/Fetch API), JSON e localStorage.

### `javascript-api-crud.html`
Fetch API dettagliata, operazioni CRUD con REST API, gestione errori HTTP, headers, autenticazione, pattern loading/error state.

### `web-components-guide.html`
Custom Elements, Shadow DOM, HTML Templates, slot, lifecycle callbacks, attributi osservati.

### `bootstrap-guide.html`
Grid system, breakpoint, componenti (navbar, card, modal, alert, badge, accordion, carousel), utilities, form Bootstrap, icone.

### `react-guide.html`
JSX, componenti funzionali, hooks (useState, useEffect, useRef, useContext), props, event handling, rendering condizionale, liste.

### `nextjs-guide.html`
Percorso evolutivo da React a Next.js: setup, app router, data fetching, API routes integrate, deploy.

### `vue-guide.html` (in pausa)
Guida Vue 3 mantenuta nel progetto ma temporaneamente non mostrata in homepage/navbar.

### `gsap-guide.html`
`gsap.to()`, `gsap.from()`, `gsap.fromTo()`, Timeline (`gsap.timeline()`), stagger, ScrollTrigger, easing, plugin.

### `best-practices.html`
HTML semantico, accessibilità WCAG, SEO (meta tags, Open Graph, Twitter Card), performance (lazy loading, defer/async), responsive (mobile-first, unità relative), organizzazione codice, BEM, sicurezza (CSP, validazione input), strumenti (DevTools, Figma, Git, W3C Validator).

---

## Esercizi (`esempi/`)

Gli esercizi seguono una progressione didattica:
1. **HTML base** → form, indici
2. **CSS** → flexbox (`esempio-flex`), grid (`esempio-grid`), stili
3. **JS crescente** → esercizi 1-7 (variabili → DOM → oggetti → eventi)
4. **Effetti avanzati** → scroll effects (8-9), keyboard move (10), drag & drop (11)
5. **API/Fetch** → esercizio 13
6. **GSAP** → esercizio 14
7. **Progetto completo** → esercizio 12 (sito con Web Components + area admin)

---

## Note per lo Sviluppo

- **Aggiungere una nuova guida**: copiare la struttura di una guida esistente (page-header + sidebar + content-box), aggiungere il link in `navbar.js` nell'array `links`, aggiungere la card in `index.html`
- **Aggiungere un esercizio**: creare il file in `esempi/`, aggiungere la voce in `esempi/index.html`
- **Modificare il tema colori**: cambiare le variabili CSS in `:root` e `[data-theme="dark"]` in `css/style.css`
- **Librerie CDN**: Bootstrap 5.3.2, Bootstrap Icons 1.11.1, Prism.js 1.29.0 (prism-tomorrow theme)
- Il file `RIEPILOGO_PROGETTO.md` contiene la documentazione dettagliata di ogni contenuto delle guide
