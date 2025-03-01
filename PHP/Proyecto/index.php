<?php
$saludos="";
$today = date("j/n/Y, h:i a"); 
$mitad = explode(",",$today );
$mitad2 = explode(":",trim($mitad[1]));
$am_pm = substr($mitad2[1], -2);
echo "<hr>";

if($am_pm =="am"){
    $saludos.="Buenos dias";
}if( $mitad2[0]>=7 && $am_pm=="pm"){
    $saludos.= "Buenas noches";
}else{
    $saludos.= "Buenos tardes";
}

?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
</head>
<style>

        .container {
            background: #c9a27c;
            padding: 15px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 15px;
            height: 50vh;
        }

        .item {
            text-align: center;
        }
        .item img {
            width: 40px;
            height: 40px;
        }
        .controls {
            display: flex;
            gap: 10px;
        }
        .controls button {
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }


</style>

<body>
<div class="head">
            <h1><?php  echo $saludos ?>, hoy es <?php echo $today ?> </h1>
        </div>

    <div class="container">
        <div class="mensaje">
        </div>

        <!-- Aqui va  el formulario--->
        <div class="contendido">

        <div class="item">
            <input type="number" value="0" min="0">
            <br>
            <img src="https://cdn-icons-png.flaticon.com/512/3069/3069162.png" alt="Café">
        </div>
        <div class="item">
            <input type="number" value="0" min="0">
            <br>
            <img src="https://cdn-icons-png.flaticon.com/512/3069/3069162.png" alt="Café">
    </div>

    <div class="item">
            <img src="https://cdn-icons-png.flaticon.com/512/415/415733.png" alt="Agua">
            <br>
            No: <input type="radio" name="agua" checked> Sí: <input type="radio" name="agua">
        </div>

        <div class="item">
            <img src="https://cdn-icons-png.flaticon.com/512/2909/2909670.png" alt="Limón">
            <br>
            No: <input type="radio" name="limon" checked> Sí: <input type="radio" name="limon">
        </div>

                <div class="item">
            <img src="https://cdn-icons-png.flaticon.com/512/1576/1576212.png" alt="Licor">
            <br>
            No: <input type="radio" name="licor" checked> Sí: <input type="radio" name="licor">
        </div>
        <div class="controls">
            <button class="play">▶</button>
            <button class="reset">↻</button>
            <button class="delete">🗑</button>
        </div>

        <!-- Aqui va  el formulario--->

    </div>
        








        </div>

    </div>

    
</body>
</html>