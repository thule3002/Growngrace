window.onload = function () {
  // Retrieve cart data from localStorage
  const checkoutCart = JSON.parse(localStorage.getItem('checkoutCart')) || [];
  const totalPrice = localStorage.getItem('totalPrice') || 0;

  // Get the product dropdown and quantity field
  const productSelect = document.getElementById('product-select');
  const quantityInput = document.getElementById('quantity-input');

  // If there are items in the cart, prepopulate the product and quantity fields
  if (checkoutCart.length > 0) {
    // Loop through each item in the cart and add it as an option to the dropdown
    checkoutCart.forEach(item => {
      const option = document.createElement('option');
      option.value = item.product;
      option.text = `${item.product} - $${item.price}`;
      productSelect.appendChild(option);
    });

    // Set the first item's quantity as the default in the quantity input
    quantityInput.value = checkoutCart[0].quantity; // Default to the first item, you can modify this if needed
  }

  // Display total price
  const totalPriceElement = document.createElement('p');
  totalPriceElement.innerHTML = `Total Price: $${totalPrice}`;
  document.getElementById('order-summary').appendChild(totalPriceElement);
}
