// Script per generare la Navbar dinamicamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Configurazione dei link del menu
    // Rileva se siamo nella cartella esempi per aggiustare i percorsi
    const isInExamples = window.location.pathname.includes('/esempi/');
    const pathPrefix = isInExamples ? '../' : '';

    const links = [
        { text: 'Home', url: pathPrefix + 'index.html' },
        { text: 'HTML', url: pathPrefix + 'html-guide.html' },
        {
            text: 'CSS',
            id: 'navbarDropdownCSS',
            dropdown: [
                { text: 'Guida CSS Base', url: pathPrefix + 'css-guide.html' },
                { text: 'Bootstrap', url: pathPrefix + 'bootstrap-guide.html' },
                { text: 'SCSS, SASS e Compilatori', url: pathPrefix + 'scss-sass-guide.html' }
            ]
        },
        { 
            text: 'JavaScript', 
            id: 'navbarDropdownJS',
            dropdown: [
                { text: 'Guida JS Base', url: pathPrefix + 'javascript-guide.html' },
                { text: 'jQuery (Ripasso)', url: pathPrefix + 'jquery-guide.html' },
                { text: 'API & CRUD', url: pathPrefix + 'javascript-api-crud.html' },
                { text: 'Web Components', url: pathPrefix + 'web-components-guide.html' },
                { separator: true },
                { text: 'React', url: pathPrefix + 'react-guide.html' },
                { text: 'Next.js', url: pathPrefix + 'nextjs-guide.html' },
                { text: 'GSAP', url: pathPrefix + 'gsap-guide.html' },
                { separator: true },
                { text: 'E dopo? 🗺️', url: pathPrefix + 'roadmap-guide.html' }
            ]
        },
        {
            text: 'Grafica & Interfacce',
            id: 'navbarDropdownUI',
            dropdown: [
                { text: 'UX e Progettazione Interfaccia', url: pathPrefix + 'ux-interface-guide.html' },
                { text: 'Componenti Web Interattivi', url: pathPrefix + 'web-components-ui-guide.html' },
                { text: 'Design System', url: pathPrefix + 'design-system-guide.html' },
                { text: 'Tipografia per il Web', url: pathPrefix + 'web-typography-guide.html' },
                { text: 'Colore e Contrasto', url: pathPrefix + 'web-color-contrast-guide.html' },
                { text: 'Motion e Micro-interazioni', url: pathPrefix + 'motion-microinteractions-guide.html' },
                { text: 'Wireframe, Prototipi e Handoff', url: pathPrefix + 'wireframe-prototype-handoff-guide.html' },
                { text: 'Modelli di Layout Web', url: pathPrefix + 'web-layout-models-guide.html' }
            ]
        },
        {
            text: 'PHP',
            id: 'navbarDropdownPHP',
            dropdown: [
                { text: 'Guida PHP Base', url: pathPrefix + 'php-guide.html' },
                { text: 'PHP OOP (Programmazione a Oggetti)', url: pathPrefix + 'php-oop-guide.html' },
                { text: 'PHP MVC (Architettura)', url: pathPrefix + 'php-mvc-guide.html' }
            ]
        },
        {
            text: 'Altro',
            id: 'navbarDropdownOther',
            dropdown: [
                { text: 'Hosting Web (Locale e Remoto)', url: pathPrefix + 'hosting-guide.html' },
                { text: 'Best Practices', url: pathPrefix + 'best-practices.html' },
                { text: 'Guida Git e GitHub Pages', url: pathPrefix + 'git-guide.html' }
            ]
        },
        { text: 'Esercizi', url: pathPrefix + 'esempi/index.html' },
    ];

    // Ottieni il nome del file corrente
    const path = window.location.pathname;
    const page = path.split("/").pop() || 'index.html'; // Default a index.html se root

    // Configurazione specifica per alcune guide
    const isReactPage = page === 'react-guide.html';
    const isNextPage = page === 'nextjs-guide.html';
    const isGsapPage = page === 'gsap-guide.html';
    const isGitPage = page === 'git-guide.html';
    const isJqueryPage = page === 'jquery-guide.html';
    const isUiPage = page === 'ux-interface-guide.html';
    const isUiComponentsPage = page === 'web-components-ui-guide.html';
    const isDesignSystemPage = page === 'design-system-guide.html';
    const isTypographyPage = page === 'web-typography-guide.html';
    const isColorContrastPage = page === 'web-color-contrast-guide.html';
    const isMotionPage = page === 'motion-microinteractions-guide.html';
    const isWireframePage = page === 'wireframe-prototype-handoff-guide.html';
    const isLayoutModelsPage = page === 'web-layout-models-guide.html';
    const isHostingPage = page === 'hosting-guide.html';
    
    let navbarClass = 'navbar-dark bg-dark';
    let navbarStyle = '';
    let iconClass = '';

    if (isReactPage) {
        navbarClass = 'navbar-dark bg-dark';
        navbarStyle = 'style="border-bottom: 3px solid var(--react-blue);"';
        iconClass = ' text-react';
    } else if (isNextPage) {
        navbarClass = 'navbar-dark bg-dark';
        navbarStyle = 'style="border-bottom: 3px solid #00c2ff;"';
        iconClass = ' text-info';
    } else if (isGsapPage) {
        navbarClass = 'navbar-dark bg-dark';
        navbarStyle = 'style="border-bottom: 3px solid #88ce02;"';
        iconClass = ' text-success';
    } else if (isGitPage) {
        navbarClass = 'navbar-dark bg-dark';
        navbarStyle = 'style="border-bottom: 3px solid #f59e0b;"';
        iconClass = ' text-warning';
    } else if (isJqueryPage) {
        navbarClass = 'navbar-dark bg-dark';
        navbarStyle = 'style="border-bottom: 3px solid #6f42c1;"';
        iconClass = ' text-primary';
    } else if (isUiPage || isUiComponentsPage || isDesignSystemPage || isTypographyPage || isColorContrastPage || isMotionPage || isWireframePage || isLayoutModelsPage) {
        navbarClass = 'navbar-dark bg-dark';
        navbarStyle = 'style="border-bottom: 3px solid #e83e8c;"';
        iconClass = ' text-danger';
    } else if (isHostingPage) {
        navbarClass = 'navbar-dark bg-dark';
        navbarStyle = 'style="border-bottom: 3px solid #0dcaf0;"';
        iconClass = ' text-info';
    }

    // Genera l'HTML dei link
    let navLinksHtml = '';
    links.forEach(link => {
        if (link.dropdown) {
            // Dropdown Menu Logic
            const isActive = link.dropdown.some(item => !item.separator && item.url.endsWith(page));
            const activeClass = isActive ? ' active' : '';

            navLinksHtml += `
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle${activeClass}" href="#" id="${link.id}" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ${link.text}
                </a>
                <ul class="dropdown-menu" aria-labelledby="${link.id}">`;
            
            link.dropdown.forEach(item => {
                if (item.separator) {
                    navLinksHtml += `<li><hr class="dropdown-divider"></li>`;
                } else {
                    const itemActive = item.url.endsWith(page) ? ' active' : '';
                    navLinksHtml += `<li><a class="dropdown-item${itemActive}" href="${item.url}">${item.text}</a></li>`;
                }
            });

            navLinksHtml += `
                </ul>
            </li>`;
        } else {
            // Standard Link Logic
            const isActive = link.url.endsWith(page);
            const activeClass = isActive ? ' active' : '';
            const currentAttr = isActive ? ' aria-current="page"' : '';
            navLinksHtml += `
            <li class="nav-item">
                <a class="nav-link${activeClass}" href="${link.url}"${currentAttr}>${link.text}</a>
            </li>`;
        }
    });

    // Template HTML completo della Navbar
    const navbarHtml = `
    <nav class="navbar navbar-expand-lg ${navbarClass} sticky-top" ${navbarStyle}>
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <i class="bi bi-code-slash${iconClass}"></i> Web Design Guide
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    ${navLinksHtml}
                </ul>
            </div>
        </div>
    </nav>
    `;

    // Inserisci la navbar nel placeholder
    const container = document.getElementById('navbar-container');
    if (container) {
        container.innerHTML = navbarHtml;
    } else {
        console.error('Placeholder #navbar-container non trovato nella pagina.');
    }
});
