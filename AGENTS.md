# Manuale Web Design — Documentazione Progetto

## Panoramica

Sito web educativo interattivo per il corso **Web Design 2 - Biennio WID** dell'Accademia di Belle Arti di Macerata (Prof. Michele Cappannari).  
È una guida didattica completa su HTML, CSS, JavaScript, PHP, grafica/interfacce e intelligenza artificiale, con esempi pratici, esercizi e best practices.  
Non richiede server: è HTML statico con librerie CDN (le guide PHP sono solo teoria + codice d'esempio, non eseguono PHP).  
Deploy automatico su GitHub Pages tramite `.github/workflows/static.yml` a ogni push su `master`.

> **Fonte di verità per la navigazione**: `js/navbar.js` (array `links`) e le card di `index.html`. Se questo file e il codice divergono, vale il codice — e va aggiornato questo file.

---

## Struttura del Progetto

```
Manuale Web Design/
├── index.html                  Homepage con navigazione e card argomenti
│
│   # HTML / CSS
├── html-guide.html             Guida completa HTML5
├── css-guide.html              Guida completa CSS3
├── css-modern-guide.html       CSS moderno (clamp, :has, container queries, nesting, oklch...)
├── bootstrap-guide.html        Guida Bootstrap 5
├── scss-sass-guide.html        SCSS/SASS e compilatori CSS
├── css-problemi-comuni-guide.html  "Problemi di tutti i giorni": ricette CSS (centrare, footer in fondo, z-index...)
├── css-flexbox-guide.html      Flexbox in dettaglio (poster CSS-Tricks + playground)
├── css-grid-guide.html         Grid in dettaglio (poster CSS-Tricks + playground)
├── css-gradienti-guide.html    Gradienti in dettaglio (+ generatore interattivo)
├── css-media-queries-guide.html  Media queries in dettaglio (+ tabella live matchMedia)
│
│   # JavaScript
├── javascript-guide.html       Guida JS base → ES6+ → DOM → eventi → asincrono
├── jquery-guide.html           Ripasso jQuery (progetti legacy)
├── javascript-api-crud.html    Guida API RESTful e operazioni CRUD
├── web-components-guide.html   Guida Web Components nativi
├── react-guide.html            Guida React
├── nextjs-guide.html           Guida Next.js
├── gsap-guide.html             Guida GSAP (GreenSock Animation)
├── roadmap-guide.html          "E dopo?" — roadmap verso il full-stack
├── vue-guide.html              Guida Vue.js (in pausa, non linkata)
│
│   # Grafica & Interfacce
├── ux-interface-guide.html             Hub UX e progettazione interfaccia
├── web-components-ui-guide.html        Componenti web interattivi
├── design-system-guide.html            Design system
├── web-typography-guide.html           Tipografia per il web
├── web-color-contrast-guide.html       Colore e contrasto
├── motion-microinteractions-guide.html Motion e micro-interazioni
├── wireframe-prototype-handoff-guide.html  Wireframe, prototipi, handoff
├── web-layout-models-guide.html        Modelli di layout web
│
│   # PHP
├── php-guide.html              PHP base (sintassi, form, sessioni, DB, API)
├── php-oop-guide.html          PHP a oggetti
├── php-mvc-guide.html          Architettura MVC in PHP
│
│   # AI (Intelligenza Artificiale)
├── ai-fondamenti-guide.html    AI: storia e funzionamento degli LLM (1 di 3)
├── ai-uso-guide.html           Usare bene l'AI: prompting, design, verifica, etica (2 di 3)
├── ai-sviluppo-guide.html      AI per sviluppatori: harness, memoria, tool, MCP, agenti (3 di 3)
├── brief-sezione-ai.md         Brief originale da cui è nata la sezione AI
│
│   # Altro
├── hosting-guide.html          Hosting locale/remoto e deploy
├── best-practices.html         Accessibilità, SEO, performance, BEM, sicurezza
├── git-guide.html              Git e GitHub Pages
│
├── README.md                   Presentazione pubblica del repo
├── RIEPILOGO_PROGETTO.md       Storico contenuti (fermo a nov 2025, non aggiornato)
├── nuova_pagina.md             Prompt usato per generare roadmap-guide.html
├── AGENTS.md                   ← questo file (importato da CLAUDE.md)
├── CLAUDE.md                   Istruzioni specifiche per Claude Code
├── .github/workflows/static.yml  Deploy GitHub Pages
├── images/
│   ├── css-flexbox-poster.png  Poster Flexbox di CSS-Tricks (usato in css-flexbox-guide.html)
│   └── css-grid-poster.png     Poster Grid di CSS-Tricks (usato in css-grid-guide.html)
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
    ├── esercizio1-bootstrap.html  Layout con Bootstrap
    ├── sito-completo-html/     Mini sito multipagina (index, chi-siamo, servizi, contatti + css/ js/ images/)
    ├── esercizi-ai.html        Sei esercizi (attività, non codice) della sezione AI
    └── esercizio12/            Sito completo con Web Components e area admin
        ├── index.html          Homepage con carosello e articoli da API
        ├── single.html         Pagina singolo articolo
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
- Rileva automaticamente se la pagina è dentro `esempi/` e adatta i percorsi relativi (`pathPrefix = '../'`). Gestisce **un solo livello** di sottocartella; il link `navbar-brand` punta a `index.html` senza prefisso. In `esempi/` solo `index.html` carica navbar.js
- Voci del menu (ordine attuale):
  - **Home**, **HTML**
  - **CSS** (dropdown): Guida CSS Base, CSS Moderno, Bootstrap, SCSS/SASS e Compilatori · intestazione "Approfondimenti": Problemi di tutti i giorni 🛠️, Flexbox in dettaglio, Grid in dettaglio, Gradienti in dettaglio, Media Queries in dettaglio
  - **JavaScript** (dropdown): Guida JS Base, jQuery (ripasso), API & CRUD, Web Components · React, Next.js, GSAP · "E dopo? 🗺️" (roadmap)
  - **Grafica & Interfacce** (dropdown): UX e Progettazione Interfaccia, Componenti Web Interattivi, Design System, Tipografia Web, Colore e Contrasto, Motion e Micro-interazioni, Wireframe/Prototipi/Handoff, Modelli di Layout Web
  - **PHP** (dropdown): Guida PHP Base, PHP OOP, PHP MVC
  - **AI** (dropdown): AI: Storia e Funzionamento, Usare bene l'AI, AI per Sviluppatori · Esercizi AI (`esempi/esercizi-ai.html`)
  - **Altro** (dropdown): Hosting Web (locale/remoto), Best Practices, Guida Git e GitHub Pages
  - **Esercizi** → `esempi/index.html`
- Le voci dei dropdown possono essere link (`{ text, url }`), separatori (`{ separator: true }`) o intestazioni (`{ header: 'Testo' }` → `.dropdown-header`)
- Il link attivo viene evidenziato confrontando `window.location.pathname` con il nome file
- Navbar sempre scura (`navbar-dark bg-dark`); alcune aree hanno un bordo inferiore colorato tramite flag `isXxxPage`:

| Area | Colore bordo |
|---|---|
| React | `var(--react-blue)` |
| Next.js | `#00c2ff` |
| GSAP | `#88ce02` |
| Git | `#f59e0b` |
| jQuery | `#6f42c1` |
| Grafica & Interfacce (tutte le 8 pagine) | `#e83e8c` |
| Hosting | `#0dcaf0` |
| AI (3 pagine + esercizi) | `#14b8a6` |

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
Struttura base HTML5, `<head>` e metadati (description, favicon, Open Graph, defer/async), concetti fondamentali (anatomia elemento, block/inline, attributi globali, entità), titoli, testo (+ citazioni, abbr, address, code/pre/kbd), link, immagini (+ width/height, lazy loading, srcset/sizes, `<picture>`), liste, tabelle, form/input (+ fieldset/legend, validazione nativa, autocomplete, inputmode, datalist; demo interattiva), tag semantici, multimedia (+ sottotitoli `<track>`), elementi interattivi nativi (details/summary, dialog, popover, progress/meter), SVG inline (forme, viewBox, currentColor, accessibilità), accessibilità di base (elemento giusto, aria-label, tabindex, checklist).

### `css-guide.html`
Selettori (tutti i tipi + pseudo-classi + pseudo-elementi + attributo), cascata/specificità/ereditarietà (+ !important, inherit/initial/unset, debug DevTools), unità di misura (px/rem/em/%/vw/dvh/ch/fr, calc), box model (+ content-box vs border-box, reset moderno), display/posizionamento (+ z-index e stacking context), Flexbox completo, CSS Grid (+ grid-template-areas), colori, variabili CSS (custom properties, override per varianti, tema chiaro/scuro, modifica via JS), tipografia (+ @font-face, font variabili), liste (list-style-type/position/image, reset per menu, ::marker, marcatori con ::before, contatori CSS), immagini (object-fit, filtri), effetti visivi (ombre, gradienti, backdrop-filter), transizioni, trasformazioni, animazioni @keyframes, media queries responsive. Avanti → `css-modern-guide.html`.

Le sezioni Flexbox, Grid, Gradienti e Media Queries rimandano ai rispettivi approfondimenti; la pagina ha un `<style>` interno per le demo delle liste.

### `css-problemi-comuni-guide.html`
Ricettario "problema → soluzione" (pagina con `<style>` interno per le demo): come centrare (orizzontale con text-align/margin auto/inline-block, verticale con padding/line-height/flex, entrambi con grid place-items/flex/margin auto/absolute+transform/inset, tabella di scelta; ispirato a CSS-Tricks "Centering in CSS"), sticky footer, immagini (max-width, spazio sotto inline, object-fit), scroll orizzontale su mobile, testo lungo (ellipsis, line-clamp, overflow-wrap), margin collapse, card alte uguali con bottone in fondo + `min-width: 0`, griglia auto-fit, video con aspect-ratio, z-index e stacking context, scroll-margin-top e sticky, nascondere elementi (display/visibility/opacity/.visually-hidden), checklist di debug. Pensata per crescere: nuova ricetta = nuova `<section>` + voce nella sidebar.

### `css-flexbox-guide.html`
Poster `images/css-flexbox-poster.png` (CSS-Tricks), assi principale/trasversale (SVG), proprietà del contenitore con demo visive, playground interattivo (select con `data-prop` → stile del contenitore + codice generato), proprietà degli elementi, valori di `flex` (1, auto, none), margin auto, pattern, errori comuni, giochi (Flexbox Froggy/Defense).

### `css-grid-guide.html`
Poster `images/css-grid-poster.png` (CSS-Tricks), terminologia (linee, tracce, celle, aree; SVG), template columns/rows, `fr`, nomi di linea, auto-fit vs auto-fill, grid-template-areas, posizionamento (span, `1 / -1`), allineamenti items/content/self, playground interattivo, griglia implicita e `dense`, Grid vs Flexbox, pattern (sovrapposizione nella stessa cella, layout a fasce, dashboard), Grid Garden.

### `css-gradienti-guide.html`
Gradiente come immagine, linear (direzioni, angoli), color stop e hard stop, radial, conic (torta, ciambella), repeating e pattern (strisce, scacchiera, quaderno), più livelli e overlay su foto, testo sfumato, bordo sfumato con radius, gradiente animato, mask-image, interpolazione `in oklab`/`in oklch`, generatore interattivo. Ispirata a CSS-Tricks "A Complete Guide to CSS Gradients".

### `css-media-queries-guide.html`
Anatomia, tabella live con `matchMedia()`, tipi di media e CSS di stampa, mobile first e scelta dei breakpoint, operatori logici, sintassi a intervalli (`width >= 768px`), hover/pointer/orientation/resolution, preferenze utente (color-scheme, reduced-motion, contrast, forced-colors), attributo `media` nell'HTML, `matchMedia` in JS, nesting delle media query, alternative (clamp, auto-fit, container queries). Ispirata a CSS-Tricks "A Complete Guide to CSS Media Queries".

### `css-modern-guide.html`
CSS moderno (pagina con `<style>` interno per le demo): @supports e Baseline, clamp/min/max e tipografia fluida, selettori moderni (:has, :is, :where, :focus-visible, ::marker, :user-invalid), nesting nativo vs SASS, container queries (demo ridimensionabile), aspect-ratio, proprietà logiche, subgrid, scroll-behavior/scroll-margin/scroll-snap, oklch/color-mix/accent-color/light-dark, clip-path/mix-blend-mode/mask-image, @layer, novità da seguire (View Transitions, scroll-driven animations, @property, anchor positioning), tabella riepilogo "cosa sostituisce cosa".

### `javascript-guide.html`
Variabili (var/let/const), tipi primitivi, array (metodi completi), oggetti, operatori, condizionali, cicli, funzioni (dichiarazione/expression/arrow/default params), metodi array (map/filter/reduce/find/some/every), DOM manipulation, eventi (mouse/tastiera/form + Event object + delegation), ES6+ (destructuring, spread, optional chaining, nullish coalescing), programmazione asincrona (callbacks/Promise/async-await/Fetch API), JSON e localStorage.

### `javascript-api-crud.html`
Fetch API dettagliata, operazioni CRUD con REST API, gestione errori HTTP, headers, autenticazione, pattern loading/error state.

### `web-components-guide.html`
Custom Elements, Shadow DOM, HTML Templates, slot, lifecycle callbacks, attributi osservati.

### `bootstrap-guide.html`
Grid system, breakpoint, componenti (navbar, card, modal, alert, badge, accordion, carousel), utilities, form Bootstrap, icone.

### `scss-sass-guide.html`
SASS vs SCSS, funzionalità principali (variabili, nesting, mixin, partial), struttura file, compilatori CSS, workflow consigliato, pro e contro.

### `react-guide.html`
JSX, componenti funzionali, hooks (useState, useEffect, useRef, useContext), props, event handling, rendering condizionale, liste.

### `nextjs-guide.html`
Percorso evolutivo da React a Next.js: setup, app router, data fetching, API routes integrate, deploy.

### `jquery-guide.html`
Ripasso jQuery orientato a progetti legacy: selettori, eventi, manipolazione DOM, Ajax base e confronto con `fetch()`.

### `ux-interface-guide.html`
Hub metodologico di grafica/interfacce: percorso, metodo, moduli e checklist progettuale.

### `web-components-ui-guide.html`
Panoramica componenti interattivi (slideshow, accordion, tabs, cards, micro-pattern) e criteri di scelta.

### `design-system-guide.html`
Fondamenti di design system: token, componenti, processi e documentazione.

### `web-typography-guide.html`
Tipografia per il web: gerarchie, scale, leggibilità, pairing font e accessibilità tipografica.

### `web-color-contrast-guide.html`
Palette, semantica del colore, contrasto WCAG e workflow operativo.

### `motion-microinteractions-guide.html`
Animazioni funzionali e micro-interazioni: timing, feedback, pattern e `prefers-reduced-motion`.

### `wireframe-prototype-handoff-guide.html`
Workflow design-dev: wireframe, prototipi, UI kit minimo e handoff tecnico.

### `web-layout-models-guide.html`
Modelli di layout (Z-pattern, sidebar, full-width, footer strutturato) e criteri di scelta.

### `hosting-guide.html`
Introduzione all'hosting locale/remoto, stack base e deploy essenziale.

### `git-guide.html`
Versionamento con Git e pubblicazione con GitHub Pages.

### `vue-guide.html` (in pausa)
Guida Vue 3 mantenuta nel progetto ma temporaneamente non mostrata in homepage/navbar.

### `gsap-guide.html`
`gsap.to()`, `gsap.from()`, `gsap.fromTo()`, Timeline (`gsap.timeline()`), stagger, ScrollTrigger, easing, plugin.

### `roadmap-guide.html`
"E dopo?" — roadmap verso il full-stack: ecosistema JS moderno (TypeScript, Vite, Bun, Tailwind), framework e meta-framework (React, Angular, Next.js, Nuxt, Astro), backend e API (Node, Python, Laravel), CMS headless, dati e infrastruttura (PostgreSQL, MongoDB, Supabase/Firebase, Vercel/Netlify), mindset del developer nell'era AI. Generata dal prompt in `nuova_pagina.md`.

### `php-guide.html`
Introduzione, setup locale, sintassi base, array, form e request, sessioni e cookie, PHP e database, API in PHP, confronto JavaScript vs PHP, pro e contro.

### `php-oop-guide.html`
Classi e oggetti, costruttore, visibilità, ereditarietà, interfacce e trait, metodi statici, confronto con JavaScript, best practice.

### `php-mvc-guide.html`
Cos'è MVC, ruoli Model/View/Controller, flusso della richiesta, struttura cartelle, mini esempio completo, routing base, pro e contro, confronto con JavaScript.

### `ai-fondamenti-guide.html`
Cos'è l'AI (diagramma SVG a cerchi concentrici AI/ML/DL/generativa), timeline storica (1950 → 2026), come funziona un LLM: token (demo JS di tokenizzazione simulata), pre-training/fine-tuning/RLHF, parametri, context window, temperatura (demo JS con barre di probabilità ed estrazione), allucinazioni, multimodalità, modelli che ragionano, embeddings e RAG; box "principi da ricordare".

### `ai-uso-guide.html`
Sette principi di prompting con confronti ❌/✅ (classi `.ai-prompt`), struttura di un prompt, usi quotidiani, AI nelle fasi di progetto del designer (MoSCoW, brand identity, microcopy, wireframe), verifica (allucinazioni, fonti, sycophancy), etica in `<details>` (privacy, copyright, bias, ambiente, AI Act), trasparenza con l'informativa della homepage come esempio.

### `ai-sviluppo-guide.html`
Metafora "il modello è il motore, l'harness è l'auto", ciclo agentico (diagramma SVG), memoria su tre livelli + esempio di `CLAUDE.md`, tool call in JSON, MCP (client-server, sicurezza, skill), categorie di agenti di coding, workflow consigliato, vibe coding e limiti, confronto ChatGPT/Gemini/Claude/open-weight, Ollama.
**Il riquadro `#stato` ("Stato a ottobre 2026") è l'unico punto con nomi di modelli e versioni: va verificato sulle fonti ufficiali e aggiornato a ogni anno accademico** (c'è un commento HTML nel sorgente).

