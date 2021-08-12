import FavButtonInitiator from '../src/scripts/utility/fav-button-initiator';

const createLikeButtonPresenterWithMovie = async (movie) => {
  await FavButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtons'),
    movie,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithMovie };
