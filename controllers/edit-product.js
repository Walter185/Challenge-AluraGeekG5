import { productServices } from "../services/product-service.js";

let cad = `
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

cad = `
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
    <div>
    <button type="submit" class="admin__btn">Menú Administrador</button>
  </div>
    </div>
`;
document.getElementById("idHeader").innerHTML = cad;

const getURL = new URL(window.location);
const id = getURL.searchParams.get("id");
const inputUrl = document.querySelector("[data-url]");
const inputCategoria = document.querySelector("[data-categoria]");
const inputImg = document.querySelector("[data-img]");
const inputNombre = document.querySelector("[data-nombre]");
const inputPrecio = document.querySelector("[data-precio]");
const inputDescripcion = document.querySelector("[data-descripcion]");

productServices.getOneProduct(id).then((datos) => {
  // inputUrl.setAttribute("src", datos.imageUrl);
  inputUrl.value = datos.imageUrl;
  inputCategoria.value = datos.category;
  inputNombre.value = datos.name;
  inputPrecio.value = datos.price;
  inputDescripcion.value = datos.description;
});

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const precioValido = /^\$?[0-9]+(\.[0-9]{2})?$/; // Expresión regular para validar el formato del precio en dólares

  if (!precioValido.test(inputPrecio.value)) {
    alert(
      "Ingrese un precio válido en formato de moneda dólar (por ejemplo, $10.99)."
    );
    return;
  }

  productServices
    .modifyProduct(
      id,
      inputUrl.value,
      inputCategoria.value,
      inputNombre.value,
      inputPrecio.value,
      inputDescripcion.value
    )
    .then(() => {
      window.location.href = "../index.html";
    });
});
