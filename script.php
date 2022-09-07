<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hachapuri";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
	die("connection failed: " .mysqli_connect_error());
}
echo("connection succesfully");

$sql = "SELECT id, name, price, value FROM test";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
		echo "<div id='my-block'> id: " .$row["id"]. " - Name: " . $row["name"] . ", price:" . $row["price"] . ", value:" . $row["value"] . "</div>";
	}
} else { echo "0 result";} 

$conn->close();



?>