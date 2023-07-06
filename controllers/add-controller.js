import { productServices } from "../services/product-service.js";

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
    window.location.href = "index.html";
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
});