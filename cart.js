// Function to display cart items
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ""; // Clear current content

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

// Function to remove item from cart
function removeFromCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.product !== product); // Remove item from cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
    displayCart(); // Update cart display
}

// Initialize cart display on page load
window.onload = function() {
    if (document.getElementById('cart-container')) {
        displayCart();
    }
};
