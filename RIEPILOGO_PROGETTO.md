# Riepilogo Progetto: Guida Web Design HTML, CSS & JavaScript

**Data creazione:** 4 novembre 2025  
**Ultimo aggiornamento:** 24 novembre 2025 - Aggiunta Guida JavaScript completa
**Tipo progetto:** Sito web educativo - Guida completa HTML, CSS e JavaScript  
**Target:** Studenti di web design  

---

## 📋 Panoramica del Progetto

È stato creato un sito web completo e interattivo che funge da guida didattica per HTML, CSS e JavaScript, partendo dagli esempi forniti nella cartella `esempi/` e ampliandoli con contenuti professionali e best practices moderne.

---

## 📁 Struttura File Creati

```
Manuale Web Design/
├── index.html                  ✅ Homepage principale con navigazione
├── html-guide.html             ✅ Guida completa HTML
├── css-guide.html              ✅ Guida completa CSS
├── javascript-guide.html       ✅ Guida completa JavaScript ⭐ NUOVO
├── best-practices.html         ✅ Best practices e contenuti avanzati
├── css/
│   └── style.css              ✅ Stili personalizzati, animazioni e dark mode
├── js/
│   └── theme-toggle.js        ✅ Script per cambio tema dark/light
└── esempi/                     (File originali mantenuti)
    ├── form.html
    ├── indice-html.html
    ├── indice-stile.css
    ├── indice-stile.html
    ├── stili.html
    ├── esempio-js.html          📝 Analizzato per guida JS
    ├── esercizio-js.html        📝 Analizzato per guida JS
    ├── esercizio2-funzioni-js.html 📝 Analizzato per guida JS
    ├── esercizio3-dom-js.html   📝 Analizzato per guida JS
    └── esercizio4-ciclo-oggetti-js.html 📝 Analizzato per guida JS
```

---

## 🎯 Contenuti Implementati

### 1. **index.html** - Pagina Principale
**Caratteristiche:**
- Hero section con gradiente animato
- 4 card feature con icone (HTML Basics, CSS Styling, Responsive Design, Effetti Avanzati)
- 2 card riepilogative per accesso rapido alle guide HTML e CSS
- Navigazione Bootstrap responsive
- Footer informativo
- Design moderno con effetti hover

**Tecnologie utilizzate:**
- Bootstrap 5.3.2 (CDN)
- Bootstrap Icons
- CSS personalizzato

---

### 2. **html-guide.html** - Guida HTML Completa

**Argomenti trattati:**

#### Struttura Base HTML5
- DOCTYPE, html, head, body
- Meta tags essenziali
- Charset UTF-8 e viewport

#### Tag per Titoli
- h1, h2, h3, h4, h5, h6
- Gerarchia e SEO
- Best practice (un solo h1 per pagina)

#### Testo e Formattazione
- Paragrafi (p)
- strong, b (grassetto semantico vs visivo)
- em, i (corsivo semantico vs visivo)
- mark, del, ins, small, sub, sup
- span (elementi inline)
- br (interruzioni di riga)

