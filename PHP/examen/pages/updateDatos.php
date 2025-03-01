<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update datos</title>
</head>
<body>
    <h1> Update datos </h1>


    <h2>Introduce los datos a modificar en la base de datos</h2>
    <h2>Lista de paises </h2>

    <?php

foreach($resultado as $dato){
    echo $dato['pais']."<br>";
    echo $dato['capital']. "<br>";
}
?>
<br>

 <form action="../controlador/controlador.php" method="post">
        <input type="text" name="pais" id="pais" placeholder="pais">
        <input type="text" name="capital" id="capital" placeholder="capital">
        <button type="submit" name="tmp_modificar_datos_update">Enviar</button>
</form>


    
</body>
</html>