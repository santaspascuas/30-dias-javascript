<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplos de uso de la base de datos</title>
</head>
<body>
    <h2>Ejemplos de base de datos</h2>
    <form action="../Controller/controlador.php" method="post">
    <input type="submit" id="boton" value="Mostrar Admin" name="tmp_admin_mostrar_datos">
    </form>
<!---Aqui probamos si se ha pasado los datos-->

<?php

echo print_r($resultado);
?>
<h2>ID: Para modificar</h2>

<form action="../Controller/controlador.php" method="get">
    <label for="id">id</label>
    <input type="text" id="id" name="id"></br>
    <input type="submit" value="Enviar" name="tmp_boton_update">
</form>



</body>
</html>