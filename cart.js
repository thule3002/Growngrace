// Function to add items to the cart
function addToCart(product, price, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Get existing cart from localStorage, or create a new one if it doesn't exist

    const existingProduct = cart.find(item => item.product === product);
    
    if (existingProduct) {
        // If product is already in cart, increase the quantity
        existingProduct.quantity += quantity;
    } else {
        // Add new product to the cart
        cart.push({ product, price, quantity });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product} has been added to your cart!`);
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

// Function to remove items from the cart
function removeFromCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.product !== product); // Remove item from the cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
    displayCart(); // Refresh the cart display
}

// Initialize cart display on page load
window.onload = function() {
    if (document.getElementById('cart-container')) {
        displayCart(); // Display cart on page load if it's the cart page
    }
};
