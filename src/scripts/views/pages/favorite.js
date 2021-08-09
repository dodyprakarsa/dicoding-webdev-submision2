import FavRestaurantIdb from '../../data/favrestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
          <div class="content">
              <h1 tabindex="0" class="content__heading"></h1>
              <div id="restoList" class="posts"></div>
          </div>
    `;
  },

  async afterRender() {
    const title = document.querySelector('.content__heading');
    const restaurantsContainer = document.querySelector('#restoList');
    title.innerHTML = '<p>Loading</p>';

    try {
      const restaurants = await FavRestaurantIdb.getAllRestaurants();
      title.innerHTML = 'Favorite Restaurant';

      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      title.innerHTML = '<p>Connection Error</p>';
    }
  },
};

export default Favorite;
