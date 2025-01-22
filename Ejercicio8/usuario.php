<?php
session_start();



?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina de Usuario</title>
</head>
<body>

<h1> Solo para usuarios </h1>

<h1>Bievenido <?php echo $_SESSION['UsuarioLogueado']['nombre']; ?> Esta es tu pagina de confirmación.
Elige ser de la orda o de la alianza


    
</body>
</html>