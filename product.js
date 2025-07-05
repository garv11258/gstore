const products = [
  {
    name: "Cool T-Shirt",
    price: 19.99,
    image: "https://via.placeholder.com/200",
    paypalLink: "https://www.paypal.com/paypalme/yourlink/19.99"
  },
  {
    name: "Stylish Bag",
    price: 29.99,
    image: "https://via.placeholder.com/200",
    paypalLink: "https://www.paypal.com/paypalme/yourlink/29.99"
  }
];

const productContainer = document.getElementById("products");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>Price: $${product.price}</p>
    <a href="${product.paypalLink}" target="_blank">
      <button>Buy with PayPal</button>
    </a>
  `;
  productContainer.appendChild(div);
});