#### Link (Ancore)
- Link assoluti (esterni)
- Link relativi (interni al sito)
- Link ad ancore (#id)
- Link email (mailto:)
- Link telefono (tel:)
- Attributo target="_blank" con rel="noopener"

#### Immagini
- Tag img con src e alt
- Percorsi relativi e assoluti
- URL esterni
- Attributi width/height
- Immagini responsive (img-fluid)
- Importanza attributo ALT per accessibilità

#### Liste
- Liste non ordinate (ul, li)
- Liste ordinate (ol, li)
- Liste di definizioni (dl, dt, dd)

#### Tabelle
- Struttura completa (table, thead, tbody, tr, th, td)
- Caption per accessibilità
- Colspan e rowspan
- Scope per header
- Esempi con dati realistici

#### Form e Input
- Struttura form (action, method)
- Label e associazione con input
- Tipi di input:
  - text, email, password
  - number, date, time
  - color, file
- Radio button
- Checkbox
- Select/Option (dropdown)
- Textarea
- Form completo di esempio con Bootstrap

#### Tag Semantici HTML5 ⭐ (AGGIUNTO)
- header, nav, main, article, section, aside, footer
- figure, figcaption
- mark, time, details
- Vantaggi per SEO e accessibilità

#### Multimedia ⭐ (AGGIUNTO)
- Video (tag video, controls, source)
- Audio (tag audio, formati multipli)
- iFrame (incorporare contenuti esterni)

**Fonte dati originali:**
- `indice-html.html` - Struttura base, titoli, testo, link, immagini, liste, tabelle
- `form.html` - Tutti i tipi di form e input

---

### 3. **css-guide.html** - Guida CSS Completa

**Argomenti trattati:**

#### Introduzione CSS
- 3 modi per includere CSS (esterno, interno, inline)
- Priorità e cascading

#### Selettori CSS (COMPLETI)
- Universale (*)
- Elemento (p, div)
- Classe (.)
- ID (#)
- Discendente (A B)
- Figlio (A > B)
- Fratello adiacente (A + B)
- Fratelli generali (A ~ B)
- Gruppo (A, B)
- **Pseudo-classi:** :hover, :active, :visited, :focus, :first-child, :last-child, :nth-child(), :not()
- **Pseudo-elementi:** ::before, ::after, ::first-letter, ::first-line, ::selection
- **Selettori di attributo:** [attr], [attr="value"], [attr*="value"], [attr^="value"], [attr$="value"]

#### Box Model
- Content, padding, border, margin
- Visualizzazione grafica del box model
- box-sizing: border-box
- width, height, max-width, min-height
- Padding (tutti i lati, shorthand)
- Border (width, style, color, radius)
- Margin (auto per centrare)

#### Display e Posizionamento
- display: block, inline, inline-block, flex, grid, none
- position: static, relative, absolute, fixed, sticky
- top, right, bottom, left
- z-index
- overflow (auto, hidden, scroll, visible)
- Centratura con position absolute

#### Flexbox ⭐ (DETTAGLIATO)
**Proprietà Container:**
- display: flex
- flex-direction (row, column, reverse)
- flex-wrap (nowrap, wrap)
- justify-content (allineamento asse principale)
- align-items (allineamento asse trasversale)
- align-content (righe multiple)
- gap, row-gap, column-gap

**Proprietà Items:**
- flex-grow, flex-shrink, flex-basis
- flex (shorthand)
- order
- align-self

**Esempi pratici:** Layout 3 colonne, centratura perfetta

#### CSS Grid ⭐ (AGGIUNTO)
- display: grid
- grid-template-columns (fr, repeat, auto-fit, minmax)
- grid-template-rows
- gap
- justify-items, align-items
- justify-content, align-content
- grid-column, grid-row (posizionamento items)
- grid-area
- Esempio pratico: Layout dashboard

#### Colori
- Nomi predefiniti (red, blue, transparent)
- Esadecimale (#FF0000)
- RGB e RGBA
- HSL e HSLA
- color (testo)
- background-color (sfondo)
- opacity

#### Testi e Tipografia
- font-family (con fallback)
- font-size (px, em, rem, %)
- font-weight (normal, bold, 100-900)
- font-style (normal, italic, oblique)
- text-align (left, right, center, justify)
- text-decoration (underline, line-through, none)
- text-transform (uppercase, lowercase, capitalize)
- letter-spacing, word-spacing
- line-height (interlinea)
- text-shadow
- white-space, text-overflow, ellipsis
- **Google Fonts** (come includere e usare)

#### Immagini
- width, height responsive
- object-fit (cover, contain, fill, none, scale-down)
- object-position
- border-radius (angoli arrotondati, cerchio)
- box-shadow
- filter (grayscale, blur, brightness, contrast, sepia, saturate, hue-rotate)
- **Immagini di sfondo:**
  - background-image
  - background-size (cover, contain)
  - background-position
  - background-repeat
  - background-attachment (fixed, scroll)
  - Shorthand background

#### Effetti Visivi
**Ombre:**
- box-shadow (x, y, blur, spread, color, inset)
- text-shadow
- Ombre multiple

**Gradienti:**
- linear-gradient (direzioni, percentuali)
- radial-gradient (cerchio, posizioni)
- conic-gradient

**Backdrop Filter:**
- blur (effetto vetro smerigliato)

**Esempi interattivi:** 3 box con diversi gradienti e ombre

#### Transizioni e Animazioni
**Transizioni:**
- transition (property, duration, timing-function, delay)
- transition-timing-function (ease, linear, ease-in, ease-out, cubic-bezier)
- Transizioni multiple
- Esempi hover

**Trasformazioni:**
- transform: translate, translateX, translateY
- rotate, rotateX, rotateY, rotateZ (3D)
- scale, scaleX, scaleY
- skew, skewX, skewY
- Trasformazioni multiple combinate
- transform-origin

**Animazioni Keyframe:**
- @keyframes (from/to, percentuali)
- animation-name, animation-duration
- animation-timing-function
- animation-delay
- animation-iteration-count (infinite)
- animation-direction (normal, reverse, alternate)
- animation-fill-mode
- animation-play-state
- Shorthand animation

**Esempio interattivo:** Box con animazione hover

#### Media Queries (Responsive)
- Mobile-first approach (min-width)
- Desktop approach (max-width)
- Range (min-width AND max-width)
- Orientamento (portrait, landscape)
- Tipo media (screen, print)
- Retina display
- prefers-color-scheme (dark mode)
- prefers-reduced-motion (accessibilità)
- **Breakpoint comuni** (tabella con tutte le dimensioni standard)
- Best practice: approccio mobile-first

**Fonte dati originali:**
- `indice-stile.css` - Tutti i selettori, proprietà, layout, effetti
- `indice-stile.html` - Esempi pratici di flexbox e posizionamento

---

### 4. **best-practices.html** - Contenuti Avanzati ⭐

**Argomenti aggiunti (non presenti negli esempi originali):**

#### HTML Semantico
- Confronto codice non semantico vs semantico
- Vantaggi (accessibilità, SEO, manutenibilità)
- Tabella tag semantici essenziali con utilizzi

#### Accessibilità (A11y)
- 4 Principi WCAG (Percepibile, Operabile, Comprensibile, Robusto)
- Best practices:
  - Testo alternativo immagini
  - Label per form
  - ARIA attributes
  - Struttura heading gerarchica
  - Link descrittivi
  - Contrasto colori (4.5:1, 3:1)
  - Focus visibile
  - Skip links
  - Lingua della pagina
  - Tabelle accessibili

#### SEO (Search Engine Optimization)
- Meta tags essenziali (title, description, charset, viewport)
- Keywords, author
- **Open Graph** per social media
- **Twitter Card**
- Favicon
- Canonical URL
- Best practices SEO:
  - URL descrittive
  - Struttura heading
  - Contenuto di qualità
  - Link interni
  - Velocità
  - Mobile-friendly
  - HTTPS
  - Sitemap.xml

#### Performance e Ottimizzazione
- Ottimizzazione immagini (picture, lazy loading, srcset)
- Minimizzazione CSS/JS
- Compressione immagini
- Gzip/Brotli
- CDN
- Caricamento risorse (defer, async, preload, preconnect)
- Strumenti analisi (PageSpeed, Lighthouse, WebPageTest, GTmetrix)

#### Responsive Design Best Practices
- Approccio mobile-first
- Unità relative (rem, em, %, vw, vh)
- Immagini responsive

#### Organizzazione Codice
- Struttura progetto (cartelle css, js, images, fonts, assets)
- Organizzazione CSS (reset, variabili, globali, layout, componenti, utilities, media queries)
- Commenti utili (TODO, FIXME)

#### Convenzioni Naming
- Metodologia BEM (Block Element Modifier)
- Esempi pratici BEM
- Altre convenzioni (kebab-case, camelCase, lowercase)

#### Sicurezza
- Validazione input HTML5
- Link esterni sicuri (rel="noopener noreferrer")
- Content Security Policy
- Avvisi importanti

#### Strumenti Utili
8 categorie di strumenti:
1. Editor e IDE (VS Code, Sublime, WebStorm)
2. Design (Figma, Adobe XD, Sketch)
3. Testing (DevTools, BrowserStack)
4. Performance (Lighthouse, PageSpeed)
5. Colori e Font (Coolors, Google Fonts, Adobe Color)
6. Immagini (TinyPNG, Unsplash, SVGOMG)
7. Versioning (Git, GitHub, GitLab)
8. Validazione (W3C HTML/CSS, WAVE)

---

### 5. **css/style.css** - Stili Personalizzati

**Contenuto:**

#### Variabili CSS
- Colori del tema (primary, secondary, success, info, warning, danger)
- **Variabili per dark mode** (bg-color, text-color, content-bg, border-color, ecc.)
- Reset box-sizing

#### Stili Componenti Custom
- Hero section con gradiente
- Page header varianti (primary, success)
- Feature icons circolari
- Hover cards con animazioni
- Sticky sidebar con scrollbar personalizzata

#### Stili Educativi
- Section titles con bordo
- Content box con ombra
- Code examples con sfondo scuro
- Example results con sfondo chiaro e bordo
- **Box Model Demo** (visualizzazione grafica con colori)
- Color boxes per esempi colori
- Gradient boxes
- **Demo Grid** (layout dashboard interattivo)
- **Animated box** (esempio hover con scale e rotate)

#### Navigation
- Nav pills personalizzati con hover
- Active state

#### Responsive
- Media query per mobile (sidebar static, font ridotti)
- Grid responsive

#### Accessibility
- Skip link
- Focus styles evidenti
- Smooth scroll

#### Utilità
- Text gradient
- Shadow custom
- Hover lift effect
- Loading animation (fadeIn)

#### Dark Mode Support
- Media query prefers-color-scheme
- Stili per dark mode
- **Supporto dark mode manuale** con attribute [data-theme="dark"]
- **Toggle button** fisso in basso a destra
- Transizioni smooth tra temi
- Tutti i componenti ottimizzati per dark mode:
  - Content boxes, cards, tables
  - Alert, form, buttons
  - Navigation, sidebar
  - Code examples
  - Links e testi
- Contrasti ottimizzati per leggibilità
- Colori adattati per ridurre affaticamento visivo

#### Print Styles
- Nasconde navbar, sidebar, footer, buttons
- Ottimizza per stampa

---

### 6. **javascript-guide.html** - Guida JavaScript Completa ⭐ NUOVO (24 novembre 2025)

**Argomenti trattati:**

#### Introduzione a JavaScript
- Cos'è JavaScript e a cosa serve
- 3 modi per includere JavaScript (inline, interno, esterno)
- Best practice: JavaScript esterno

#### Variabili
- var (deprecato - scope di funzione)
- let (scope di blocco, riassegnabile)
- const (costante, non riassegnabile)
- Best practice: preferire const, usare let solo quando necessario

#### Tipi di Dati Primitivi
**String (Stringhe):**
- Virgolette singole, doppie, backtick
- Template literals con interpolazione (`${variabile}`)
- Concatenazione

**Number (Numeri):**
- Interi e decimali
- Operazioni matematiche di base
- NaN (Not a Number)

**Boolean:**
- true/false
- Risultati di confronti

**Undefined e Null:**
- Differenza tra undefined e null
- Quando usare null

**Verifica tipo:**
- typeof operator

#### Array
**Creazione e Accesso:**
- Array vuoti e con elementi
- Indici (partono da 0)
- Proprietà length

**Metodi per Modificare Array:**
- push() - aggiunge alla fine
- pop() - rimuove dalla fine
- shift() - rimuove dall'inizio
- unshift() - aggiunge all'inizio
- splice() - rimuove/aggiunge elementi
- Modifica diretta con indice

**Metodi Utili:**
- indexOf() - trova posizione
- includes() - verifica presenza
- Array multidimensionali

#### Oggetti
**Creazione:**
- Object literal syntax
- Coppie chiave-valore

**Accesso Proprietà:**
- Dot notation (oggetto.proprieta)
- Bracket notation (oggetto["proprieta"])

**Modifica:**
- Modificare proprietà esistenti
- Aggiungere nuove proprietà
- Oggetti annidati
- Array di oggetti (molto usato!)

#### Operatori
**Operatori Aritmetici:**
- +, -, *, /, % (modulo), ** (potenza)
- ++, -- (incremento/decremento)

**Operatori di Confronto:**
- == (confronto debole - evitare)
- === (confronto stretto - consigliato)
- !=, !== (diverso)
- >, <, >=, <=

**Operatori Logici:**
- && (AND)
- || (OR)
- ! (NOT)

**Operatore Ternario:**
- condizione ? valoreSeVero : valoreSeFalso
- Alternativa compatta a if-else

#### Condizionali
**if/else:**
- Struttura base
- else if per condizioni multiple
- Blocchi di codice {}

**switch:**
- Confronto con valori multipli
- case, break, default
- Raggruppamento casi

**Controlli Speciali:**
- isNaN() - verifica se non è un numero
- Falsy values (null, undefined, 0, "", false)
- Truthy values

#### Cicli (Loops)
**for:**
- Struttura: inizializzazione; condizione; incremento
- Scorrere array con length
- Esempi pratici

**while:**
- Ripete finché condizione è vera
- Uso con prompt e input

**do...while:**
- Esegue almeno una volta

**for...of (ES6):**
- Scorre array e iterabili
- Sintassi pulita e moderna

**for...in:**
- Scorre proprietà di oggetti

**break e continue:**
- break: esce dal ciclo
- continue: salta iterazione

#### Funzioni
**Dichiarazione Funzione:**
- function nomeFunzione() {}
- Parametri e argomenti
- Funzioni senza parametri

**Return:**
- Restituire valori
- undefined se no return
- Interrompere esecuzione

**Parametri di Default:**
- Valori di fallback (ES6)

**Arrow Functions (ES6):**
- Sintassi concisa: () => {}
- Return implicito per espressioni singole
- Confronto con funzioni tradizionali
- Uso con metodi array

**Function Expression:**
- const nomeFunzione = function() {}

**Hoisting:**
- Differenza function vs arrow/expression

**Metodi Array con Funzioni:**
- forEach() - itera elementi
- map() - trasforma array
- filter() - filtra elementi
- find() - trova elemento
- some() - verifica esistenza
- every() - verifica tutti
- reduce() - riduce a valore singolo

#### DOM Manipulation
**Selezionare Elementi:**
- getElementById() - singolo per ID
- getElementsByClassName() - collezione per classe
- getElementsByTagName() - collezione per tag
- querySelector() - primo con selettore CSS (moderno)
- querySelectorAll() - tutti con selettore CSS (moderno)

**Modificare Contenuto:**
- innerHTML - HTML interno (attenzione XSS)
- textContent - solo testo (sicuro)
- innerText - testo visibile

**Creare Elementi:**
- createElement() - crea elemento
- appendChild() - aggiungi figlio
- Esempio: generare lista dinamicamente

**Modificare Attributi:**
- getAttribute() - leggi attributo
- setAttribute() - scrivi attributo
- Accesso diretto (img.src, img.alt)
- removeAttribute() - rimuovi

**Modificare Stili CSS:**
- element.style.property
- Proprietà CSS camelCase (backgroundColor)
- Modificare singole proprietà

**Gestire Classi CSS:**
- classList.add() - aggiungi classe
- classList.remove() - rimuovi classe
- classList.toggle() - alterna classe
- classList.contains() - verifica classe
- Best practice: preferire classList a style

**Rimuovere Elementi:**
- element.remove() - metodo moderno
- parentNode.removeChild() - metodo vecchio

**Navigare nel DOM:**
- parentElement - genitore
- children - figli
- firstElementChild, lastElementChild
- previousElementSibling, nextElementSibling

**Esempio Pratico:**
- Generare card da array di oggetti
- innerHTML con template literals
- Classi condizionali

#### Eventi
**addEventListener:**
- Sintassi moderna e consigliata
- Callback con funzioni o arrow functions

**Eventi del Mouse:**
- click - click singolo
- dblclick - doppio click
- mouseenter - mouse sopra
- mouseleave - mouse fuori

**Eventi della Tastiera:**
- keydown - tasto premuto
- keyup - tasto rilasciato

**Eventi dei Form:**
- submit - invio form (con preventDefault)
- focus - elemento in focus
- blur - elemento perde focus
- change - valore cambiato
- input - valore in modifica

**Oggetto Event:**
- event.type - tipo evento
- event.target - elemento target
- event.currentTarget - elemento con listener
- event.clientX, clientY - coordinate mouse
- event.button - quale bottone mouse
- event.key, event.code - tasto premuto
- event.ctrlKey, shiftKey - modificatori

**preventDefault():**
- Previene comportamento default
- Uso con form e link

**Event Delegation:**
- Tecnica per elementi dinamici
- Un listener sul genitore
- Verifica target con event.target
- Performance migliore

**Rimuovere Listener:**
- removeEventListener()
- Richiede riferimento funzione

**Esempio Pratico:**
- Contatore interattivo
- Gestione click su bottoni
- Aggiornamento DOM dinamico

#### ES6+ Features Moderne
**Template Literals:**
- Backtick ` invece di virgolette
- Interpolazione con ${}
- Stringhe multilinea
- Espressioni e funzioni inline

**Destructuring:**
- Array destructuring
- Object destructuring
- Saltare elementi
- Rest operator (...)
- Rinominare variabili
- Valori di default

**Spread Operator (...):**
- Espandere array
- Combinare array
- Copiare array
- Passare argomenti
- Espandere oggetti
- Combinare oggetti
- Sovrascrivere proprietà

**Rest Parameters:**
- Numero variabile di argomenti
- Raccoglie argomenti in array
- Combinato con parametri normali

**Default Parameters:**
- Valori di fallback per parametri

**Enhanced Object Literals:**
- Property shorthand
- Method shorthand
- Computed property names

**Optional Chaining (?.) - ES2020:**
- Accesso sicuro a proprietà annidate
- Con array e funzioni
- Evita errori su null/undefined

**Nullish Coalescing (??) - ES2020:**
- Differenza da ||
- Solo per null/undefined
- Preserva 0, "", false

#### Programmazione Asincrona
**Callbacks:**
- setTimeout()
- Callback hell (problema)

**Promises:**
- new Promise(resolve, reject)
- .then() - successo
- .catch() - errore
- .finally() - sempre
- Chainable
- Esempio: funzione attendi

**async/await:**
- Sintassi moderna per Promise
- async function
- await aspetta Promise
- try/catch per errori
- Codice più leggibile

**Fetch API:**
- Richieste HTTP moderne
- GET request base
- response.json()
- Gestione errori

**POST Request:**
- method: "POST"
- headers: Content-Type
- body: JSON.stringify()

**Controllare Risposta:**
- response.ok
- response.status
- Throw error per status non OK

**Promise.all():**
- Eseguire multiple promise in parallelo
- Aspetta tutte le risoluzioni
- Array destructuring risultati

**Promise.race():**
- Restituisce la prima che si risolve

**Esempio Pratico:**
- Todo list con API
- Loading state
- Error handling
- Rendering dinamico

#### JSON
**Cos'è JSON:**
- JavaScript Object Notation
- Formato testuale per dati
- Standard per API

**Struttura JSON:**
- Oggetti, array, stringhe, numeri, boolean, null
- No funzioni, Date, undefined

**JSON.stringify():**
- Converti oggetto JS → JSON string
- Parametro null, 2 per formattazione
- Per inviare dati a server

**JSON.parse():**
- Converti JSON string → oggetto JS
- try/catch per errori parsing
- Per ricevere dati da server

**LocalStorage con JSON:**
- localStorage.setItem() con stringify
- localStorage.getItem() con parse
- localStorage.removeItem()
- localStorage.clear()
- Persistenza dati nel browser

**Esempio Completo:**
- Form salvataggio preferenze
- Salvataggio in localStorage
- Recupero all'avvio
- Popolare form con dati salvati

**Fonte dati originali:**
- `esempio-js.html` - Variabili (var/let/const), tipi di dati (string, number, boolean, array, object), operatori, condizionali (if/else), cicli (for, while), array operations (push, pop, splice)
- `esercizio-js.html` - Esercizi su array, oggetti, cicli for, somme, ricerche in array con break
- `esercizio2-funzioni-js.html` - Dichiarazione funzioni, parametri, return, chiamate
- `esercizio3-dom-js.html` - DOM manipulation (getElementById, innerHTML, createElement, appendChild, style)
- `esercizio4-ciclo-oggetti-js.html` - Array di oggetti, cicli su oggetti, generazione HTML dinamica, classList.add(), operatore ternario

**Contenuti aggiunti oltre gli esempi:**
- ⭐ Template literals e interpolazione
- ⭐ Arrow functions dettagliate
- ⭐ Destructuring (array e oggetti)
- ⭐ Spread operator e rest parameters
- ⭐ Enhanced object literals
- ⭐ Optional chaining e nullish coalescing
- ⭐ Metodi array moderni (map, filter, reduce, find, some, every)
- ⭐ Eventi completi (mouse, tastiera, form)
- ⭐ Event object dettagliato
- ⭐ Event delegation
- ⭐ Promise e async/await
- ⭐ Fetch API (GET e POST)
- ⭐ Promise.all() e Promise.race()
- ⭐ JSON completo (stringify, parse, localStorage)
- ⭐ Best practices JavaScript moderne
- ⭐ Esempi pratici realistici

---

### 7. **js/theme-toggle.js** - Script Dark Mode Toggle

**Funzionalità:**

#### Sistema di Tema
- Rileva preferenza sistema (prefers-color-scheme)
- Salva preferenza utente in localStorage
- Permette override manuale della preferenza sistema
- Sincronizza icona bottone (luna/sole) con tema attivo

#### Toggle Manuale
- Bottone fisso flottante in basso a destra
- Icona animata (luna per light mode, sole per dark mode)
- Click per cambiare tema istantaneamente
- Accessibile via tastiera con ARIA labels

#### Persistenza
- Salva scelta utente in localStorage
- Mantiene tema tra navigazioni pagine
- Ripristina tema all'apertura del sito

#### Compatibilità
- Fallback per browser senza localStorage
- Event listener per cambiamenti preferenza sistema
- Codice modulare e ben commentato

---

## 🎨 Tecnologie e Framework Utilizzati

### Framework e Librerie (via CDN)
1. **Bootstrap 5.3.2**
   - CSS: Layout responsive, componenti UI
   - JS: Navbar collapse, interattività

2. **Bootstrap Icons 1.11.1**
   - Icone vettoriali per tutta l'interfaccia
   - Nuove icone: bi-braces per JavaScript

3. **Prism.js 1.29.0**
   - Syntax highlighting per esempi di codice
   - Tema: prism-tomorrow
   - Linguaggi: HTML (markup), CSS, JavaScript

### CSS Custom
- Gradienti moderni
- Animazioni CSS3
- Flexbox e Grid
- Media queries
- Custom properties (variabili CSS)
- Pseudo-elementi e pseudo-classi
- **Dark mode automatica e manuale**
- **Theme toggle con JavaScript**

### HTML5 Semantico
- Struttura completa con tag semantici
- Meta tags per SEO e social media
- Accessibilità (ARIA, alt, labels)

---

## ✨ Caratteristiche Distintive

### Design
- ✅ **Moderno e professionale** - Gradienti, ombre, animazioni
- ✅ **Completamente responsive** - Mobile, tablet, desktop
- ✅ **Dark Mode completa** - Supporto automatico (prefers-color-scheme) e manuale con toggle
- ✅ **Navigazione intuitiva** - Navbar sticky, sidebar con indice
- ✅ **Esempi interattivi** - Codice + risultato visivo
- ✅ **Hover effects** - Feedback visivo su card e bottoni

### Didattica
- ✅ **Spiegazioni chiare** - Ogni concetto spiegato passo-passo
- ✅ **Esempi pratici** - Codice reale e funzionante
- ✅ **Visualizzazioni** - Box model, grid, flexbox visualizzati
- ✅ **Alert informativi** - Tips, best practices, avvisi evidenziati
- ✅ **Tabelle comparative** - Pro/contro, confronti visivi

### Accessibilità
- ✅ **HTML semantico** - Struttura corretta
- ✅ **Alt text** - Tutte le immagini descritte
- ✅ **Focus visibile** - Navigazione da tastiera
- ✅ **Contrasti adeguati** - Leggibilità garantita
- ✅ **Screen reader friendly** - ARIA labels dove necessario

### Performance
- ✅ **CDN** - Caricamento veloce librerie
- ✅ **CSS ottimizzato** - Codice pulito e commentato
- ✅ **Immagini via CDN** - Esempi da servizi ottimizzati
- ✅ **JavaScript minimo** - Solo Bootstrap bundle e theme toggle
- ✅ **Transizioni CSS** - Animazioni hardware-accelerated

---

## 📊 Confronto con Materiale Originale

### File Originali Analizzati:
1. `indice-html.html` - Elementi HTML base
2. `form.html` - Form e input
3. `indice-stile.css` - Proprietà CSS
4. `indice-stile.html` - Esempi pratici CSS
5. `stili.html` - Selettori CSS

### Contenuti Aggiunti/Ampliati:

#### Da Materiale Originale (Mantenuti e Ampliati):
- ✅ Tutti gli elementi HTML elencati
- ✅ Tutti i tipi di form e input
- ✅ Tutti i selettori CSS
- ✅ Tutte le proprietà CSS (box model, posizionamento, colori, testi, immagini, effetti)
- ✅ Flexbox (ampliato)
- ✅ Animazioni e transizioni (ampliati)
- ✅ Media queries (ampliate)

#### Contenuti Nuovi Aggiunti:
- ⭐ **Tag semantici HTML5** (header, nav, main, article, section, aside, footer)
- ⭐ **Elementi multimedia** (video, audio, iframe)
- ⭐ **CSS Grid** (sistema completo bidimensionale)
- ⭐ **Pseudo-classi avanzate** (:nth-child, :not, :first-child, ecc.)
- ⭐ **Pseudo-elementi** (::before, ::after, ::first-letter, ::selection)
- ⭐ **Selettori attributo avanzati**
- ⭐ **Google Fonts** (integrazione)
- ⭐ **Object-fit per immagini**
- ⭐ **Filtri CSS** (blur, grayscale, ecc.)
- ⭐ **Backdrop-filter**
- ⭐ **Gradienti avanzati** (radial, conic)
- ⭐ **HTML Semantico** (best practices)
- ⭐ **Accessibilità completa** (WCAG, ARIA)
- ⭐ **SEO** (meta tags, Open Graph, Twitter Card)
- ⭐ **Performance** (ottimizzazione, lazy loading)
- ⭐ **Responsive design** (mobile-first, breakpoint)
- ⭐ **Organizzazione codice**
- ⭐ **BEM methodology**
- ⭐ **Sicurezza web**
- ⭐ **Strumenti professionali**
- ⭐ **JavaScript completo** (da base a avanzato) ⬅️ NUOVO 24/11/2025

---

## 🎓 Valore Didattico

### Per gli Studenti:
1. **Riferimento completo** - HTML, CSS e JavaScript in un unico posto
2. **Apprendimento visivo** - Esempi interattivi funzionanti
3. **Approccio pratico** - Codice pronto da copiare e modificare
4. **Standard professionali** - Best practices industry-standard
5. **Preparazione reale** - Strumenti e metodologie usate nel mondo del lavoro
6. **Progressione logica** - Da HTML statico a JavaScript dinamico ⭐ NUOVO

### Per il Docente:
1. **Materiale pronto all'uso** - Nessuna preparazione necessaria
2. **Completo e aggiornato** - Copre curriculum base, intermedio e avanzato
3. **Esempi dimostrativi** - Per lezioni in aula
4. **Esercizi pratici** - Gli studenti possono modificare ed estendere
5. **Scalabile** - Facile aggiungere nuovi contenuti
6. **Curriculum completo** - HTML → CSS → JavaScript in sequenza didattica ⭐ NUOVO

---

## 🚀 Come Utilizzare il Materiale

### Apertura e Navigazione:
1. Aprire `index.html` in un browser moderno
2. Navigare tra le sezioni usando il menu
3. Usare la sidebar per andare direttamente agli argomenti
4. Copiare gli esempi di codice per sperimentare

### Modifiche e Personalizzazione:
- **Colori:** Modificare variabili CSS in `css/style.css`
- **Contenuti:** Aggiungere sezioni ai file HTML
- **Esempi:** Estendere con nuovi casi d'uso

### Utilizzo Offline:
- Tutti i file funzionano offline
- Solo le librerie CDN richiedono connessione internet
- Le immagini negli esempi sono da CDN (sostituibili con locali)

---

## 📝 Note Tecniche

### Browser Supportati:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Requisiti:
- Nessun server richiesto (HTML statico)
- Connessione internet per CDN (Bootstrap, Icons, Prism)
- Browser con supporto HTML5/CSS3

### Compatibilità:
- Responsive: Mobile, Tablet, Desktop
- Accessibile: Screen readers, navigazione tastiera
- Stampabile: Stili ottimizzati per print

---

## 🔄 Possibili Estensioni Future

### Contenuti:
- [ ] Sezione JavaScript base
- [ ] Frameworks CSS (Tailwind, Bulma)
- [ ] Preprocessori CSS (SASS, LESS)
- [ ] Esercizi interattivi con quiz
- [ ] Video tutorial integrati
- [ ] Progetti completi passo-passo

### Funzionalità:
- [ ] Tema dark/light toggle
- [ ] Ricerca integrata
- [ ] Salvataggio preferiti
- [ ] Note personali
- [ ] Condivisione social
- [ ] Export PDF sezioni

### Interattività:
- [ ] Code playground integrato
- [ ] Live preview editor
- [ ] Quiz di autovalutazione
- [ ] Certificati di completamento

---

## 📚 Risorse di Riferimento Utilizzate

### Standard e Specifiche:
- W3C HTML Living Standard
- W3C CSS Specifications
- WCAG 2.1 Guidelines
- MDN Web Docs

### Framework e Librerie:
- Bootstrap Documentation
- Prism.js Documentation
- Bootstrap Icons

### Best Practices:
- Google Web Fundamentals
- A11y Project
- CSS Tricks
- Smashing Magazine

---

## ✅ Checklist Completamento

- [x] Homepage accattivante e funzionale
- [x] Guida HTML completa con tutti gli elementi
- [x] Guida CSS completa con tutte le proprietà
- [x] Guida JavaScript completa (variabili, array, oggetti, DOM, eventi, async, ES6+) ⭐ NUOVO
- [x] Best practices e contenuti avanzati
- [x] CSS personalizzato con animazioni
- [x] Design responsive
- [x] Accessibilità implementata
- [x] Esempi interattivi funzionanti
- [x] Navigazione intuitiva con JavaScript
- [x] Documentazione codice
- [x] Compatibilità cross-browser
- [x] SEO ottimizzato
- [x] Performance ottimizzate
- [x] Dark mode completo

---

## 📞 Supporto e Manutenzione

### File da Mantenere:
- `index.html` - Aggiornare link e descrizioni
- `html-guide.html` - Aggiungere nuovi elementi HTML
- `css-guide.html` - Aggiungere nuove proprietà CSS
- `javascript-guide.html` - Aggiungere nuove feature JavaScript ⭐ NUOVO
- `best-practices.html` - Aggiornare best practices
- `css/style.css` - Migliorare stili e animazioni
- `js/theme-toggle.js` - Eventuali miglioramenti tema

### Backup Consigliato:
- Salvare copia esempi originali
- Versionare con Git
- Testare dopo ogni modifica

---

## 🎯 Obiettivi Raggiunti

✅ **Completezza:** Copre HTML, CSS e JavaScript da base ad avanzato  
✅ **Professionalità:** Design moderno e pulito  
✅ **Didattica:** Esempi chiari e progressivi  
✅ **Accessibilità:** Standard WCAG rispettati  
✅ **Performance:** Caricamento veloce e ottimizzato  
✅ **Responsive:** Funziona su tutti i dispositivi  
✅ **Dark Mode:** Supporto completo automatico e manuale  
✅ **Manutenibilità:** Codice pulito e commentato  
✅ **Estensibilità:** Facile aggiungere nuovi contenuti  
✅ **UX Moderna:** Toggle tema, animazioni, feedback visivi  
✅ **JavaScript Moderno:** ES6+, async/await, Fetch API, DOM manipulation ⭐ NUOVO  
✅ **Curriculum Completo:** Front-end development completo (HTML + CSS + JS) ⭐ NUOVO  

---

## 🌓 Dark Mode - Dettagli Implementazione

### Caratteristiche Dark Mode:

1. **Rilevamento Automatico**
   - Rileva preferenza sistema operativo (prefers-color-scheme)
   - Si attiva automaticamente se l'utente ha dark mode attiva sul sistema
   - Nessuna configurazione richiesta

2. **Toggle Manuale**
   - Bottone flottante fisso in basso a destra
   - Icona luna (🌙) per passare a dark mode
   - Icona sole (☀️) per passare a light mode
   - Animazione smooth al click

3. **Persistenza**
   - Salva preferenza utente in localStorage
   - Mantiene tema scelto tra le pagine
   - Ripristina tema alla prossima visita

4. **Ottimizzazioni Visual**
   - Tutti i colori ottimizzati per ridurre affaticamento visivo
   - Contrasti WCAG-compliant anche in dark mode
   - Gradienti e ombre adattati
   - Codice syntax highlighting mantiene leggibilità

5. **Componenti Supportati**
   - ✅ Background e testi
   - ✅ Cards e content boxes
   - ✅ Tabelle e liste
   - ✅ Form e input
   - ✅ Alert e notifiche
   - ✅ Navigation e sidebar
   - ✅ Footer e header
   - ✅ Bottoni e link
   - ✅ Code blocks
   - ✅ Tutti i componenti Bootstrap

---

**Fine Documento di Riepilogo**  
**Progetto completato il:** 4 novembre 2025  
**Ultimo aggiornamento:** 4 novembre 2025 - Aggiunta Dark Mode completa
**Stato:** ✅ Pronto per l'uso in produzione
