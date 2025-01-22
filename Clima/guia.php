<?php
$errores = "";
$verificacion = "";

if(isset($_POST['boton'])){
        $temperaturas = isset($_POST['temperaturas']) ? $_POST['temperaturas'] : ""; // Necesario recoger el array y cerificarlo en un ternario

        //if (!empty($temperaturas)) { // verificamos que esta variable es innecesaria por que el array bidimensional no esta vacio. contamos las llaves.
            // ordena alfabeticamente
    ksort($temperaturas, SORT_STRING); // Utilizada para ordenar arrays
    $nuevo_array = $temperaturas; // array ordenado

    // PLanteamos un array de lectura con for. INNECESARIO PORQUE LO QUEREMOS EN LA MISMA.
    /*
    echo "<table border='1'>";
    echo "<tr>";
    echo "<th>Ciudad</th>";
    echo "<th>Mes</th>";
    echo "<th>Temperatura Máxima</th>";
    echo "<th>Temperatura Mínima</th>";
    echo "</tr>";
*/


    foreach($nuevo_array as $ciudad => $meses){
        $valores_maximos=[];
        $valores_minimos=[];
        $suma_maxima=0;
        $suma_minima=0;
        $maximo =0;
        $minimo = 0;

        foreach($meses as $mes => $valores){
             $valores_maximos[] = $valores['max'];
             $valores_minimos[]= $valores['min'];
             // Analizar el maximo
             if($maximo<$valores['max']){
                $maximo = $valores['max'];
                echo $maximo;
             }
             if($minimo<$valores['min']){
                $maximo = $valores['min'];
                echo $minimo;
             }
        }

        $suma_maxima +=array_sum($valores_maximos);
        $suma_minima +=array_sum($valores_minimos);
        $totales = count($valores_maximos);
        $media_maxima = $suma_maxima/$totales;
        $media_minima=$suma_minima/$totales;
        // Array que contiene la media por ciudades
        $total_medi_ciudad[$ciudad] = (int)$media_maxima; // Arrays de medias de maximos
        $total_medi_ciudad_min[$ciudad] = (int)$media_minima; // Array media de minimos
        // Array que contiene los maximos y minimos identificados
        $total_medias_maximas[$ciudad] = $maximo;
        $total_medias_minimas[$ciudad] = $minimo;
    }

    echo var_dump($total_medias_minimas);

    
    //Impresion de las medias en una nueva tabla

    echo "<table border='1'>";
    echo "<tr>";
    echo "<th> Ciudad</th>";
    echo "<th>Temperatura Máxima Media</th>";
    echo "<th>Temperatura Mínima Media</th>";
    echo "<th>Temperatura Mínima</th>";
    echo "<th>Temperatura Maxima</th>";
    echo "</tr>";

    foreach($total_medi_ciudad as $ciudad => $valores){

        $min_media =$total_medi_ciudad_min[$ciudad]; 
        $minima =$total_medias_minimas[$ciudad]; 
        $maxima =$total_medias_minimas[$ciudad]; 

        echo "<tr>";
        echo "<td> $ciudad </td>";
        echo "<td> $valores </td>";
        echo "<td> $min_media </td>";
        echo "<td> $minima </td>";
        echo "<td> $maxima </td>";


        echo "</tr>";
    }
    
    echo "</table>";
    



    //Mensaje de verificacion

    $verificacion.= "Has enviado  el formulario";

    //Mensaje de verificacion
            
        }
        else{
    $errores .= "No has pulsado nada.";
}




?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio3</title>
    <style>

        body{
            font-family: 'Arial', sans-serif;
            background-color: #f0f8ff;
            margin: 0;
            padding: 0px;
            justify-content: center;
            align-items: center;
            height: 100vh;
            gap:5px;
        }

        h1 {
            text-align: center;
            color: #2e8b57;
        }
        h2 {
            text-align: center;
            color: #4682b4;
            margin-bottom: 20px;
        }
        form{
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 800px;
            margin-top: 20px;
        }
        table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
   
    }

    th, td {
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }

        th {
            background-color: #4682b4;
            color: white;
            font-weight: bold;
        }

        td {
            background-color: #f9f9f9;
        }

        input[type="number"] {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            font-size: 14px;
        }

        input[type="submit"] {
            background-color: #2e8b57;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            display: block;
            width: 100%;
            max-width: 200px;
            margin: 0 auto;
        }

        input[type="submit"]:hover {
            background-color: #3cb371;
        }

        .errores {
            text-align: center;
            color: #ff6347;
            font-size: 18px;
        }



    </style>    
</head>
<body>
    <h1>Ejercicio nº3 de PHP</h1>
    <h2>Tabla1
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" target="_">
        <table border="2">
            <tr>
                <th>Ciudad</th>
                <th>Mes</th>
                <th>Temperatura Máxima</th>
                <th>Temperatura Mínima</th>
            </tr>
            <?php
            $ciudades = ['Barcelona', 'Bilbao', 'Madrid', 'Sevilla'];
            $meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

            foreach($ciudades as $ciudad){
                foreach($meses as $mes){
                    $max = isset($temperaturas[$ciudad][$mes]['max']) ? $temperaturas[$ciudad][$mes]['max'] : '';
                    $min = isset($temperaturas[$ciudad][$mes]['min']) ? $temperaturas[$ciudad][$mes]['min'] : '';

                    // Comentar esto con Luis. Se ve que cuando campturas el array una vez seteado. Lo oigualas a una variable para obtener 
                    echo "<tr>";
                    echo "<td> $ciudad </td>";
                    echo "<td> $mes </td>";
                    echo "<td><input type ='number' name ='temperaturas[$ciudad][$mes][max]' min='10' max='100' step='0.1' value='$max' ></td>";
                    echo "<td><input type ='number' name =' temperaturas[$ciudad][$mes][min]' min='10' max='100' step='0.1' value='$min'></td>";
                    echo "</tr>";
                }
              
            }

            ?>
        </table>
        <br>
        <input type="submit" value="Enviar" name = "boton">
    </form>
    <div class="errores">
        <?php   echo $verificacion; ?>
    </div>

   


    
</body>
</html>