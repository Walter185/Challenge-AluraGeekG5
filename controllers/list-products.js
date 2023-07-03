import { AllProducts, productServices} from '../services/product-service.js';

const getProducts = (name, price, imageUrl, id) => {
    const card = document.createElement("div");

    const contenido = `
    <div class="producto">
        <div class="container">
        <img src="${imageUrl}" alt="img">
        <h1 class="product-name"> ${name} </h1>
        </div>
        </div>
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
};

const render = async () => {
    try {
      const listProducts = await productServices.AllProducts();

    listProducts.forEach((producto) => {
        producto.appenChild(
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
