# Brief: nuova sezione "Intelligenza Artificiale" nella guida Web Design 2

## Contesto

Questa è la guida didattica online del corso di **Web Design 2** e **Progettazione di Software Interattivi** (biennio Web e Interaction Design, Accademia di Belle Arti di Macerata, Prof. Michele Cappannari).

- Versione online: https://micheleabamc.netsons.org/wd2/guida/
- Repository: github.com/key4625/webdesign-guida
- Stack: HTML, CSS, JavaScript, Bootstrap. Ogni argomento ha una propria pagina (es. `html-guide.html`, `git-guide.html`, `design-system-guide.html`) e una card nella home (`index.html`). Gli esercizi stanno in `esempi/`.

**Destinatari:** studenti di un'Accademia di Belle Arti, con una formazione da designer. Conoscono HTML, CSS, un po' di JavaScript e PHP, ma non sono informatici. Il tono deve essere chiaro, concreto e ricco di esempi e metafore, senza formule matematiche.

**Obiettivo:** aggiungere tre nuove pagine dedicate all'AI, perfettamente integrate con il resto della guida.

---

## ⚠️ PASSO 0, OBBLIGATORIO PRIMA DI SCRIVERE QUALSIASI CODICE

Prima di creare o modificare file, **esplora le sezioni già esistenti della guida** e rendi le nuove pagine **coerenti** con quelle. In particolare:

1. Leggi `index.html` e almeno 3–4 pagine guida esistenti. Ti consiglio `git-guide.html`, `javascript-guide.html`, `best-practices.html` e `design-system-guide.html`.
2. Individua e annota:
   - la struttura HTML comune: head, navbar, sidebar/indice, hero, sezioni, footer;
   - i file CSS/JS condivisi e le classi Bootstrap e personalizzate ricorrenti;
   - come sono resi i blocchi di codice, i box di nota/attenzione, le tabelle, le card, i tab e gli accordion;
   - il pattern dei link di navigazione tra pagine (precedente/successiva, ritorno alla home);
   - il tono e la lunghezza tipica delle sezioni, l'uso di titoli ed elenchi;
   - come sono strutturati gli esercizi in `esempi/` e come vengono linkati.
3. **Riutilizza** questi pattern e componenti esistenti. Non introdurre nuovi framework, librerie, font o palette. Non creare un CSS separato se gli stili esistenti bastano: se servono pochi stili nuovi, aggiungili seguendo le convenzioni già presenti.
4. **Prima di implementare, presentami un piano sintetico**: i file che creerai e modificherai, e la struttura delle sezioni di ogni pagina. Aspetta la mia conferma.

---

## Le tre pagine da creare

Come nomi file suggerisco i seguenti, ma adeguali alla convenzione esistente se è diversa:

| File | Titolo card in home | Sottotitolo card |
|---|---|---|
| `ai-fondamenti-guide.html` | AI: Storia e Funzionamento | Dalle origini ai Large Language Model: token, addestramento, limiti |
| `ai-uso-guide.html` | Usare bene l'AI | Prompting efficace, uso quotidiano e per il design, verifica, etica |
| `ai-sviluppo-guide.html` | AI per Sviluppatori | Harness, memoria, tool, MCP e agenti di coding |

Le tre pagine vanno collegate tra loro in sequenza e aggiunte alla home con tre card nello stesso formato delle altre.

---

### Pagina 1: AI: Storia e Funzionamento

**1. Cos'è l'Intelligenza Artificiale.** Una definizione semplice. La distinzione tra AI, machine learning, deep learning e AI generativa, resa con un diagramma a cerchi concentrici fatto in HTML/CSS o SVG.

**2. Breve storia, come timeline visiva.** Sfrutta i componenti UI della guida se esiste qualcosa di adatto, altrimenti crea una timeline semplice e responsive. Le tappe:
- 1950: Alan Turing e il "gioco dell'imitazione" (Test di Turing)
- 1956: conferenza di Dartmouth, nasce il termine "Artificial Intelligence"
- anni '60–'80: sistemi esperti e AI simbolica; gli "inverni dell'AI"
- 1997: Deep Blue batte Kasparov
- anni 2000–2010: il machine learning, grazie ai big data e alle GPU
- 2012: AlexNet e la svolta del deep learning nel riconoscimento delle immagini
- 2016: AlphaGo
- 2017: il paper "Attention Is All You Need" introduce l'architettura Transformer
- 2020: GPT-3
- novembre 2022: ChatGPT porta l'AI generativa al grande pubblico
- 2023–2024: diffusione di Claude, Gemini e dei modelli open; modelli multimodali
- fine 2024: Anthropic introduce MCP (Model Context Protocol)
- 2025–2026: modelli che "ragionano", agenti autonomi, AI per il coding

