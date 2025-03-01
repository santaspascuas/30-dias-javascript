<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cafetera</title>
</head>
<body>
    <?php
    $today = date("m/d/y, g:i a");

    $hora = date('H', strtotime($today));

    $mensaje = "";
    if ($hora >= 6 && $hora < 12) {
        $mensaje ="Mañana";
    } elseif ($hora >= 12 && $hora < 18) {
        $mensaje =  "Tarde";
    } else {
        $mensaje =  "Noche";
    }

    echo "Buenas  $mensaje". " " . $today;
    ?>

<form action="../controlador/controlador.php" method="post">
    <label for="cafe">Cafe</label>
    <input type ="number" name="cafe" min="0" max="3" />
    <label for="leche">Leche</label>
    <input type ="number" name="leche" min="0" max="3"/>
    <label for="leche">Agua</label>
    <input type ="radio" name="agua" value="1" />Si
    <input type ="radio" name="agua" value="0" />No
    <label for="leche">Limon</label>
    <input type ="radio" name="limon" value="1" />Si
    <input type ="radio" name="limon" value="0" />No
    <label for="leche">Alchol</label>
    <input type ="radio" name="alcohol" value="1" />Si
    <input type ="radio" name="alcohol" value="0" />No


    <button type="submit" name="preparar">Preparar</button><br>
    <button type="submit" name="reponer">Reponer</button><br>
    <button type="submit" name="limpiar">Limpiar</button><br>
</form>




    
    
</body>
</html>