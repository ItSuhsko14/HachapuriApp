<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Хачапурі</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	
</head>
<body>
	
<div class="wrapper">
	<div class="wrapper-vipichka"> </div>	


	<div class="wrapper-button">
		<div class="restart button">restart</div>
		<div class="global-stat button">порівняння</div>
		<div class="statistic button">статистика</div>
		<div class="zakupka button">закупка</div>
	</div>
	<div class="wrapper-button">
		<div class="nav-button button" id="prev-page">назад</div>
		<div class="cur-page button"></div>
		<div class="nav-button button" id="next-page">вперед</div>
	</div>
</div>

<div id="glob-statMod" class="close">

</div>

<div id="statMod" class="close">
	<div class="drigStat   no-click">Дріжджова випічка:    <span></span> </div>
	<div class="listStat   no-click">Листкова випічка:     <span></span> </div>
	<div class="totalStat  no-click">Всього випічки:      <span></span> </div>
	<div class="drigValue  no-click">Вартість дріжджової: <span></span> </div>
	<div class="listValue  no-click">Вартість листкової:  <span></span> </div>
	<div class="totalValue no-click">Вартість всього:    <span></span> </div>
</div>



<div id="zakupka-wrapper" class="close">
	<div class="zakupka-header">
		<div class="h1-div">Закупка</div>
		<input type="button" value="копіювати" class="zakupka-button" id="copy">
		<input type="button" value="редагувати" class="zakupka-button" id="redact">
		<input type="button" class="zakupka-button" id="zakupka-close" value="close">
	</div>


</div>

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

	<script type="text/javascript" src="script.js"></script>

	<script type="text/javascript" src="zakupka.js"></script>

</body>
</html>