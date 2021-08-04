import UrlParser from '../../routes/url-parser'
import RestaurantDB from '../../data/restaurant-db'
import { createRestaurantDetailTemplate } from '../templates/template-creator'
import FavButtonInitiator from '../../utility/fav-button-initiator'

const Detail = {
  async render () {
    return `
    <section class="content">
          <div class="latest">
              <h1 tabindex="0" class="latest-single"></h1>
              <div id="restoSingle" class="posts-single"></div>
          </div>
      </section>
    `
  },

  async afterRender() {
    
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const singleContainer = document.querySelector('#restoSingle')
    const restoName = document.querySelector('.latest-single')
    restoName.innerHTML = `<p>Loading</p>`

    try {
      const restaurant = await RestaurantDB.Detail(url.id)
      if (restaurant !== null) {
        singleContainer.innerHTML = createRestaurantDetailTemplate(restaurant)
        restoName.innerHTML = restaurant.name
      } else {
        restoName.innerHTML = `<p>Not Found</p>`
      }

      await FavButtonInitiator.init({
        likeButtonContainer: document.querySelector('.favorite'),
        restaurant
      })
    } catch (error) {
      restoName.innerHTML = `<p>Connection Error</p>`
    }
  }
}

export default Detail;
