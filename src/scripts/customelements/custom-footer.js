class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
        <ul>
            <li><a tabindex="0" href="#/home">Home</a></li>
            <li><a tabindex="0" href="#/favorite">Favorite</a></li>
            <li><a tabindex="0" href="https://www.linkedin.com/in/dody-prakarsa-27b9601a1/">About Us</a></li>
        </ul>
        <p>Copyright © 2021 - Hunger Game </p>
    </footer>`;
  }
}

customElements.define('custom-footer', CustomFooter);
