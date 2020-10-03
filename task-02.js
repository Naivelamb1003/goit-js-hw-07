const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createListItem = function (ingredient) {
  const listIngredients = document.createElement("li");
  listIngredients.textContent = ingredient;
  return listIngredients;
};

const ingredientsUL = document.querySelector("#ingredients");

ingredients
  .map((ingredient) => createListItem(ingredient))
  .forEach((liIngredient) => ingredientsUL.appendChild(liIngredient));
