<?php

session_start();
$llaves="";
$error ="";

if(isset($_POST['boton'])){

    $nombre = isset($_POST['nombre']) ? $_POST['nombre']:"";
    $contra = isset($_POST['contra']) ? $_POST['contra']:"";

    // Que vamos a probar y es que tenga las cuentas y contraseña en un txt

    // Estamos recibiendo las cosas. Ahora debemos ir al txt para poder sacar los usuarios

    // Primero abrimos el fichero

    $fichero = fopen('users/usuarios.txt', 'r');

    // Deberia controlar los errores
    if (!$fichero) {
        echo "Error al abrir el archivo.";
    } else {
        $axiliar = [];
        // Procederiamos a leer el fichero
        while (($linea = fgets($fichero)) !== false) {
            $linea = trim($linea);
            $par = explode(":", $linea);
    if (count($par) == 2) {
        // Asignar el usuario y la contraseña al array
        $axiliar[$par[0]] = $par[1];
    }
        }
        fclose($fichero); // Siempre cerrar el archivo después de usarlo
    }

    $validacion = entrarLogin($nombre,$contra,$axiliar);

    if($validacion){

        echo " entras";
          // Redirigir a la siguiente página

          // ABRO SESSION Y GUARDO LAS COSAS DE LA SESSION

          $_SESSION['UsuarioLogueado'] = [
            'nombre' => $nombre,
            'contraseña' => $contra
          ];


          header("Location: usuario.php");
    }else{
        $error.="Identificacion incorrecta";
    }

}



function entrarLogin($nombre,$contra,$array){
    foreach($array as $clave => $valor){
        if($clave === $nombre && $valor === $contra){
            return true;
        }
    }

    return false;
}


if(isset($_POST['reseteaContraseña'])){

    echo " Voy a la pagina de reseteo de contraseña";
    header("Location: forgotpasswd.php");
    exit;
}












?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login de la pagina</title>
</head>
<body>
<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>"   method ="post"> <!-----Metemos un script de php--->

<label for="nombre">Nombre</label>
<input type="text" placeholder =" Ingresa tu nombre"  name="nombre" value="<?php  echo isset($_POST['nombre']) ?>">
<br>
<label for="contraseña">Correo</label>
<input type="password" placeholder =" Ingresa tu contraseña"  name="contra" value="<?php  echo isset($_POST['contra']) ?>">
<br>
<br>
<br>
<input type="submit" value="Enviar" name="boton">

<input type="submit" value="Resetear Contraseña" name="reseteaContraseña">

<?php if(!empty($error)) :?>
    <div class="error-mensaje">
        <?php echo $error; ?>
    </div>
    <?php endif; ?>   

</form>   
    
</body>
</html>