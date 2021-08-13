const assert = require('assert');
Feature('Liking Resto');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
Scenario('checking that the list is empty', ({ I }) => {
  I.dontSeeElement('#restoList .restoran-item-detail');
});
Scenario('liking one resto', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('#restoList .restoran-item-detail');
  I.wait(1);
  const firstResto = locate('#restoList .restoran-item-detail a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.wait(1);
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.wait(1);
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('#restoList .restoran-item-detail');
  const likedRestoName = await I.grabTextFrom('#restoList .restoran-item-detail a');
  assert.strictEqual(firstRestoName, likedRestoName);
});
/* Scenario('liking multiple restos', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('#restaurant-catalog .list_item');
  I.wait(1);
  const resto = [];
  for (let i = 1; i <= 2; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    resto.push(await I.grabTextFrom(locate('#restaurant-catalog .list_item_title a').at(i)));
    I.wait(1);
    I.click(locate('#restaurant-catalog .list_item_title a').at(i));
    I.seeElement('#likeButton');
    I.wait(1);
    I.click('#likeButton');
    I.amOnPage('/');
  }
  I.amOnPage('/#/favorite');
  I.seeElement('#restaurant-catalog .list_item');
  const numberOfLikedResto = await I.grabNumberOfVisibleElements('#restaurant-catalog .list_item');
  assert.strictEqual(numberOfLikedResto, resto.length);
}); */