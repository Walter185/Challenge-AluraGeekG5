import { getUsers } from "../services/login-service.js";
import {
  getSessionContext,
  updateSessionContext,
} from "../services/context.js";

let cad = `
<div class="header__container__add">
<div class="logo__container">
  <a href="../index.html"
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
  .getElementById("login__form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Lógica de inicio de sesión
    if (validateEmail(email) && validatePassword(password)) {
      login(email, password);
    } else {
      if (validateEmail(email) && !validatePassword(password)) {
        showError("El password debe contener al menos 5 caracters");
      } else {
        showError(
          "EL mail no contiene un formato correcto . Ej: email@email.com"
        );
      }
    }
  });

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  return password.length >= 5;
}

function login(email, password) {
  getUsers()
    .then((users) => {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        updateSessionContext(true, user);
        showSuccess("Inicio de sesión exitoso");
        window.location.href = "product.html";
      } else {
        showError("Credenciales inválidas");
      }
    })
    .catch((error) => {
      showError("Error al realizar el inicio de sesión");
      console.error(error);
    });
}

export function logout() {
  document.getElementById("logoutBtn").addEventListener("click", function () {
    updateSessionContext(false, "");
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

getSessionContext();
