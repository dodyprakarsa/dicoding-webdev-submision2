import CONFIG from '../../globals/api-endpoint';

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
    <div class="post-item">
      <div tabindex="0" class="post-item-content">
        <div>
          <h3 tabindex="0"> ${review.name} <span tabindex="0"> ${review.date} </span></h3>
          <p tabindex="0">${review.review}</p>
        </div>
      </div>
    </div>`;
  });

  return `
  <div class="header-img">
      <img tabindex="0" src="${CONFIG.IMG_MED + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
      <div class="favorite"></div>
      <div class="post-item-title-rating-single">
          <p class="post-item-rating">
            <span> ${restaurant.rating} </span>
          </p>
      </div>
  </div>
  <div class="posts-single-content">
    <article tabindex="0" class="post-item">
        <div class="post-item-content">
            <p class="post-item-description">
                <span tabindex="0"> ${restaurantCategories} </span>
                <br>
                <span tabindex="0"> ${restaurant.address}, ${restaurant.city} </span>
                <br>
                <b tabindex="0">Description : </b>
                <br>
                <span tabindex="0"> ${restaurant.description} </span>
            </p>
        </div>
    </article>
    <div class="posts-menu">
        <article class="post-item">
            <div class="post-item-content">
                <div class="post-item-content-title">
                    <h2 tabindex="0">Foods</h2>
                </div>
                <p tabindex="0" class="post-item-description">
                    ${restaurantFoods}
                </p>
            </div>
        </article>
        <article class="post-item">
            <div class="post-item-content">
                <div class="post-item-content-title">
                    <h2 tabindex="0">Drinks</h2>
                </div>
                <p tabindex="0" class="post-item-description">
                    ${restaurantDrinks}
                </p>
            </div>
        </article>
    </div>
  </div>
  <div class="posts-review">
      <div class="post-user-review">
          ${restaurantReviews}
      </div>
  </div>
  `;
};

const createRestaurantItemTemplate = (restaurant) => `
    <article class="post-item" tabindex="0">
        <div class="post-img-card">
            <img tabindex="0" class="post-item-thumbnail" src="${CONFIG.IMG_SMALL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
            <div class="post-location">
                <h2>${restaurant.city}</h2>
            </div>
        </div>
        <div class="post-item-content">
            <div class="post-item-title-rating">
                <h3 class="post-item-title">
                  <a href="${`/#/detail/${restaurant.id}`}"> ${restaurant.name} </a>
                </h3>
                <p class="post-item-rating">
                  <span> ${restaurant.rating} </span>
                </p>
            </div>
            <p tabindex="0" class="post-item-description">${restaurant.description.substr(0, 200)}..</p>
        </div>
    </article>
  `;

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
