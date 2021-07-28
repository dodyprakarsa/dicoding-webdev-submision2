class CustomHeader extends HTMLElement {

    connectedCallback() {
        this.render();
  }
  
  
    render() {
        this.innerHTML = `
        <figure>
          <img src="./public/eat_log.jpg" alt="logo">
          <figcaption>Hunger Game</figcaption>
        </figure>
        <span id="hamburger">&#9776;</span>   
        <div id="drawer" class="header">
          <a tabindex="0" href="#/home">Home</a>
          <a tabindex="0" href="#/favorite">Favorite</a>
          <a tabindex="0" href="https://www.linkedin.com/in/dody-prakarsa-27b9601a1/">About Us</a> 
        </div>`;
    }
       
}

customElements.define("custom-header", CustomHeader);