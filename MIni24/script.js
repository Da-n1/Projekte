const formOpenBtn = document.querySelector("#form-open"),
      home = document.querySelector(".home"),
      formContainer = document.querySelector(".form_container"),
      formCloseBtn = document.querySelector(".form_close"),
      signUpBtn = document.querySelector("#signup"),
      loginBtn = document.querySelector("#login");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

signUpBtn.addEventListener("click", () => {
   formContainer.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    formContainer.classList.remove("active");
});