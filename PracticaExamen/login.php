<?php
session_start();

// Array asociativo de usuarios
$errores = "";
$usuarios = [
    "profesor" => [
        "perfil" => "administrador",
        "contraseña" => "profe"
    ],
    "alumno" => [
        "perfil" => "usuario",
        "contraseña" => "examen"
    ]
];

// Función para buscar datos en el array
function buscarDatos($nombre, $contra, $array) {
    foreach ($array as $usuario => $detalles) {
        if ($detalles['perfil'] === $nombre && $detalles['contraseña'] === $contra) {
            return true; // Acceso correcto
        }
    }
    return false; // Acceso incorrecto
}

// Verificar si hay datos en $_POST
if ($_POST) {
    // Asignar valores usando ternarios
    $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : "";
    $contra = isset($_POST['contrasena']) ? $_POST['contrasena'] : "";

    echo $nombre;

    echo $contra;
    // Llamar a la función para verificar acceso
    if (buscarDatos($nombre, $contra, $usuarios)) {

        echo " Coorrrecto";
        // Crear sesión
        $_SESSION['usuario'] = $nombre;

        // Redirigir a la siguiente página
        header("Location: csv2json.php");
        exit;
    } else {
        $errores = "Usuario y/o contraseña incorrectos.";
    }
}
?>




<!DOCTYPE html>
<html>
<head></head>
<body>
<h1><center>CONVERSOR CSV2JSON</center></h1>
<form action="" method ="post">
<div class="divTable unstyledTable">
	<div class="divTableBody">
	<div class="divTableRow">
		<div class="divTableCell">
			<span id="csv">Nombre:</span><input type="text"  name ="nombre" value =""/>
		</div>
		<div class="divTableCell">
			<span id="json">Contraseña:</span><input type="password" name ="contrasena" value="" />
		</div>a
	</div>
	</div>
	<div class="divTableFoot tableFootStyle">
		<div class="divTableRow">
			<input type="submit" />
		</div>
	</div>

    <?php if (!empty($errores)) : ?>
    <div class="error-mensaje">
        <?php echo $errores; ?>
    </div>
    <?php endif; ?>

</div>

</form>

</body>


</html>