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
    saveWishlist();
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
  saveWishlist();
});

const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");
const contactFeedback = document.getElementById("contact-feedback");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = contactName.value.trim();
  const emailValue = contactEmail.value.trim();
  const messageValue = contactMessage.value.trim();

  if (nameValue === "" || emailValue === "" || messageValue === "") {
    contactFeedback.textContent = "Please fill in all fields before sending.";
    contactFeedback.style.color = "#c0392b";
    return;
  }

  if (emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1) {
    contactFeedback.textContent = "Please enter a valid email address.";
    contactFeedback.style.color = "#c0392b";
    return;
  }

  contactFeedback.textContent = "Thank you, " + nameValue + "! Your message has been received.";
  contactFeedback.style.color = "#27ae60";

  contactName.value = "";
  contactEmail.value = "";
  contactMessage.value = "";
});

function saveWishlist() {
  const items = [];
  const listItems = wishlistList.querySelectorAll("li span");
  listItems.forEach(function (span) {
    items.push(span.textContent);
  });
  localStorage.setItem("elegantmanke-wishlist", JSON.stringify(items));
}

function loadWishlist() {
  const saved = localStorage.getItem("elegantmanke-wishlist");
  if (saved) {
    const items = JSON.parse(saved);
    items.forEach(function (item) {
      addWishlistItem(item);
    });
  }
}

loadWishlist();

const bannerImg = document.getElementById("banner-img");
const bannerCaption = document.getElementById("banner-caption");

bannerImg.addEventListener("click", function () {
  bannerCaption.classList.toggle("visible");
});