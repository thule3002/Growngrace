// Function to add items to the cart
function addToCart(product, price, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart')) || []; // Initialize cart
  const existingProduct = cart.find(item => item.product === product);

  if (existingProduct) {
    // If product is already in cart, increase the quantity
    existingProduct.quantity += quantity;
  } else {
    // Add new product to the cart
    cart.push({ product, price, quantity });
  }

  // Save updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product} has been added to your cart!`);
  updateCartCounter(); // Update the cart counter
  displayCart(); // Update the cart display
}

// Function to display cart items on the cart page
function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = ""; // Clear the container

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty!</p>";
  } else {
    cart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
      itemElement.innerHTML = `
        <p>${item.product} - $${item.price} x ${item.quantity}</p>
        <button onclick="removeFromCart('${item.product}')">Remove</button>
      `;
      cartContainer.appendChild(itemElement);
    });
  }
}
// Display the total price
    const totalPriceElement = document.createElement('div');
    totalPriceElement.classList.add('total-price');
    totalPriceElement.innerHTML = `
      <p>Total Price: $${totalPrice.toFixed(2)}</p>
    `;
    cartContainer.appendChild(totalPriceElement);
  }
}
// Call this function on page load
window.onload = function() {
  displayOrderSummary();
};

// Function to remove items from the cart
function removeFromCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.product !== product); // Remove item from the cart
  localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
  displayCart(); // Refresh the cart display
}

// Function to update the cart counter (number of items in the cart)
function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCounter = document.getElementById('cart-counter');
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  if (totalItems > 0) {
    cartCounter.style.display = 'block'; // Show cart counter if there are items
    cartCounter.innerHTML = totalItems; // Set the number of items in the cart
  } else {
    cartCounter.style.display = 'none'; // Hide the cart counter if there are no items
  }
}

// Call the updateCartCounter function when the page loads to display current cart count
window.onload = function () {
  updateCartCounter();
  displayCart(); // Optionally display cart items on page load
};
// Function to proceed to checkout
function proceedToCheckout() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Store cart data and total price in localStorage
  localStorage.setItem('checkoutCart', JSON.stringify(cart));
  localStorage.setItem('totalPrice', totalPrice);

  // Redirect to the order form page
  window.location.href = 'order.html';
}
