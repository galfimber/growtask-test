const sendForm = () => {
  const form = document.querySelector(".form");
  const formCheckbox = document.querySelector(".form__checkbox");
  const formCheckfake = document.querySelector(".form__check");
  const inputs = document.querySelectorAll(".input");

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (validate()) {
      const data = new FormData(form);
      console.log(Array.from(data.entries()));

      await sendData(data).then((data) => {
        if (data) {
          onSuccess();
        } else {
          onError();
        }
      });
    }
  }

  const validate = () => {
    let valid = true;

    inputs.forEach((input) => {
      if (!input.value && input.dataset.req) {
        input.classList.add("input__error");
        valid = false;
      } else {
        input.classList.remove("input__error");
      }
    });
    if (!formCheckbox.checked) {
      formCheckfake.classList.add("form__check--error");
      valid = false;
    } else {
      formCheckfake.classList.remove("form__check--error");
    }
    return valid;
  };

  async function sendData(data) {
    return await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: data,
    }).then((res) => res.json);
  }

  function onSuccess() {
    alert("Форма отправлена!");
    form.reset();
  }

  function onError(error) {
    alert("Ошибка, форма не отправлена");
  }

  form.addEventListener("submit", handleFormSubmit);
};

export default sendForm;
