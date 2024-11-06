class MyNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="sticky top-0 bg-gray-900 shadow-lg z-50">
        <div class="container mx-auto px-4 py-4">
          <div class="flex justify-start space-x-8">
            <a href="index.html#home" class="flex items-center">
              <div class="w-6 h-6  overflow-hidden bg-gray-900 flex items-center justify-center">
                <img src="public/logo/fr-logo.png" alt="Logo" class="w-6 h-6">
              </div>
            </a>
            <a href="index.html#about" class="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="index.html#projects" class="text-gray-300 hover:text-white transition-colors">Projects</a>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("my-nav", MyNav);
