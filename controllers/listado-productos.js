import { productServices } from "../services/product-service.js";

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

/*********************/

const getProducts = (name, price, imageUrl, id) => {
  const card = document.createElement("div");

  const contenido = `
    <div class="producto">
        <img class="producto__img" src="${imageUrl}" alt="img">
        <h1 class="producto__name"> ${name} </h1>
        <p class="producto__price">${price}</p>
    </div>
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
};

const productos = document.querySelector("[data-todosProductos]");

// productos.addEventListener("click", async (evento) => {
//   let deleteButton = evento.target.className === "deleteImage";
//   if (deleteButton) {
//     const producto = evento.target.closest("[data-id]");
//     let id = producto.dataset.id;
//     productServices
//       .deleteProduct(id)
//       .then((res) => {
//         producto.remove();
//         console.log(res);
//       })
//       .catch((err) => console.log(err));
//   }
// });

const render = async () => {
  try {
    const listaProductos = await productServices.allProducts();

    listaProductos.forEach((producto) => {
      productos.appendChild(
        getProducts(
          producto.name,
          producto.price,
          producto.imageUrl,
          producto.id
        )
      );
    });
  } catch (err) {
    console.log(err);
  }
};

render();
