<?php

session_start();

// Vale deberiamos ir recibiendo cosas

if(isset($_POST['boton'])){
    echo "He pulsado el boton";

    // Deberia estar recibiendo los parametros

    $name = isset($_POST['name'][0]) ? $_POST['name'][0] : ""; // Usamos el primer elemento del array
    $fijo = isset($_POST['fijo'][0]) ? $_POST['fijo'][0] : "";
    $movil = isset($_POST['movil'][0]) ? $_POST['movil'][0] : "";
    $correo = isset($_POST['Correo'][0]) ? $_POST['Correo'][0] : "";
    $nacimiento = isset($_POST['FechaNacimiento'][0]) ? $_POST['FechaNacimiento'][0] : "";
    
    if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] == 0){
        // Estoy recibiendo la imah

        $imagen = $_FILES['imagen']['name']; // Nombre de la imagen
        echo $imagen;
        echo "Recibo la imagen";
        // Deberia mover o crear la ruta para guardarla
         // Seria conveniente guardar en el directorio temporarl
         $guardado = move_uploaded_file($_FILES['imagen']['tmp_name'], 'Imagen/'.
         $_FILES['imagen']['name']);
         if($guardado) {

			echo "La imagen se ha guardado <br>";
		}else{

			echo " El fichero no se ha guardado";
		}
    }


    // Deberia usar una session para guardarlo. Pero puedo crear un objeto eh ir añadiendo



    $contacto = [
        'nombre' => $name,
        'Telefono Fijo:' =>$fijo,
        'Telefono Movil' =>$movil,
        'correo' => $correo,
        'nacimiento' => $nacimiento,
        'imagen'=>$imagen,
    ];

    echo print_r($contacto);

    // Abro una session y lo guardo
    $_SESSION['agenda'][] = $contacto;


    echo var_dump($_SESSION['agenda']);

    foreach($_SESSION['agenda'] as $indice =>$temp){
        echo $indice;
        foreach($temp as $bandera => $valor){
            echo "$bandera: $valor</br>";
        }
    }



}



    /// Estas con la session y el boton de 

    if (isset($_POST['GuardarAgenda']) && isset($_SESSION['agenda'])) {


        // Tenemos la session de agenda y pulsamos el boton de guardar

        // Vamos a abrir un fichero y ponemos ahi nuestra agenda
        // creamos el fichero

        $fichero = fopen('Agenda.txt', 'w+'); // Con esto abro y creo un fichero.

        // Ahora deberiamos poner el valor del fichero en el txt

        foreach($_SESSION['agenda'] as $indice =>$temp){
            foreach($temp as $bandera => $valor){
                $linea = $bandera . ":" . $valor . "\n";
                fwrite($fichero,$linea);
            }
        }

        fclose($fichero);
        echo "<h3>Agenda guardada</h3>";

    }

    // Cerramos session

    if (isset($_POST['cerrar_sesion'])) {

        echo "<h3>Cerrar session</h3>";
        session_destroy(); // Destruccion de session.
        // Enviamos con un heder
        header("location: " . $_SERVER['PHP_SELF']);

        echo "Session cerrada";
    }
    















?>










<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio numero 4: Agenda</title>
</head>
<body>
<form action="" method="post" enctype="multipart/form-data" >
    <fieldset>
    <legend>Insertar Agenda de Contactos</legend>
    <label for ="name">Nombre</label>
    <input type="text" id="name" name="name[]"><br>
    <br>
    <fieldset>
    <legend>Elige el tipo de telefono:</legend>
    <input type="checkbox" id="fijo" name="fijo[]" value='Fijo' >
    <label for ="fijo">Fijo</label><br>
    <input type="checkbox" id="movil" name="movil[]" value='movil'>
    <label for ="movil">Movil</label>
    </fieldset>
    <br>
    <label for ="Correo">Correo:</label>
    <input type="email" id="Correo" name="Correo[]" value=""><br>
    <br>

    <label for ="FechaNacimiento">FechaNacimiento:</label>
    <input type="date" id="FechaNacimiento" name="FechaNacimiento[]" value=""><br>
    <br>
    <br>
    <label for="Imagen">Inserta Imagen</label>
   <input type="file" id="imagen" name="imagen" accept="image/jpeg, image/png">
   <br>
   <br>
    </fieldset>
    <br>
    <br>
    <input type="submit" value="Enviar" name = "boton">
    <br>
    <br>
    <input type="reset" value="Reset" />
    <br>
    <br>
    <input type="submit" name="cerrar_sesion" value="Cerrar Sesión">
    <br>
    <br>
    <input type="submit" name="GuardarAgenda" value="GuardarAgenda">
    </form>


    
</body>
</html>