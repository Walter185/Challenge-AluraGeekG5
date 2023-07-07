import { productServices} from '../services/product-service.js';

const getProducts = (name, price, imageUrl, id) => {
    const card = document.createElement("div");

    const contenido = `
    <div class="producto">
        <div class="producto__container">
            <button class="buttonDelete" type="button">
              <img class="deleteImage" src="../assets/img/delete.png" alt="Borrar" />
            </button>
            
            <a href="../pages/edit-product.html?id=${id}">
            
              <button class="buttonEdit" type="button">
                <img class="editImage" src="../assets/img/edit.png" alt="Editar" />
              </button>
            
            </a>
        </div>
        
        <img class="producto__img" src="${imageUrl}" alt="img">
        <h1 class="producto__name"> ${name} </h1>
        <p class="producto__price">${price}</p>
        </div>
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
};

const productos = document.querySelector("[data-allProducts]");

productos.addEventListener("click", async (evento) => {
  let deleteButton = evento.target.className === "deleteImage";
  if (deleteButton) {
    const producto = evento.target.closest("[data-id]");
    let id = producto.dataset.id;
    productServices
      .deleteProduct(id)
      .then((res) => {
        producto.remove();
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
});

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
