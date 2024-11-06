class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer id="footer" class="bg-black py-8 w-full">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold mb-6 text-white">Footer</h1>
          <div class="bg-gray-800/50 p-8 rounded-2xl shadow-xl">
            <p class="text-xl text-gray-300">all rights reserved</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("my-footer", MyFooter);
