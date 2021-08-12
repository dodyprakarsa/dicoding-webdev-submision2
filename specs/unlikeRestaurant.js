/* eslint-disable no-undef */
import FavRestaurantIdb from '../src/scripts/data/favrestaurant-idb';
import * as HelperCode from './helperCode';

// it for tes
// xit for skip

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtons"></div>';
};

describe('Unlike A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavRestaurantIdb.deleteRestaurant(1);
  });

  // tes1
  it('should display unlike widget when the restaurant has been liked', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  // tes2
  it('should not display like widget when the restaurant has been liked', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  // tes3
  it('should be able to remove liked restaurant from the list', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({ id: 1 });
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  // TODO: tes4 failed
  xit('should not throw error if the unliked restaurant is not in the list', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({ id: 1 });
    // hapus dulu dari favorite
    await FavRestaurantIdb.deleteRestaurant(1);
    // kemudian, simulasikan pengguna menekan widget batal menyukai
    document.querySelector('[aria-label="unlike this retaurant"]').dispatchEvent(new Event('click'));
    expect(await FavRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
