class HeaderSito extends HTMLElement {
    // Il metodo connectedCallback viene chiamato quando l'elemento viene aggiunto alla pagina
    connectedCallback() {
        this.innerHTML = `<header>
    <div class="container">
      <div class="headerbar">
        <div class="logo-desk text-center d-none d-md-block">
          <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="orange" />
            <text x="50%" y="55%" text-anchor="middle" fill="white" font-size="20px" font-family="Arial" font-weight="bold">LOGO</text>
          </svg>
        </div>
      </div>
      <!-- Menu -->
      <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand d-md-none" href="#"><svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="orange" />
              <text x="50%" y="55%" text-anchor="middle" fill="white" font-size="20px" font-family="Arial" font-weight="bold">LOGO</text>
            </svg></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav text-uppercase fs-5">
              <li class="nav-item"><a class="nav-link active" aria-current="page" href="index.html">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="spiegazione.html">Spiegazione</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>`;
    }
}

class SidebarSito extends HTMLElement {
    // Il metodo connectedCallback viene chiamato quando l'elemento viene aggiunto alla pagina
    connectedCallback() {
        this.innerHTML = `<div class="sidebar-content my-4">
          <div class="mb-3">
            <img src="https://placehold.co/300x250/orange/white?text=Banner+1" class="img-fluid" alt="Banner promozionale 1">
          </div>
          <div class="mb-3">
            <img src="https://placehold.co/300x250/blue/white?text=Banner+2" class="img-fluid" alt="Banner promozionale 2">
          </div>
          <div class="mb-3">
            <img src="https://placehold.co/300x600/green/white?text=Banner+lungo" class="img-fluid" alt="Banner promozionale lungo">
          </div>
        </div>`;
    }
}

class FooterSito extends HTMLElement {
    // Il metodo connectedCallback viene chiamato quando l'elemento viene aggiunto alla pagina
    connectedCallback() {
        this.innerHTML = `<footer class="pt-5 pb-2">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4">
          
          <svg width="150" height="150" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="orange" />
              <text x="50%" y="55%" text-anchor="middle" fill="white" font-size="20px" font-family="Arial" font-weight="bold">LOGO</text>
            </svg>
        </div>
        <div class="col-12 col-md-4">
          <h3>DOVE SIAMO</h3>
        <address>
              Via Roma, 123<br>
              00100 Roma (RM)<br>
              Italia
              </address>
        </div>
        <div class="col-12 col-md-4">
          <h3>MENU</h3>
          <ul class="list-unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">Chi siamo</a></li>
            <li><a href="#">Prodotti</a></li>
          </ul>
        </div>
      </div>
      <p class="text-center mt-5">Copyright &copy; 2024 - Tutti i diritti riservati</p>
    </div>
  </footer>`;
    }
}

class HeaderBackend extends HTMLElement {
    // Il metodo connectedCallback viene chiamato quando l'elemento viene aggiunto alla pagina
    connectedCallback() {
        this.innerHTML = `<header>
    <div class="container">
      <div class="headerbar">
        <div class="logo-desk text-center d-none d-md-block">
          <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="orange" />
            <text x="50%" y="55%" text-anchor="middle" fill="white" font-size="20px" font-family="Arial" font-weight="bold">LOGO</text>
          </svg>
        </div>
      </div>
      <!-- Menu -->
      <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand d-md-none" href="#"><svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="orange" />
              <text x="50%" y="55%" text-anchor="middle" fill="white" font-size="20px" font-family="Arial" font-weight="bold">LOGO</text>
            </svg></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav text-uppercase fs-5">
              <li class="nav-item"><a class="nav-link active" aria-current="page" href="../index.html">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="../spiegazione.html">Spiegazione</a></li>
           </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>`;
    }
}
// 2. Registrazione del componente (il nome deve contenere un trattino "-")
customElements.define('site-header', HeaderSito);
customElements.define('site-sidebar', SidebarSito);
customElements.define('site-footer', FooterSito);
customElements.define('header-backend', HeaderBackend);