/* eslint-disable no-undef */
import FavRestaurantIdb from '../src/scripts/data/favrestaurant-idb';
import * as HelperCode from './helperCode';

// it for tes
// xit for skip

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtons"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  // tes1
  it('should show the like button when the restaurant has not been liked before', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  // tes2
  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  // tes 3
  it('should be able to like the restaurant', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    FavRestaurantIdb.deleteRestaurant(1);
  });

  // tes 4
  it('should not add a restaurant again when its already liked', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({ id: 1 });
    await FavRestaurantIdb.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    FavRestaurantIdb.deleteRestaurant(1);
  });

  // tes 5
  it('should not add a restaurant when it has no id', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
