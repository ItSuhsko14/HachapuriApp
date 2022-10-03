<?php 
	//echo "fromjs = ";
	echo $_GET['fromjs'];

	
	$bount = $_GET['fromjs'];
	        //echo "count";
	        //echo $count;
	        print_r($bount);
	        echo "<br>";
	        $replaced_symbols = array("{","}");
	        $bount = str_replace($replaced_symbols, "" ,$bount);
	        print_r($bount);
	        echo "<br>";
	        $bount = explode(',',$bount);
	        $count = array();
	        foreach ($bount as $el) {
	        	$pair = explode(':', $el);
	        	echo $pair[0]." ".$pair[1]."<br>";
	        	$count[$pair[0]] = $pair[1];
	        };

	        echo "<br> type of count is ";
	        echo gettype($count);
	        echo "<br>";
	        print_r($count);

	        
	        while($key = current($count)) {
	        	echo '<pre>';
	        	$fields_names .=",";
	        	$fields_names .= key($count);
	        	$fields_values .=",";
	        	$fields_values .= $key;
	        	echo '<pre>';
	        	next ($count);
	        };
	        $fields_values = substr($fields_values, 1);
	        $fields_values = str_replace('"',"'",$fields_values);
	        $fields_names = substr($fields_names, 1);
	        echo "fields_values <br>";
	        echo $fields_values."<br>";
	        echo "fields_names <br>";
	        echo $fields_names;

	    
	        
	        $sql = "INSERT INTO `datecount`" . " (" . $fields_names .") VALUES (" . $fields_values . ")";
	       	$sql = str_replace('"','`',$sql);
	        echo '<pre>';
	        echo "динамічно сформований sql <br>";
	        echo '<pre>';
	        echo $sql;
	        echo '<pre>';

	        
	       
	
	

	try {
        $dsn = 'mysql:host=localhost; dbname=hachapuri; charset=utf8';
        $opt = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    	];
		$conn = new PDO($dsn, 'root', '', $opt);
        //$sql = "INSERT INTO `datecount` (`date`,`kubdari`, `hachapuri`) VALUES ('2022-10-10',55,55)";
		
		echo $sql."<br>";
		print_r($conn);
        
        $affectedRowsNumber = $conn->exec($sql);
        
        if($affectedRowsNumber > 0 ){
            echo "Data successfully added";  
        }
    }
    catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }


	$dsn = 'mysql:host=localhost; dbname=hachapuri';
	$pdo = new PDO($dsn, 'root', '');
	$sql = 'SELECT * FROM datecount';
	$stmt = $pdo->query($sql);
	$results = $stmt->fetchAll(PDO::FETCH_NAMED);

	

	echo '<pre>';
	//print_r ($results);
	echo '<pre>';


//	header('Location: '.'index.php');
	
?>