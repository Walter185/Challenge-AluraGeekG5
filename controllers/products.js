import { productServices } from "../services/product-service.js";
import { getSessionContext, updateSessionContext} from "../services/context.js";

const nuevoProducto = (name, price, imageUrl, id) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="producto">
          <a class="ver-producto" href="../produto.html?id=${id}">
            <img class="producto__img" src="${imageUrl}" alt="img">
          </a>
          <h1 class="producto__name"> ${name} </h1>
          <p class="producto__price">USD ${(price)}</p>
          <a class="producto__ver" href="../produto.html?id=${id}">
          Ver Producto</a>
        </div>   
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};

const productos = document.querySelector("[data-product]");

const render = async () => {
  try {
  const listaProductos = await productServices.allProducts();
    listaProductos.forEach((elemento) => {
      productos.appendChild(
        nuevoProducto(
          elemento.name,
          elemento.price,
          elemento.imageUrl,
          elemento.id,
        )
      );
    });
  } catch (error) {
    console.log(error);
  }
};

render();

const starwars = document.querySelector("[data-starwars]");

const renderS = async () => {
  try {
  const listaProductos = await productServices.getOneCategory("Star Wars");
    listaProductos.forEach((elemento) => {
      starwars.appendChild(
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

renderS();

const consolas = document.querySelector("[data-consolas]");

const renderC = async () => {
  try {
   const listaProductos = await productServices.getOneCategory("Consolas");
    listaProductos.forEach((elemento) => {
      consolas.appendChild(
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

renderC();

const diversos = document.querySelector("[data-diversos]");

const renderD = async () => {
  try {
   const listaProductos = await productServices.getOneCategory("Diversos");
    listaProductos.forEach((elemento) => {
      diversos.appendChild(
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

renderD();


export function logout() {
  document.getElementById('logoutBtn').addEventListener('click', function() {
    updateSessionContext(false, '');
  });
};
getSessionContext;