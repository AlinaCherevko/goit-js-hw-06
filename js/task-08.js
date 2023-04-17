const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", sendForm);

function sendForm(event) {
  // скасовуємо перезавантаження при відправлені форми
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formEl.email.value;
  const password = formEl.password.value;

  if (mail.trim() === "" || password.trim() === "") {
    alert("Увага! Всі поля повинні бути заповнені");
  } else {
    const formData = {
      mail,
      password,
    };
    console.log(formData);

    event.currentTarget.reset();
  }
}
