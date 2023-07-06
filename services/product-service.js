// METHOD GET
const AllProducts = () =>
  fetch("http://localhost:3000/producto")
    .then((response) => response.json())
    .catch((error) => console.log(error));

const getOneProduct = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((response) => {
    return response.json();
  });
};

//POST
const addProduct = (imageUrl, category, name, price, description) => {
  return fetch(`http://localhost:3000/producto`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imageUrl,
      category,
      name,
      price,    
      description,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.body;
    }
    throw new Error("No se pudo crear el nuevo producto");
  });
};

// PUT / PATCH
const modifyProduct = async (id, name, price, category, description) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      category,
      description,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

//DELETE
const deleteProduct = async (id) => {
  return await fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const productServices = {
  AllProducts,
  getOneProduct,
  addProduct,
  modifyProduct,
  deleteProduct,
};
