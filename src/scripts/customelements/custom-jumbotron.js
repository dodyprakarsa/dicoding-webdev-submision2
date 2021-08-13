class JumboTron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="jumbotron">
        <picture>
          <source media="(max-width: 500px)" srcset="./public/images/hero-image_4-small.jpg">
            <img tabindex="0" src="./public/images/hero-image_4.jpg" alt="perkedel goreng"></img>
        </picture>
            <p tabindex="0">THE BEST RESTAURANTS IN THE CITY</p>
        </div>`;
  }
}

customElements.define('custom-jumbotron', JumboTron);
