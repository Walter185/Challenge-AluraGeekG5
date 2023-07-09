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
`
document.getElementById("idHeader").innerHTML=cad;

cad=`
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
`
document.getElementById("idFooter").innerHTML=cad;

var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

emailInput.addEventListener("input", function() {
    if (isEmailValid(emailInput.value)) {
        emailInput.classList.remove("error");
        emailInput.classList.add("success");
    } else {
        emailInput.classList.remove("success");
    }
});

passwordInput.addEventListener("input", function() {
    if (passwordInput.value.length >= 5) {
        passwordInput.classList.remove("error");
        passwordInput.classList.add("success");
    } else {
        passwordInput.classList.remove("success");
    }
});

document.getElementById("login__form").addEventListener("submit", function(event) {
    event.preventDefault();

    if (!isEmailValid(emailInput.value)) {
        emailInput.classList.add("error");
        passwordInput.classList.remove("success");
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    if (passwordInput.value.length < 5) {
        passwordInput.classList.add("error");
        emailInput.classList.remove("success");
        alert("La contraseña debe tener al menos 5 caracteres.");
        return;
    }

    // Limpio el formulario:
    document.getElementById("login__form").reset();

    // Redirecciono al html de Producto:
    window.location.href="product.html";

    // Quita los estilos de error:
    emailInput.classList.remove("error");
    passwordInput.classList.remove("error");

    // Agrega el estilo de éxito
    emailInput.classList.add("success");
    passwordInput.classList.add("success");
});

function isEmailValid(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
