import { createUser } from "../services/login-service.js";

let cad = `
<div class="header__container__add">
<div class="logo__container">
  <a href="/"
    ><img class="logo__img" src="../assets/img/logo1.png" alt="logo"
  /></a>
  <input
    class="logo__texto"
    type="text"
    placeholder="¿Qué deseas búscar?"
  />
  <div class="logo__texto__lupa">
    <img src="../assets/img/lupa.png" alt="lupa" />
  </div>
</div>
<div class="logo__texto__lupa-mobile">
  <img src="../assets/img/lupa.png" alt="lupa" />
</div>
</div>
`;
document.getElementById("idHeader").innerHTML = cad;

cad = `
<div class="pie__container">
<div class="pie__items">
  <img class="pie__img" src="../assets/img/logo1.png" alt="logo" />      
  <nav class="pie__nav">
      <ul class="pie__lista">
          <li class="pie__btn"><a class="pie__link" href="">Quienes somos</a></li>
          <li class="pie__btn"><a class="pie__link" href="">Política de Privacidad</a></li>
          <li class="pie__btn"><a class="pie__link" href="">Programa de fidelidad</a></li>
          <li class="pie__btn"><a class="pie__link" href="">Nuestras Tiendas</a></li>
          <li class="pie__btn"><a class="pie__link" href="">Quiero ser franquiciado</a></li>
          <li class="pie__btn"><a class="pie__link" href="">Anuncie aquí</a></li>
      </ul>            
   </nav>
</div>
<form class="contact__form">
  <label class="contact__form__descripcion">Hable con nosotros</label>
  <div class="form__input">
      <div class="form__nombre__float">
          <input class="form__nombre" type="text" placeholder="Nombre"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='Nombre'" id="formNombre" required />
          <label class="label__nombre">Nombre</label>
      </div>
  <textarea class="form__mensaje" placeholder="Escriba su mensaje" id="formMensaje" required></textarea>
  </div>
  <button type="submit" value="Enviar mensaje" class="form__btn" id="formBtn">Enviar Mensaje</button>
  </form>
</div>
<div class="pie__info">
  <p class="pie__nombre">Desarrollado por Walter Liendo <br>  2023 </p>
</div>
`;
document.getElementById("idFooter").innerHTML = cad;

document
  .getElementById("register__form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    // Lógica de registro
    if (
      validateName(name) &&
      validateEmail(email) &&
      validatePassword(password)
    ) {
      register(name, email, password);
    } else {
      if (
        validateName(name) &&
        validateEmail(email) &&
        !validatePassword(password)
      ) {
        showError("El password debe contener al menos 5 caracteres");
      } else {
        if (
          validateName(name) &&
          !validateEmail(email) &&
          validatePassword(password)
        ) {
          showError(
            "EL mail no contiene un formato correcto . Ej: email@email.com"
          );
        } else {
          if (
            !validateName(name) &&
            validateEmail(email) &&
            validatePassword(password)
          ) {
            showError("El campo NOMBRE no puede quedar vacio");
          }
        }
      }
    }
  });

function validateName(name) {
  return name.trim().length > 5;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  return password.length >= 5;
}

function register(name, email, password) {
  const user = { name, email, password };
  createUser(user)
    .then(() => {
      showSuccess("Registro exitoso");
      window.location.href = "login.html";
    })
    .catch((error) => {
      showError("Error al realizar el registro");
      console.error(error);
    });
}

function showError(message) {
  const messageElement = document.getElementById("message");
  messageElement.textContent = message;
  messageElement.style.color = "red";
}

function showSuccess(message) {
  const messageElement = document.getElementById("message");
  messageElement.textContent = message;
  messageElement.style.color = "green";
}
