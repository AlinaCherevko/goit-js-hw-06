const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulEl = document.getElementById("ingredients");

const newCreatedList = [];

for (const ingredient of ingredients) {
  const itemEl = document.createElement("li");

  itemEl.textContent = ingredient;
  console.log(itemEl);
  newCreatedList.push(itemEl);
}

ulEl.append(...newCreatedList);
