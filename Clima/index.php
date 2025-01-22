<?php

// DEBERIA CAPTURAR LO QUE ESTOY TOMANDO

if(isset($_POST['boton'])){

    // Digamos que esto significa que hay algo en el post

    echo "Algo se ha enviado y pulsado el boton";

    // Ahora seria recoger lo que envio?

    if(isset($_POST['temperaturas'])){
        echo "Existe y se asigna";
        $temperatura = $_POST['temperaturas'];
    }

    // Como leo esto?

    foreach($temperatura as $ciudad => $meses){
        echo "<strong>$ciudad</strong><br>"; // Imprimir el nombre de la ciudad
        foreach($meses as $mes=> $temp){
            $max = $temp['max']; // Obtener la temperatura máxima
            $min = $temp['min']; // Obtener la temperatura mínima
            echo "Mes: $mes - Max: $max °C, Min: $min °C<br>"; // Imprimir mes, max y min
        }
    }





}





?>







<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clima</title>
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

// Temperaturas maximas del año y las ciudades. deberiamos tener lo primero el attau de ambas



$ciudades = ['Barcelona', 'Bilbao', 'Madrid', 'Sevilla'];
$meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];



// Ahora deberia tener una especie de tabla

foreach($ciudades as $ciudad){
    foreach($meses as $mes){
        $max = isset($temperaturas[$ciudad][$mes]['max']) ? $temperaturas[$ciudad][$mes]['max'] : '';
        $min = isset($temperaturas[$ciudad][$mes]['min']) ? $temperaturas[$ciudad][$mes]['min'] : '';
        echo "<tr>";
        echo "<td> $ciudad </td>";
        echo "<td> $mes </td>";
        echo "<td><input type ='number' name ='temperaturas[$ciudad][$mes][max]' min='10' max='100' step='0.1' value='$max' ></td>";
        echo "<td><input type ='number' name =' temperaturas[$ciudad][$mes][min]' min='10' max='100' step='0.1' value='$min'></td>";
        echo "</tr>";
    }
}

// La idea es que cada input supone una especie de envio
// Puedo enviar en un formulario arrays? Si.




?>

</table>
<br>
<input type="submit" value="Enviar" name = "boton">
</form>
    
</body>
</html>