**3. Come funziona un Large Language Model (LLM).** Senza matematica, con esempi e metafore:
- **Token**: il testo viene spezzato in pezzi. Il modello predice il token successivo, un po' come un "completamento automatico" estremamente sofisticato. Se possibile, aggiungi un piccolo esempio interattivo in JavaScript che mostri una frase divisa in token. Basta una simulazione didattica, purché sia dichiarato che lo è.
- **Addestramento**: prima il *pre-training* su enormi quantità di testo, poi il *fine-tuning* e l'allineamento con feedback umano (RLHF), che trasforma un "completatore di testo" in un assistente.
- **Parametri**: che cosa sono, in modo intuitivo.
- **Context window**: quanto testo il modello "vede" contemporaneamente.
- **Temperatura e casualità**: perché la stessa domanda dà risposte diverse.
- **Allucinazioni**: perché il modello può inventare fatti in modo convincente.
- **Multimodalità**: testo, immagini, audio, video.
- **Modelli che ragionano**: il "thinking" prima della risposta.
- Un cenno a **embeddings e RAG**: come un'AI può "consultare" documenti.

**4. Principi fondamentali da ricordare.** Mettili in un box riassuntivo in evidenza:
- il modello **non "sa"**, genera testo plausibile;
- **non accede al web** se non ha uno strumento per farlo;
- **non ricorda** le conversazioni precedenti senza un sistema di memoria;
- ha una **data di cutoff** delle conoscenze.

Chiudi la pagina rimandando alla Pagina 3 per vedere come si superano questi limiti.

---

### Pagina 2: Usare bene l'AI

**1. Prompting efficace.** Per ogni principio mostra un confronto "❌ prompt debole / ✅ prompt efficace", usando lo stile esistente per gli esempi o i blocchi di codice. I principi:
- dare contesto: chi sei, a cosa serve, chi è il destinatario;
- definire chiaramente l'obiettivo e i vincoli;
- dare esempi del risultato desiderato;
- specificare il formato dell'output (lunghezza, tabella, codice, tono);
- iterare e correggere invece di ripartire da zero;
- chiedere al modello di porre domande se mancano informazioni;
- spezzare i compiti complessi in passaggi.

**2. Usi quotidiani:** scrivere e rivedere testi, riassumere documenti, ricerca con fonti, analisi di file e dati, traduzione, brainstorming, studio (spiegazioni, quiz, flashcard).

**3. L'AI nel lavoro del designer**, collegata alle fasi di progettazione del corso:
- analisi preliminare: analisi dei competitor, definizione dei requisiti (MoSCoW);
- brand identity: naming, payoff, tone of voice, vision e mission;
- copywriting e microcopy per interfacce;
- prime bozze di wireframe e architettura delle informazioni;
- strumenti AI integrati nei tool di design e di generazione immagini, citati in modo generico e senza dipendere da versioni specifiche.

**4. Verificare sempre:**
- come riconoscere le allucinazioni;
- controllare le fonti e chiedere riferimenti verificabili;
- la piaggeria (*sycophancy*): il modello tende ad assecondare l'utente;
- l'AI come collaboratore, non come oracolo.

**5. Etica, privacy e normativa:**
- cosa **non** incollare in una chat (dati personali, dati dei clienti, credenziali);
- copyright e opere generate dall'AI;
- bias nei dati di addestramento;
- impatto ambientale;
- un cenno all'**AI Act europeo**, incluso l'obbligo di alfabetizzazione AI;
- **trasparenza**: dichiarare l'uso dell'AI. Come esempio usa l'informativa già presente nelle dispense del corso e nel footer di questa guida.

---

### Pagina 3: AI per Sviluppatori

Usa come filo conduttore la metafora **"il modello è il motore, l'harness è l'auto"**.

**1. Modello vs Harness.**
- **Modello**: la "mente" che genera testo.
- **Harness**: il software attorno al modello, cioè istruzioni di sistema, strumenti, permessi, memoria e il ciclo di lavoro.
- Lo stesso modello si comporta in modo diverso in una chat, in un editor o in un agente da terminale.
- **Il ciclo agentico**: pensa → usa uno strumento → osserva il risultato → ripeti, finché il compito non è completato. Rappresentalo con un diagramma.

**2. La memoria,** su tre livelli:
- **context window**: memoria a breve termine, si "esaurisce" e va gestita;
- **memoria persistente** delle app di chat;
- **file di istruzioni di progetto** (`CLAUDE.md`, `AGENTS.md` e simili): il "manuale del progetto" che l'agente legge a ogni sessione. Includi un esempio realistico di `CLAUDE.md` per un progetto web del corso: stack, convenzioni, comandi, cosa non fare.

**3. I Tool (strumenti):** ricerca web, esecuzione di codice, lettura e scrittura di file, browser, terminale. Spiega che il modello non esegue nulla direttamente: "chiede" all'harness di usare uno strumento e riceve il risultato. Aggiungi un esempio semplificato di tool call in JSON, a scopo didattico.

