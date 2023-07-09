// METHOD GET
const allProducts = () =>
  fetch("http://localhost:3000/producto")
    .then((response) => response.json())
    .catch((error) => console.log(error));

const getOneProduct = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((response) => {
    return response.json();
  });
};

const getOneCategory = (category) => {
  return fetch(`http://localhost:3000/producto/${category}`).then((response) => {
    return response.json();
  });
};

//POST
const addProduct = (imageUrl, category, name, price, description) => {
  return fetch(`http://localhost:3000/producto`, {
    method: "POST",
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
const modifyProduct = async (id, category, name, price, description) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json",
    },
    body: JSON.stringify({
      category,
      name,
      price,
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
  allProducts,
  getOneProduct,
  getOneCategory,
  addProduct,
  modifyProduct,
  deleteProduct,
};
