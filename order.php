<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $product = $_POST['product'];
    $quantity = $_POST['quantity'];

    // Database connection (MySQL example)
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "glowngrace";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert order into database
    $sql = "INSERT INTO orders (name, product, quantity) VALUES ('$name', '$product', '$quantity')";

    if ($conn->query($sql) === TRUE) {
        echo "New order placed successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