**4. MCP (Model Context Protocol):**
- che cos'è: uno standard aperto per collegare l'AI a servizi e dati esterni, con la metafora "la porta USB-C dell'AI";
- l'architettura client–server, collegata ai concetti client/server già trattati nel corso;
- esempi d'uso: GitHub, Figma, database, Google Drive, filesystem;
- attenzione alla sicurezza: permessi e fiducia nei server installati;
- un cenno alle **skill**: pacchetti di istruzioni riutilizzabili.

**5. Agenti di coding:**
- panoramica delle categorie: agenti da terminale (es. Claude Code, Codex CLI, Gemini CLI), editor con AI integrata (es. Cursor, GitHub Copilot), generatori di app e prototipi (es. v0, Lovable, Bolt);
- **workflow consigliato**: esplorare il codice → pianificare → implementare a piccoli passi → rivedere il diff → testare → commit. Collegalo alla pagina Git & GitHub della guida;
- **vibe coding e i suoi limiti**: ottimo per prototipare, ma il codice consegnato va **capito e revisionato**. Accessibilità, semantica HTML, sicurezza (SQL injection, validazione input, credenziali nel codice) e manutenibilità. Collegalo alla pagina Best Practices.

**6. Confronto tra gli assistenti: ChatGPT, Gemini, Claude e modelli open.**
- Confronta **filosofie, punti di forza ed ecosistemi** in modo stabile nel tempo, senza basarti su benchmark o numeri di versione. Indicativamente:
  - **ChatGPT** (OpenAI): il più generalista, con molte funzioni consumer, tra cui la generazione di immagini;
  - **Gemini** (Google): integrato nell'ecosistema Google (Workspace, Search, Android), con context window molto ampie;
  - **Claude** (Anthropic): forte nella scrittura e nel coding, orientato agli agenti (Claude Code, MCP).
- Aggiungi un riquadro separato, ben visibile, **"Stato al [mese anno]"** con i modelli di punta attuali di ciascun produttore. **Verifica le informazioni con una ricerca web al momento dell'implementazione**, perché cambiano ogni pochi mesi. Il riquadro deve essere facilmente aggiornabile ogni anno accademico.
- Aggiungi una sezione sui **modelli open-weight** (es. Mistral, che è europeo, Llama, Qwen, DeepSeek) e sull'esecuzione in locale (es. Ollama): vantaggi per privacy e costi, limiti.
- Chiudi con un consiglio pratico: non esiste "il migliore" in assoluto, si sceglie in base al compito.

---

## Esercizi (da aggiungere in `esempi/`, seguendo il formato esistente)

1. **Stesso prompt, tre assistenti**: confrontare le risposte di ChatGPT, Gemini e Claude in una tabella (qualità, tono, accuratezza, formato).
2. **Caccia all'allucinazione**: chiedere fonti su un argomento di nicchia e verificarle una per una.
3. **Da prompt debole a prompt efficace**: riscrivere 3 prompt applicando i principi della Pagina 2.
4. **Scrivere il `CLAUDE.md`** di un progetto del corso.
5. **Code review di codice generato**: generare un componente UI (es. una card o un form) con un agente, poi revisionarlo come se fosse il codice di un collega, con una checklist su accessibilità, semantica, responsive e sicurezza.
6. **Collegare un server MCP** (es. filesystem o Figma) e descrivere cosa cambia nelle capacità dell'assistente.

---

## Modifiche ad altri file

- `index.html`: aggiungere le tre card nella griglia "Argomenti del Corso", nello stesso formato delle esistenti. Valuta se aggiungere nelle "Risorse Esterne Utili" una sezione "AI" con link alla documentazione ufficiale di OpenAI, Google Gemini, Anthropic Claude e modelcontextprotocol.io.
- Footer: aggiornare l'anno del copyright se è fermo al 2025.
- Navigazione e indice: aggiornare ovunque siano elencate le pagine della guida (navbar, sidebar, menu), se esistono.

---

## Requisiti e vincoli

- **Coerenza totale** con le pagine esistenti (vedi Passo 0).
- Lingua: **italiano**, tono didattico e accessibile.
- **Accessibilità**: HTML semantico, gerarchia dei titoli corretta, testi alternativi, contrasto adeguato, navigabilità da tastiera. La guida insegna queste cose, quindi deve rispettarle.
- **Responsive** su mobile.
- Diagrammi in HTML/CSS o SVG inline, senza immagini esterne con licenze incerte.
- Non riportare testi copiati da fonti esterne: scrivi contenuti originali.
- Le informazioni che invecchiano (modelli, versioni, prezzi) vanno **solo** nel riquadro "Stato al…", verificate con una ricerca web.
- Niente nuove dipendenze esterne se non strettamente necessarie.

## Verifica finale

Prima di considerare il lavoro completato:
1. apri ogni pagina nuova e controlla che rispetti layout e stile delle altre, anche su mobile;
2. verifica che tutti i link interni (home ↔ pagine, pagine ↔ pagine, esercizi) funzionino;
3. controlla che l'HTML sia valido e che i titoli siano in ordine gerarchico;
4. fammi un riepilogo dei file creati e modificati, e segnalami le scelte che hai fatto in autonomia.
