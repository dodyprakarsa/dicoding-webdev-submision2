import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  let restaurantCategories = '';
  let restaurantFoods = '';
  let restaurantDrinks = '';
  let restaurantReviews = '';

  restaurant.categories.forEach((category) => {
    restaurantCategories += category.name;
  });

  restaurant.menus.foods.forEach((food) => {
    restaurantFoods += food.name;
  });

  restaurant.menus.drinks.forEach((drink) => {
    restaurantDrinks += drink.name;
  });

  restaurant.customerReviews.forEach((review) => {
    restaurantReviews += `
    <div tabindex="0" class="movie__overview">
        <h4 tabindex="0"> ${review.name}, <span tabindex="0"> ${review.date}</span></h4>
        <p tabindex="0">${review.review}</p>
      </div>`;
  });

  return `
  <div class="movie-item">
      <div class="movie-item__header">
      <br>
        <img tabindex="0" class="movie-item__header__poster" src="${CONFIG.IMG_MED + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
        <div class="movie-item__header__rating">
        <p tabindex="0">Restaurants : ${restaurantCategories} </p>
        <p>Ratings :<span class="movie-item__header__rating__score">⭐️${restaurant.rating} </span></p>
      </div>
    </div>
      <div class="movie__info">    
        <p tabindex="0"><b>Address : </b>${restaurant.address}, ${restaurant.city} </p>
        <p tabindex="0"><b>Foods : </b>${restaurantFoods}</p>
        <p tabindex="0"><b>Drinks : </b>${restaurantDrinks}</p>
        <p tabindex="0"><b>Description : </b>${restaurant.description} </p>
      </div>
  </div>
    <btabindex="0">Top Comments : </b>
        <div class="movie__overview">
          <p>${restaurantReviews}</p>
        </div>`;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img tabindex="0" class="movie-item__header__poster" src="${CONFIG.IMG_SMALL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="movie__info">
      <h2><a href="${`/#/detail/${restaurant.id}`}"> ${restaurant.name} </a></h2>
      <h3>${restaurant.city}</h3>
      <p tabindex="0" class="post-item-description"><b>Description : </b>${restaurant.description.substr(0, 200)}..</p>
    </div>
  </div>`;

const createLikeButton = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButton = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate, createLikeButton, createLikedButton,
};
