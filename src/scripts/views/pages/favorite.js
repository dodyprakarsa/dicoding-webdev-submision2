import FavRestaurantIdb from '../../data/favrestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render () {
    return `
      <section class="content">
          <div class="latest">
              <h1 tabindex="0" class="latest"></h1>
              <div id="restoList" class="posts"></div>
          </div>
      </section>
    `
  },

  async afterRender () {
    const title = document.querySelector('.latest')
    const restaurantsContainer = document.querySelector('#restoList')
    title.innerHTML = `<p>Loading</p>`

    try {
      const restaurants = await FavRestaurantIdb.getAllRestaurants()
      title.innerHTML = 'Favorite Restaurants'

      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant)
      })

    } catch (error) {
      title.innerHTML = `<p>Connection Error</p>`
    }
  }
}

export default Favorite;