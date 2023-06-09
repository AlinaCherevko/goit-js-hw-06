const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

buttonEl.addEventListener("click", colorBody);

function colorBody(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
