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
        <p><strong>${item.product}</strong> x ${item.quantity} - $${item.price * item.quantity}</p>
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

  // Pre-fill the order form with cart details (product names and quantities)
  if (checkoutCart.length > 0) {
    // Select the first product to pre-fill the fields
    const product = checkoutCart[0].product;
    const quantity = checkoutCart[0].quantity;

    // Display product name and quantity directly in the form
    document.getElementById('name').value = ''; // Empty name field (user to fill out)
    document.getElementById('product-info').innerHTML = `${product} x ${quantity}`; // Display product name and quantity
    document.getElementById('total-price').innerHTML = `Total Price: $${totalPrice}`; // Display total price at the top
  }
}
