// CAT 2 JavaScript features

// ============================
// FEATURE 1: Loop-rendered content
// Products stored in an array of objects and rendered into the DOM with forEach()
// ============================
const products = [
  {
    name: "Full Outfits",
    description: "Comfortable fits from casual to formal",
    image: "images/product1.jpg",
    alt: "Men's formal suit"
  },
  {
    name: "Casual Fits",
    description: "Complete looks, styled and ready to wear",
    image: "images/product2.jpg",
    alt: "Men's casual shirts"
  },
  {
    name: "Shirts & Shorts",
    description: "Sharp, tailored fits for every occasion",
    image: "images/product3.jpg",
    alt: "Men's trousers"
  },
  {
    name: "Casual Sweaters",
    description: "Relaxed styles that never compromise on class",
    image: "images/product4.jpg",
    alt: "Men's outfit set"
  }
];

const productsGrid = document.getElementById("products-grid");

products.forEach(function (product) {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML =
    '<div class="product-img">' +
      '<img src="' + product.image + '" alt="' + product.alt + '" />' +
      '<div class="product-overlay">' +
        '<p>Visit us in store</p>' +
      '</div>' +
    '</div>' +
    '<div class="product-info">' +
      '<h3>' + product.name + '</h3>' +
      '<p>' + product.description + '</p>' +
    '</div>';

  productsGrid.appendChild(card);
});