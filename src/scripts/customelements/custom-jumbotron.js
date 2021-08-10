class JumboTron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="jumbotron">
        <img tabindex="0" src="./public/Superfoods.png" alt="perkedel goreng">
            <p tabindex="0">THE BEST RESTAURANTS IN THE CITY</p>
        </div>`;
  }
}

customElements.define('custom-jumbotron', JumboTron);
