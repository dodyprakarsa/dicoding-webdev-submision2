import UrlParser from '../../routes/url-parser';
import RestaurantDB from '../../data/restaurant-db';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavButtonPresenter from '../../utility/fav-button-presenter';

const Detail = {
  async render() {
    return `
          <div class="content">
              <h1 tabindex="0" class="content__heading"></h1>
              <div id="restoSingle" class="restoran-detail"></div>
              <div id="likeButtons"></div>

          </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const singleContainer = document.querySelector('#restoSingle');
    const restoName = document.querySelector('.content__heading');
    restoName.innerHTML = '<p>Loading</p>';

    try {
      const restaurant = await RestaurantDB.Detail(url.id);
      if (restaurant !== null) {
        singleContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
        restoName.innerHTML = restaurant.name;
      } else {
        restoName.innerHTML = '<p>Not Found</p>';
      }

      await FavButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtons'),
        restaurant,
      });
    } catch (error) {
      restoName.innerHTML = '<p>Connection Error</p>';
    }
  },
};

export default Detail;
