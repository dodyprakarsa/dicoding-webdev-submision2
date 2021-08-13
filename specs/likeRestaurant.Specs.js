/* eslint-disable no-undef */
import FavRestaurantIdb from '../src/scripts/data/favrestaurant-idb';
import * as HelperCode from './helperCode';

describe('Like A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtons"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  // menampilkan icon/widget disukai jika restaurant belum favorite
  it('should show the like button when the restaurant has not been liked before', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  // tidak menampilkan icon/widget tidak disukai jika restaurant sudah favorite
  it('should not display the unlike widget when the restaurant has not been like before', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  // restaurant bisa disukai / difavorite
  it('should be able to like the restaurant', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    FavRestaurantIdb.deleteRestaurant(1);
  });

  // restaurant yg sama tidak bisa disukai lagi jika sudah masuk favorite
  it('should not add a restaurant again when its already liked', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({ id: 1 });
    await FavRestaurantIdb.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    FavRestaurantIdb.deleteRestaurant(1);
  });

  // tidak bisa memasukan ke restaurant favorite jika tidak ad id
  it('should not add a restaurant when it has no id', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
