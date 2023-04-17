const inputEl = document.getElementById("validation-input");
console.log(inputEl);

inputEl.addEventListener("blur", makeColourBorder);

function makeColourBorder(event) {
  if (
    event.currentTarget.value.trim().length ===
    Number(event.currentTarget.dataset.length)
  ) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
}
