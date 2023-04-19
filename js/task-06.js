const inputEl = document.getElementById("validation-input");
console.log(inputEl);

inputEl.addEventListener("blur", makeColourBorder);

function makeColourBorder(event) {
  if (
    event.currentTarget.value.trim().length ===
    Number(event.currentTarget.dataset.length)
  ) {
    addValidAndRemoveInvalid();
    // event.currentTarget.classList.add("valid");
    // event.currentTarget.classList.remove("invalid");
  } else {
    addInvalidAndRemoveValid();
    // event.currentTarget.classList.add("invalid");
    // event.currentTarget.classList.remove("valid");
  }
}
function addValidAndRemoveInvalid() {
  event.currentTarget.classList.add("valid");
  event.currentTarget.classList.remove("invalid");
}

function addInvalidAndRemoveValid() {
  event.currentTarget.classList.add("invalid");
  event.currentTarget.classList.remove("valid");
}
