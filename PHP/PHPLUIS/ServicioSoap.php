<?php


$uri = "http://localhoast/bisiesti/";
$server = new SoapServer(null,array("uri=>$uri"));
$server->addFunction("bisiesto");
$server->handle(); // Es el iniciador de la api que trata de controlar las cosas.Es como un listener.


// Esto debera estar en el controlador para que nuestro servidor escuche 

function bisiesto($anio){
    $es = "no";

    if(($anio%4) == 0) $es ='si es ';
    if(($anio%100) == 0) $es ='no es';
    if(($anio%400) == 0) $es ='si es';
    return ($es);
}

$anio = 2022;
echo $anio.' ' . (bisiesto($anio)). 'bisiestos';

// Se inicia cliente con SoapClient  y hay que pasarle las url.



?>