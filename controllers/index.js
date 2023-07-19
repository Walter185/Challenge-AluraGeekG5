import { sessionContext, getSessionContext } from "../services/context.js";

let cad = `
<div class="header__container">
<div class="logo__container">
<a href="../index.html"
><img class="logo__img" src="../assets/img/logo1.png" alt="logo"
/></a>
<input
class="logo__texto"
type="text"
placeholder="¿Qué deseas búscar?"
/>
        <img src="assets/img/lupa.png" alt="lupa">
    </div>
</div>
<a href="./pages/login.html" class="login">
        <button class="login__btn" id="btnLogin" type="submit">Login</button>
</a>

<div class="logo__texto__lupa-mobile">
    <img src="assets/img/lupa.png" alt="lupa">
</div>
</div> 

<div class="banner__container">
    <div class="banner__descripcion">
            <h2 class="banner__titulo">Febrero Promocional</h2>
            <p class="banner__texto">Productos seleccionados con 33% de descuento</p>
            <a href="./pages/allconsolas.html"><button class="banner__btn" type="button">Ver Consolas</button></a>
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

function bot() {
  const boton = document.getElementById("btnLogin");
  if (sessionContext.isLoggedIn) {
    boton.textContent = "HOLA";
  }
}
bot();
