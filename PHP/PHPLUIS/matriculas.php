<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio de las matriculas</title>
</head>
<body>
    <h1>Matriculas </h1>
    <p>Desarrollar un programa que permita validar si la matrícula introducida de un vehículo es correcta o no, siguiendo las siguientes instrucciones:

- La matrícula de un vehículo está compuesta por una combinación de cuatro dígitos del 0 al 9 y una serie de tres letras.
- Para evitar la formación de palabras malsonantes, no está permitido el uso de las siguientes:</p>

<?php

$numero = [0,1,2,3,4,5,6,7,8,9]; // Numero validos
$abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// La MATRICULA ESTA FORMADA POR CUATRO DIGITOS Y TRES LETRAS
$ejemplo = "1459";
$valido = true;
//Como validamos si esta compuesto por numeros validso??
$str = str_split($ejemplo); // Ahora str es un array donde puedo ir comparando
// La cosa es que no debo de iterar de numero a str. Sino al reves porque debo de verificar que mi array de ejemplo esta bien
/*
foreach ($str as $num) {
    if(!in_array($num,$numero )){
        $valido = false;
        break;
    }
}*/
// Sino se me ocurre in array.
//Primero recorrer la cadena a analizar

for($i=0;$i < count($str); $i++){
    $es_valido = false;
    for($j=0;$j<count($numero);$j++){
        if($str[$i] == $numero[$j]){
            $es_valido = true;
        }
    }
}


if($es_valido){
    echo "$ejemplo es valida";
}else{
    echo "No es valida $ejemplo";
}

// Con esto valido las cifras de numeros en un string de 4 cifras. Ahora deberia validar las letras.










?>
    
</body>
</html>