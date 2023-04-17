const buttonDecrEl = document.querySelector('button[data-action="decrement"]');
// console.log(buttonDecrEl);

const buttonIncrEl = document.querySelector('button[data-action="increment"]');
// console.log(buttonIncrEl);

let spanEl = document.getElementById("value");
let counterValue = 0;

buttonDecrEl.addEventListener("click", isDecreasing);
buttonIncrEl.addEventListener("click", isIncreasing);

function isDecreasing() {
  counterValue -= 1;
  spanEl.textContent = counterValue;
}

function isIncreasing() {
  counterValue += 1;
  spanEl.textContent = counterValue;
}
