class MyNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="sticky top-0 bg-gray-900 shadow-lg z-50">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="flex items-center justify-start space-x-8 py-4">
            <a href="index.html#home" class="flex items-center">
              <div class="w-8 h-8 overflow-hidden bg-gray-900 flex items-center justify-center">
                <img src="public/logo/fr-logo.png" alt="Logo" class="w-full h-full object-contain">
              </div>
            </a>
            <a href="index.html#about" class="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="index.html#projects" class="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="index.html#contact" class="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("my-nav", MyNav);
