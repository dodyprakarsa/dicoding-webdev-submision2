/* eslint-disable max-len */
/* eslint-disable no-undef */
import FavRestaurantIdb from '../src/scripts/data/favrestaurant-idb';
import * as HelperCode from './helperCode';

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

  // menampilkan icon/widget tidak disukai jika restaurant sdh difavorite
  it('should display unlike widget when the restaurant has been liked', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  // tidak menampilkan/icon widget disukai jika restaurant sdh difavorite
  it('should not display like widget when the restaurant has been liked', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  // menghilangkan restaurant favorite dari favorite list
  it('should be able to remove liked restaurant from the list', async () => {
    await HelperCode.createLikeButtonPresenterWithMovie({ id: 1 });
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  /*  xit('should not throw error if the unliked restaurant is not in the list', async () => {
        await HelperCode.createLikeButtonPresenterWithMovie({ id: 1 });
        await FavRestaurantIdb.deleteRestaurant(1);
        document.querySelector('[aria-label="unlike this retaurant"]').dispatchEvent(new Event('click'));
        expect(await FavRestaurantIdb.getAllRestaurants()).toEqual([]);
      }); */
});
