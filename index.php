<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Хачапурі</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

	
</head>
<body>


<div class="wrapper">
	<div class="for_php">	
		<?php 
			require 'configDB.php';
		?>
	</div>

<script type="text/javascript">
	var dataBase = <?php echo json_encode($results); ?>;
</script>

	<div class="wrapper-vipichka"> </div>	


	<div class="wrapper-button">
		<div class="restart button">restart</div>
		<div class="global-stat button">інгридієнти</div>
		<div class="statistic button">статистика</div>
		<div class="zakupka button">закупка</div>
	</div>
	<div class="wrapper-button">
		<div class="nav-button button" id="save">зберегти</div>
		<div class="zalishki-button button">Залишки</div>
		<div class="nav-button button" id="next-page">вперед</div>
		<div class="close">
			<form action="save.php" method="get"> 
				<input type="text" id="text_for_php" name="fromjs" value="">
				<input type="submit" id="save_for_php" value="передати">
			</form>
			
		</div>

	</div>
</div>

<div id="glob-statMod" class="close zakupka">
	<div class="zakupka-header">
		<div class="h1-div">Використані продукти</div>
		<input type="button" class="zakupka-button" id="ingridients-calculate" value="calculate">
		<input type="button" class="zakupka-button" id="ingridients-close" value="close">
	</div>
	<table class="ing-table table">
		<tr>
			<td style="width: 16%">Інгридієнти</td>
			<td style="width: 16%">Вчора</td>
			<td style="width: 16%">Прихід</td>
			<td style="width: 16%">Використано</td>
			<td style="width: 22%">Залишок</td>
			<td style="width: 10%">Різниця</td>
		</tr>
		<tr>
			<td>Свинина</td>
			<td><input id="svin-yest" class="ing-input" type="number"></td>
			<td><input id="svin-add" class="ing-input" type="number"></td>
			<td><span class="svinDiv"></span></td>
			<td>
				<div class="ing-input input-div">
					<input id="svin-tod" type="number" class="tod">
					<input class="ing-count" id="svin-count" type="button" value="+">
				</div>
			</td>
			<td class="sub"><span id="svin-sub"></span></td>
		</tr>
		<tr>
			<td>Телятина</td>
			<td><input  class="ing-input" id="telyat-yest" type="number"></td>
			<td><input id="telyat-add" class="ing-input" type="number"></td>
			<td><span class="telyatDiv"></span></td>
			<td>
				<div class="ing-input input-div">
					<input id="telyat-tod"  type="number" class="tod">
					<input class="ing-count" id="telyat-count" type="button" value="+">
				</div>
			</td>
			<td class="sub"><span id="telyat-sub"></span></td>
		</tr>
		<tr>
			<td>Фарш</td>
			<td><input id="farsh-yest"  class="ing-input" type="number"></td>
			<td><input id="farsh-add" class="ing-input" type="number"></td>
			<td><span class="farshDiv"></span></td>
			<td>
				<div class="ing-input input-div">
					<input id="farsh-tod" class="tod" type="number">
					<input class="ing-count" id="farsh-count" type="button" value="+">
				</div>
			</td>
			<td class="sub"><span id="farsh-sub"></span></td>
		</tr>
		<tr>
			<td>Сир</td>
			<td><input id="sir-yest"  class="ing-input" type="number"></td>
			<td><input id="sir-add" class="ing-input" type="number"></td>
			<td><span class="sirDiv"></span></td>
			<td>
				<div class="ing-input input-div">
					<input id="sir-tod" class="tod" type="number">
					<input class="ing-count" id="sir-count" type="button" value="+">
				</div>
			</td>
			<td class="sub"><span id="sir-sub"></span></td>
		</tr>
		<tr>
			<td>Філе</td>
			<td><input id="fyle-yest"  class="ing-input" type="number"></td>
			<td><input id="fyle-add" class="ing-input" type="number"></td>
			<td><span class="fyleDiv"></span></td>
			<td><input id="fyle-tod" class="ing-input" type="number"></td>
			<td class="sub"><span id="fyle-sub"></span></td>
		</tr>
		<tr>
			<td>Тісто</td>
			<td><input id="tisto-yest"  class="ing-input" type="number"></td>
			<td><input id="tisto-add"  class="ing-input" type="number"></td>
			<td><span class="tistoDiv"></span></td>
			<td><input id="tisto-tod"  class="ing-input" type="number"></td>
			<td class="sub"><span id="tisto-sub"></span></td>
		</tr>
	</table>
	

</div>

<div id="statMod" class="close">
	<div class="zakupka-header">
		<div class="h1-div">Статистика</div>
	</div>
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
		<input type="button" class="zakupka-button" id="zakupka-close" value="close">
	</div>
</div>

<div id="zalishki" class="zalishki close">
	<div class="zakupka-header">
		<div class="h1-div">Залишки</div>
		<input type="button" class="zakupka-button" id="zalishki-close" value="close">

	</div>
	<div class="wrapper-vipichka"></div>
	
</div>
	<script type="text/javascript" src="script.js"></script>

	<script type="text/javascript" src="ingridients.js"></script>
	<script type="text/javascript" src="zakupka.js"></script>
	<script type="text/javascript" src="zalishki.js"></script>
	<script type="text/javascript" src="save.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>
</html>