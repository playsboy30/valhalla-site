let cart = [];
let menuOpen = false;

document.getElementById("menu-toggle").onclick = () => {
  const menu = document.getElementById("side-menu");
  menu.style.right = menuOpen ? "-300px" : "0";
  menuOpen = !menuOpen;
};

function changeLanguage() {
  alert("Language switching coming soon!");
}

function confirmOrder() {
  alert("Order confirmed! (simulated)");
}

function submitProblem() {
  const text = document.getElementById("problem-text").value;
  if (!text) return alert("Please describe the issue.");
  alert("Problem sent! (we’ll connect this to Discord soon)");
}

function closeModal() {
  document.getElementById("product-modal").classList.add("hidden");
}

function showProductDetails(product) {
  const modal = document.getElementById("product-modal");
  const details = document.getElementById("modal-details");
  details.innerHTML = `
    <h3>${product.name}</h3>
    <img src="${product.image}" style="width:100%" />
    <p>Price: $${product.price}</p>
    <p>${product.description}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  modal.classList.remove("hidden");
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
  closeModal();
}

function updateCart() {
  const container = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  container.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    container.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    sum += item.price;
  });
  total.textContent = sum.toFixed(2);
}

const products = [
  { id: 1, name: "Black Hoodie", price: 19.99, image: "https://via.placeholder.com/200", description: "Stylish black hoodie for any weather." },
  { id: 2, name: "Valhalla Cap", price: 9.99, image: "https://via.placeholder.com/200", description: "Black-and-white branded cap." },
  { id: 3, name: "Graphic T-Shirt", price: 14.99, image: "https://via.placeholder.com/200", description: "Unique design for a modern look." }
];

const productSection = document.getElementById("products");
products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" />
    <h4>${product.name}</h4>
    <p>$${product.price}</p>
  `;
  div.onclick = () => showProductDetails(product);
  productSection.appendChild(div);
});
