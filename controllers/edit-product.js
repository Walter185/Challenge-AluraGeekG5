import { productServices } from "../services/product-service.js";

const getUrl = new URL(window.location);
const id = getUrl.searchParams.get("id");


const url = document.querySelector("[data-url]");
const categoria = document.querySelector("[data-categoria]");
const nombre = document.querySelector("[data-nombre]");
const precio = document.querySelector("[data-precio]");
const descripcion = document.querySelector("[data-descripcion]");

productServices.allProducts(id).then((datos) => {
    url.setAttribute("src", datos.imageUrl);
    nombre.value = datos.name;
    precio.value = datos.price;
    categoria.value = datos.category;
    descripcion.value = datos.description;

});

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    productServices.modifyProduct(
        id,
        url.value,
        nombre.value,
        precio.value,
        descripcion.value,
        categoria.value,
    )
    .then(() => {
        window.location.href = "../index.html";
    });
});
