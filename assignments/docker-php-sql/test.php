<?php
$servername = "localhost:3306";
$username = "micah";
$password = "password";

$connection = new mysqli($servername, $username, $password);

if ($connection->connect_error) {
    die("Connection failed:" . $connection->connect_error);
}

echo "Connected successfully";

?>