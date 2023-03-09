const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {

const listItemEl = document.createElement('li');

listItemEl.classList.add('item');

listItemEl.textContent = ingredient;

console.log(listItemEl);

listEl.append(listItemEl);

})





