class DynHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <link rel="stylesheet" href="/styles.css">
          <header>
          <h1>V-Cook</h1>
          <nav>
              <ul>
                  <li><a href="/index.html">Home</a></li>
              </ul>
          </nav>
          </header>
          `;
  }
}

class DynFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <link rel="stylesheet" href="/styles.css">
          <footer>
            <nav>
                <ul>
                    <li><a href="https://github.com/opott" target="_blank">GitHub</a></li>
                    <li><a href="https://www.instagram.com/ompot09/" target="_blank">Instagram</a></li>
                </ul>
            </nav>
              <p>&copy; 2024 Oliver Potter. All rights reserved.</p>
          </footer>
          `;
  }
}

customElements.define("dyn-header", DynHeader);
customElements.define("dyn-footer", DynFooter);
