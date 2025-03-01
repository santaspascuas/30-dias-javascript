<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eliminar Datos</title>
</head>
<body>
    <h1>Eliminar Datos </h1>

    <?php
    foreach($resultado as $dato){
        echo "Pais". "---". $dato['pais']."<br>";
        echo  "Capital". "---".$dato['capital']. "<br>";
    }
    ?>
<form action="../controlador/controlador.php" method="post">
        <input type="text" name="pais" id="pais" placeholder="pais">
        <input type="text" name="capital" id="capital" placeholder="capital">
        <button type="submit" name="tmp_eliminar_paises">Enviar</button>
</form>
    


    
</body>
</html>