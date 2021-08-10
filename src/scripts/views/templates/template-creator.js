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
    <div tabindex="0" class="restaurant-overview">
        <h4 tabindex="0"> ${review.name}, <span tabindex="0"> ${review.date}</span></h4>
        <p tabindex="0">${review.review}</p>
      </div>`;
  });

  return `
  <div class="restoran-item-detail">
      <div class="restoran-item-header">
      <br>
        <img tabindex="0" class="restoran-detail-picture" src="${CONFIG.IMG_MED + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
        <div class="restoran-rating">
        <p tabindex="0">Categories : ${restaurantCategories} </p>
        <p>Ratings :<span class="restoran-rating-score">⭐️${restaurant.rating} </span></p>
      </div>
    </div>
      <div class="restoran-info">    
        <p tabindex="0"><b>Address : </b>${restaurant.address}, ${restaurant.city} </p>
        <p tabindex="0"><b>Foods : </b>${restaurantFoods}</p>
        <p tabindex="0"><b>Drinks : </b>${restaurantDrinks}</p>
        <p tabindex="0"><b>Description : </b>${restaurant.description} </p>
      </div>
  </div>
    <b tabindex="0">Top Comments : </b>
        <div class="restaurant-overview">
          <p>${restaurantReviews}</p>
        </div>`;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restoran-item-detail">
    <div class="restoran-item-header">
      <img tabindex="0" class="restoran-detail-picture" src="${CONFIG.IMG_SMALL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
      <div class="restoran-rating">
      <p>${restaurant.city}</p>
        <p>⭐️<span class="restoran-rating-score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restoran-info">
      <h2><a href="${`/#/detail/${restaurant.id}`}"> ${restaurant.name} </a></h2>
      <p tabindex="0"><b>Description : </b>${restaurant.description.substr(0, 200)}..</p>
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
