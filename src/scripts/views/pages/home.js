import RestaurantDB from '../../data/restaurant-db';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render () {
    return `<section class="content">
        <div class="latest">
            <h1 tabindex="0" class="latest-all"></h1>
            <div id="restoList" class="posts"></div>
        </div>
     </section>
    `
  },

  async afterRender() {
    
    const title = document.querySelector('.latest-all')
    const restaurantsContainer = document.querySelector('#restoList')
    title.innerHTML = `<p>Loading</p>`

    try {
      const restaurants = await RestaurantDB.Home()
      title.innerHTML = 'Restaurant List'
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant)
      })
    } catch (error) {
      title.innerHTML = `<p>Connection Error</p>`
    }
  }
}

export default Home;