const itemEl = document.querySelectorAll(".item");
// console.log(itemEl);
console.log("Number of categories:", itemEl.length);
itemEl.forEach((element) => {
  //console.log(element);
  const itemTitleEl = element.firstElementChild.textContent;
  console.log("Category:", itemTitleEl);

  const itemAmount = element.lastElementChild;
  console.log("Elements:", itemAmount.children.length);
});
