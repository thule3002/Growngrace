<?php
// Connect to the database
$mysqli = new mysqli('localhost', 'username', 'password', 'database_name');

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Get the form data
$firstName = $_POST['first-name'];
$lastName = $_POST['last-name'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$product = $_POST['product'];
$quantity = $_POST['quantity'];
$creditCard = $_POST['credit-card'];
$cvv = $_POST['cvv'];
$expiration = $_POST['expiration'];

// Insert into database (make sure you have a database and table created)
$query = "INSERT INTO orders (first_name, last_name, phone, address, product, quantity, credit_card, cvv, expiration) 
          VALUES ('$firstName', '$lastName', '$phone', '$address', '$product', '$quantity', '$creditCard', '$cvv', '$expiration')";

if ($mysqli->query($query) === TRUE) {
    echo "Order placed successfully!";
} else {
    echo "Error: " . $query . "<br>" . $mysqli->error;
}

$mysqli->close();
?>
