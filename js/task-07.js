const inputEl = document.getElementById("font-size-control");
const spanTextEl = document.getElementById("text");

inputEl.addEventListener("input", changeText);

function changeText(event) {
  spanTextEl.style.fontSize = `${event.currentTarget.value}px`;
}
