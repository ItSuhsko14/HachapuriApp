<?php
	$dsn = 'mysql:host=localhost; dbname=hachapuri';
	$pdo = new PDO($dsn, 'root', '');

			
		$stmt = $pdo->query("SELECT * FROM `datecount`");
		$results = $stmt->fetchAll(PDO::FETCH_NAMED);

	echo '<pre>';
	//print_r($results);
	echo '</pre>';



		

	
