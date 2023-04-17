const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulEl = document.getElementById("ingredients");
console.log(ulEl);

for (const ingredient of ingredients) {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");

  itemEl.textContent = ingredient;

  ulEl.appendChild(itemEl);
}
