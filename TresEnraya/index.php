<?php

session_start();

// Creamos la session para el tablero sino esta y el turno

if(!isset($_SESSION['tablero'])){
    echo " Aqui dices  al cargar la pagina desde 0 y no ha nada. Creamos una session de turno y de tablero";
    $_SESSION['tablero'] = array_fill(0, 9, '-');
    $_SESSION['turno'] = 'X';
}

echo print_r($_SESSION['tablero']);


// Deberiamos estar recibiendo los inputs de el tablero para ver que recibo
//Detectamos que estamos recibiendo cosas con el post

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    //Deberiamos obtener el valor de los inputs que son bastantes.

    foreach ($_POST as $celda => $valor) {

        //DETECTA EL NAME DE LO QUE ESTAMOS PULSANDO AL RECORREROLO COMO UN ARRAY

        //echo $celda;

        if (strpos($celda, 'celda') === 0) {
            // Con esto lo que hace es sustituir o quitar lo de celda por el numero que hemos creado por contador.
            $indice = (int) str_replace('celda', '', $celda) - 1;
            //echo $indice; // quieres el indice porque luego quieres saber la celda correspondiente y seleccionarla. Digamos que queremos las posiciones
            if ($_SESSION['tablero'][$indice] === ''){
                $_SESSION['tablero'][$indice] = $_SESSION['turno'];
                //echo $_SESSION['tablero'][$indice];
                $_SESSION['turno'] = ($_SESSION['turno'] === 'X') ? 'O' : 'X'; // Cambia el turno
            }

        }


        // aqui estariamos recibiendo los valores o values de cada input seleccionado.


    }




}









?>







<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method="post">
<table>
        <?php
        // Inicializar un contador para asignar identificadores únicos a cada botón
        $contador = 0;

        // Generar una tabla de 3x3
        for ($fila = 0; $fila < 3; $fila++) {
            echo "<tr>";
            for ($columna = 0; $columna < 3; $columna++) {
                echo "<td style='width: 50px; height: 50px;'>";
                $valor = $_SESSION['tablero'][$contador];
                echo "<button type='submit' name='celda$contador' style='width: 100%; height: 100%; font-size: 20px;'>";
                echo $valor; // Mostrar "X", "O" o vacío
                echo "</button>";
                $contador++;
                echo "</td>";
            }
            echo "</tr>";
        }
        ?>

</table>

</form>


</body>
</html>