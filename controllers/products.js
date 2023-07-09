import { productServices } from "../services/product-service.js";

const nuevoProducto = (name, price, imageUrl, id) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="producto">
            <img class="producto__img" src="${imageUrl}" alt="img">
            <h1 class="product-name"> ${name} </h1>
            <p class="precio">USD ${(price)}</p>
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
    // const listaProductos = await productServices.allProducts();
    // const categoriaDeseada = "cat"; // Reemplaza "cat" con la categoría que deseas mostrar
    const listaProductos = await productServices.allProducts();
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

const starwars = document.querySelector("[data-starwars]");

const renderS = async () => {
  try {
    // const listaProductos = await productServices.allProducts();
    // const categoriaDeseada = "cat"; // Reemplaza "cat" con la categoría que deseas mostrar
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
    // const listaProductos = await productServices.allProducts();
    // const categoriaDeseada = "cat"; // Reemplaza "cat" con la categoría que deseas mostrar
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
    // const listaProductos = await productServices.allProducts();
    // const categoriaDeseada = "cat"; // Reemplaza "cat" con la categoría que deseas mostrar
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