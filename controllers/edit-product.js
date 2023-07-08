import { productServices } from "../services/product-service.js";

const getURL = new URL(window.location);
const id = getURL.searchParams.get("id");


const inputUrl = document.querySelector("[data-url]");
const inputCategoria = document.querySelector("[data-categoria]");
const inputNombre = document.querySelector("[data-nombre]");
const inputPrecio = document.querySelector("[data-precio]");
const inputDescripcion = document.querySelector("[data-descripcion]");

productServices.getOneProduct(id).then((datos) => {
    inputUrl.setAttribute("src", datos.imageUrl);
    inputCategoria.value = datos.category;
    inputNombre.value = datos.name;
    inputPrecio.value = datos.price;
    inputDescripcion.value = datos.description;

});

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    productServices
    .modifyProduct(
        id,
        inputCategoria.value,
        inputNombre.value,
        inputPrecio.value,
        inputDescripcion.value,
    )
    .then(() => {
        window.location.href = "../index.html";
    });
});
