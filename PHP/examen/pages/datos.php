
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina de Muestra de datos</title>
</head>
<body>
    <h1>Muestra los datos</h1>

    <?php



foreach($resultado as $dato){
    echo "Pais". "---". $dato['pais']."<br>";
    echo  "Capital". "---".$dato['capital']. "<br>";
}
    ?>
    
    



    
</body>
</html>