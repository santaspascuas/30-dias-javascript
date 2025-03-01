<?php

require_once "../vista/vista.php";
?>



<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atlas</title>
    <link href="./css/estilo.css" rel="stylesheet" />
</head>
<body>
    <header>
        <hgroup>
            <h1><a href="">Atlas</a></h1>
        </hgroup>
    </header>
    <nav>
		<form action="../controlador/controlador.php" method="post">
			<input type="submit" name="nueva" value="Añadir entrada al atlas" /> |
			<input type="submit" name="modificar" value="Modificar entrada en atlas" /> |
			<input type="submit" name="mostrar" value="Mostrar contenido del atlas" /> |
			<input type="submit" name="eliminar" value="Eliminar contenido del atlas" /> |
			<input type="submit" name="buscar" value="Buscar entrada en el atlas" />
		</form>
    </nav>
    <section>

    <?php
    Vista::MostrarBuscardor();


    ?>
		<!----------------------------------------------------------------->
		<!-- Incluya en esta sección el contenido de la página a mostrar -->
		<!----------------------------------------------------------------->
    </section>
    <footer><?php echo 'Atlas &#169; '.date("Y").' por
		<a href="https://luisgomezblanco.notion.site/curriculum" target="_blank"> 
		Luis Lorenzo Gómez Blanco</a> está bajo licencia 
		<a href="./LICENCIA.TXT" target="_blank">CC BY-NC-SA 4.0</a>';?></footer>
</body>
</html>
