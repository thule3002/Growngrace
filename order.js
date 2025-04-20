window.onload = function () {
  // Retrieve cart data from localStorage
  const checkoutCart = JSON.parse(localStorage.getItem('checkoutCart')) || [];
  const totalPrice = localStorage.getItem('totalPrice') || 0;

  const orderSummaryContainer = document.getElementById('order-summary');
  
  // Clear the previous order summary if any
  orderSummaryContainer.innerHTML = '';

  // If there are items in the cart, display them
  if (checkoutCart.length > 0) {
    checkoutCart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('order-item');
      itemElement.innerHTML = `
        <p>${item.product} - $${item.price} x ${item.quantity}</p>
      `;
      orderSummaryContainer.appendChild(itemElement);
    });

    // Display the total price for all items
    const totalPriceElement = document.createElement('div');
    totalPriceElement.classList.add('total-price');
    totalPriceElement.innerHTML = `<p><strong>Total Price: $${totalPrice}</strong></p>`;
    orderSummaryContainer.appendChild(totalPriceElement);
  } else {
    orderSummaryContainer.innerHTML = "<p>Your cart is empty!</p>";
  }

  // Pre-fill product info and quantity for the order form
  if (checkoutCart.length > 0) {
    // Select the first item to pre-fill (or adjust as needed)
    const product = checkoutCart[0].product;
    const quantity = checkoutCart[0].quantity;

    // Assuming you have inputs like:
    // Name (empty), Choose Product (filled with the cart product name), Quantity (pre-filled)
    document.getElementById('name').value = ''; // Empty name field (user to fill out)
    document.getElementById('product').value = product; // Default to first cart product
    document.getElementById('quantity').value = quantity; // Pre-fill with quantity of the first product
  }
}
