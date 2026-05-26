# Manuale Web Design

Guida didattica interattiva per il corso **Web Design 2 - Biennio WID** dell'Accademia di Belle Arti di Macerata.

Il progetto e un sito statico (HTML, CSS, JavaScript) con:

- guide complete su HTML, CSS, JavaScript, PHP e area grafica/interfacce
- esempi pratici progressivi
- focus su accessibilita, responsive design, best practices e performance

## Demo online

Dopo l'attivazione di GitHub Pages, il sito sara disponibile su:

`https://<username>.github.io/<nome-repository>/`

## Struttura principale

- `index.html`: homepage del manuale
- `html-guide.html`, `css-guide.html`, `javascript-guide.html`: guide principali
- `jquery-guide.html`, `javascript-api-crud.html`, `web-components-guide.html`: JavaScript e integrazioni
- `react-guide.html`, `nextjs-guide.html`, `gsap-guide.html`: framework e animazioni
- `ux-interface-guide.html`: hub grafica e progettazione interfacce
- `web-components-ui-guide.html`, `design-system-guide.html`, `web-typography-guide.html`: moduli design/UI
- `web-color-contrast-guide.html`, `motion-microinteractions-guide.html`, `web-layout-models-guide.html`: moduli visual e interaction design
- `wireframe-prototype-handoff-guide.html`: workflow progettuale design-dev
- `hosting-guide.html`: hosting locale/remoto e deploy base
- `git-guide.html`: Git e GitHub Pages
- `vue-guide.html`: guida disponibile ma temporaneamente non mostrata in homepage/navbar
- `best-practices.html`: buone pratiche di sviluppo web
- `esempi/`: esercizi ed esempi didattici
- `css/style.css`: stile globale e gestione tema
- `js/navbar.js`, `js/theme-toggle.js`: componenti JS condivisi

## Tecnologie

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5 (CDN)
- Bootstrap Icons (CDN)
- Prism.js (CDN)
- React / Next.js / GSAP (CDN nelle pagine dedicate)
- jQuery (ripasso didattico)
- focus esteso su UX/UI, design system e processi di handoff
- Vue.js disponibile in archivio, temporaneamente sospesa dalla navigazione principale

Nessuna dipendenza npm richiesta.

## Avvio locale

Apri `index.html` nel browser.

Per evitare problemi con alcuni script o policy del browser, e consigliato usare un server locale (es. estensione VS Code Live Server oppure Apache in WAMP).

## Pubblicazione con GitHub Pages

1. Rendi pubblico il repository su GitHub.
2. Vai su **Settings > Pages**.
3. In **Build and deployment** seleziona:
   - **Source**: Deploy from a branch
   - **Branch**: `master` (o `main`)
   - **Folder**: `/ (root)`
4. Salva e attendi la pubblicazione (1-3 minuti).

## Autore

Materiale didattico per il corso Web Design 2 - Biennio WID.

## Licenza

Questo progetto e distribuito con licenza MIT.
Vedi il file `LICENSE`.
