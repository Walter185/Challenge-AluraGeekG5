import { productServices } from "../services/product-service.js";

const nuevoProducto = (name, price, imageUrl, id) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="producto">
            <img src="${imageUrl}" alt="img">
            <h1 class="product-name"> ${name} </h1>
            <p class="precio">${(price)}</p>
            <a class="ver-producto" href="../produto.html?id=${id}">Ver Producto</a>
        </div>   
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};

const productos = document.querySelector("[data-product]");

const render = async () => {
  try {
    const listaProductos = await productServices.AllProducts();
    listaProductos.forEach((elemento) => {
      productos.appendChild(
        nuevoProducto(
          elemento.name,
          elemento.price,
          elemento.imageUrl,
          elemento.id
        )
      );
    });
  } catch (error) {
    console.log(error);
  }
};

render();