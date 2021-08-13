const assert = require('assert');
Feature('Unliking Resto');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty liked menu restaurant', ({ I }) => {
  I.dontSeeElement('#restaurants', '.restaurant-item');
});
Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item');
  I.amOnPage('/');
  I.seeElement('.restaurant__title a');
  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantsTitles = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const unlikedRestaurantsTitles = await I.grabTextFrom('.restaurant__title a');
  assert.strictEqual(firstRestaurantsTitles, unlikedRestaurantsTitles);
  I.seeElement('.restaurant__title a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item');
 
  //kode assert disini dihapus
});