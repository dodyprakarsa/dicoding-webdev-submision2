/* eslint-disable no-undef */
// import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavRestaurantIdb from '../src/scripts/data/favrestaurant-idb';
import * as AbstractionLikeUnlike from './abstractButtonPresenter';

// it for tes
// xit for skip

describe('Liking A Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtons"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  // tes1

  it('should show the like button when the movie has not been liked before', async () => {
    await AbstractionLikeUnlike.createLikeButtonPresenterWithMovie({ id: 1 });
    /* await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    }); */

    expect(document.querySelector('[aria-label="like this movie"]')).toBeTruthy();
  });

  // tes2
  it('should not show the unlike button when the movie has not been liked before', async () => {
    await AbstractionLikeUnlike.createLikeButtonPresenterWithMovie({ id: 1 });
    /* await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    }); */

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
  });

  // tes 3
  it('should be able to like the movie', async () => {
    await AbstractionLikeUnlike.createLikeButtonPresenterWithMovie({ id: 1 });
    /* await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    }); */

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const movie = await AbstractionLikeUnlike.getMovie(1);
    expect(movie).toEqual({ id: 1 });

    FavRestaurantIdb.deleteMovie(1);
  });

  // tes 4
  it('should not add a movie again when its already liked', async () => {
    await AbstractionLikeUnlike.createLikeButtonPresenterWithMovie({ id: 1 });
    /* await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    }); */

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavRestaurantIdb.putMovie({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // tidak ada film yang ganda
    expect(await FavRestaurantIdb.getAllMovies()).toEqual([{ id: 1 }]);
    FavRestaurantIdb.deleteMovie(1);
  });

  // tes 5
  it('should not add a movie when it has no id', async () => {
    await AbstractionLikeUnlike.createLikeButtonPresenterWithMovie({});
    /* await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {},
    }); */

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavRestaurantIdb.getAllMovies()).toEqual([]);
  });
});