### `best-practices.html`
HTML semantico, accessibilità WCAG, SEO (meta tags, Open Graph, Twitter Card), performance (lazy loading, defer/async), responsive (mobile-first, unità relative), organizzazione codice, BEM, sicurezza (CSP, validazione input), strumenti (DevTools, Figma, Git, W3C Validator).

---

## Esercizi (`esempi/`)

Gli esercizi seguono una progressione didattica:
1. **HTML base** → form, indici
2. **CSS** → flexbox (`esempio-flex`), grid (`esempio-grid`), stili, Bootstrap (`esercizio1-bootstrap`), mini sito multipagina (`sito-completo-html/`)
3. **JS crescente** → `esempio-js`, `esercizio-js`, esercizi 2-7 (variabili → DOM → oggetti → eventi)
4. **Effetti avanzati** → scroll effects (8-9), keyboard move (10), drag & drop (11)
5. **API/Fetch** → esercizio 13
6. **GSAP** → esercizio 14
7. **Progetto completo** → esercizio 12 (sito con Web Components + area admin)
8. **AI** → `esercizi-ai.html`: sei attività guidate (confronto assistenti, allucinazioni, prompting, CLAUDE.md, code review, MCP)

---

## Note per lo Sviluppo

- **Aggiungere una nuova guida**:
  1. copiare la struttura di una guida esistente (page-header + sidebar + content-box)
  2. aggiungere il link in `navbar.js` nell'array `links`, nel dropdown corretto (ed eventualmente il flag `isXxxPage` per il colore del bordo)
  3. aggiungere la card in `index.html`
  4. aggiornare questo file (struttura + sezione "Pagine Guide") e `README.md`
- **Stili della sezione AI**: blocco "SEZIONE AI" in fondo a `css/style.css` (variabili `--ai-*`, `.ai-timeline`, `.ai-keybox`, `.ai-demo`, `.ai-token`, `.ai-bar`, `.ai-prompt`, `.ai-status`, `.ai-diagram`), con varianti per il tema scuro
- **Aggiungere un esercizio**: creare il file in `esempi/`, aggiungere la voce in `esempi/index.html`, aggiornare questo file
- **Modificare il tema colori**: cambiare le variabili CSS in `:root` e `[data-theme="dark"]` in `css/style.css`
- **Librerie CDN**: Bootstrap 5.3.2, Bootstrap Icons 1.11.1, Prism.js 1.29.0 (prism-tomorrow theme)
- **Test**: nessuna build né test automatici; verificare aprendo le pagine via WAMP (`http://localhost/Manuale%20Web%20Design/`) o Live Server, in tema chiaro e scuro e a larghezza mobile
- `RIEPILOGO_PROGETTO.md` è un documento storico (fermo a novembre 2025): non considerarlo aggiornato, fa fede questo file
