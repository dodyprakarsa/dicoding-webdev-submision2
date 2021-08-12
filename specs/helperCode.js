import FavButtonPresenter from '../src/scripts/utility/fav-button-presenter';

const createLikeButtonPresenterWithMovie = async (restaurant) => {
  await FavButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtons'),
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithMovie };
