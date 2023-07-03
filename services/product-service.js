// METHOD GET 
const AllProducts = () =>
    fetch("http://localhost:3000/producto")
    .then((response) => response.json())
    .catch((error) => console.log(error));

export const productServices = {
AllProducts
};