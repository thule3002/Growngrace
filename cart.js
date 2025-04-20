// Function to add items to the cart
function addToCart(product, price, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Initialize cart if not present
    const existingProduct = cart.find(item => item.product === product);

    if (existingProduct) {
        // If product is already in the cart, increase the quantity
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

// Function to display cart items on the cart page
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ""; // Clear the container before adding new items

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty!</p>"; // Message if cart is empty
    } else {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.price * item.quantity; // Calculate total price
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <p>${item.product} - $${item.price} x ${item.quantity}</p>
                <button onclick="removeFromCart('${item.product}')">Remove</button>
            `;
            cartContainer.appendChild(itemElement); // Add each item to the container
        });

        // Display the total price at the bottom of the cart
        const totalPriceElement = document.createElement('div');
        totalPriceElement.classList.add('total-price');
        totalPriceElement.innerHTML = `
            <p>Total Price: $${totalPrice.toFixed(2)}</p>
        `;
        cartContainer.appendChild(totalPriceElement);
    }
}

// Function to remove items from the cart
function removeFromCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.product !== product); // Remove the selected item
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
    displayCart(); // Refresh the cart display
}

// Function to calculate total price of all items in the cart
function calculateTotalPrice(cart) {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Function to proceed to checkout
function proceedToCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalPrice = calculateTotalPrice(cart); // Calculate the total price

    // Store cart data and total price in localStorage for checkout page
    localStorage.setItem('checkoutCart', JSON.stringify(cart));
    localStorage.setItem('totalPrice', totalPrice);

    // Redirect to the order form page (checkout page)
    window.location.href = 'order.html';
}

// Call both functions on page load
window.onload = function() {
    updateCartCounter(); // Update the cart counter when the page loads
    displayCart(); // Display cart items on the cart page
};
