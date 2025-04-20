window.onload = function () {
  const checkoutCart = JSON.parse(localStorage.getItem('checkoutCart')) || [];
  const totalPrice = localStorage.getItem('totalPrice') || 0;
  
  // If there are items in the cart, prepopulate the product and quantity fields
  if (checkoutCart.length > 0) {
    const firstItem = checkoutCart[0]; // Assuming only one product for simplicity
    const option = document.createElement('option');
    option.value = firstItem.product;
    option.text = `${firstItem.product} - $${firstItem.price}`;
    productSelect.appendChild(option);

    quantityInput.value = firstItem.quantity; // Set the quantity
  }

  // Display total price
  const totalPriceElement = document.createElement('p');
  totalPriceElement.innerHTML = `Total Price: $${totalPrice}`;
  document.getElementById('order-summary').appendChild(totalPriceElement);
}
