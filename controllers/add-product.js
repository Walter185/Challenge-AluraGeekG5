import { productServices } from "../services/product-service.js";


let cad=`
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

cad =`
  <div class="header__container__add">
  <div class="logo__container">
      <a href="/"><img class="logo__img" src="../assets/img/logo1.png" alt="logo" /></a>
      <input class="logo__texto" type="text" placeholder="¿Qué deseas búscar?" />
      <div class="logo__texto__lupa">
          <img src="../assets/img/lupa.png" alt="lupa">
      </div>
  </div>
  <div class="logo__texto__lupa-mobile">
      <img src="../assets/img/lupa.png" alt="lupa">
  </div>
  <div>
    <button type="submit" class="admin__btn">Menú Administrador</button>
  </div>
  </div>
`
document.getElementById("idHeader").innerHTML=cad;



const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const url = document.querySelector("[data-url]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;


  productServices.addProduct(url, categoria, nombre, precio, descripcion)
  .then((response) => {
    window.location.href = "../index.html";
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
});