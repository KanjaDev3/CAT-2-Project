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

// ============================
// FEATURE 2: Dynamically add & remove elements (Wishlist)
// User types an item, clicks Add, it appears in the list with a Remove button.
// createElement() and appendChild() to add, remove() to remove.
// ============================
const wishlistInput = document.getElementById("wishlist-input");
const wishlistAddBtn = document.getElementById("wishlist-add-btn");
const wishlistList = document.getElementById("wishlist-list");

function addWishlistItem(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "wishlist-remove-btn";
  removeBtn.type = "button";
  removeBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(removeBtn);
  wishlistList.appendChild(li);
}

wishlistAddBtn.addEventListener("click", function () {
  const value = wishlistInput.value.trim();
  if (value === "") {
    return;
  }
  addWishlistItem(value);
  wishlistInput.value = "";
});