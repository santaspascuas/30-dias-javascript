<?php
session_start();

// Usando luis
$csv ="";
$json="";

if(isset($_SESSION)){

    echo "Bienvenidp" .  $_SESSION['usuario'];

    if(isset($_POST['enviar'])){
        echo "Estoy pulsando el boton cambiar";
        // Tenemos que recibir los ficheros
        $nombre =  $_FILES['fichero'] ['name'];
        // Nombramos la variable y le adjuntamos el nombre con el que se recibe en el array de ficheros

        // Seria conveniente guardar en el directorio temporarl
        $guardado = move_uploaded_file($_FILES['fichero']['tmp_name'], 'Ficheros/'.
		$_FILES['fichero']['name']);

        // Confirmacion del guardado

        if($guardado) {

			echo "El fichero se ha guradado <br>";
		}else{

			echo " El fichero no se ha guardado";
		}

       		// Debemos leerlos

		$fichero = fopen('Ficheros/'.$_FILES['fichero']['name'],'r');

		$archivo = "nombre:Juan,pais:España,edad:30
nombre:Ana,pais:México,edad:25
nombre:Pedro,pais:Argentina,edad:35";


// Manejo del splode

        $lineas = explode("\n", $archivo);

        foreach ($lineas as $index => $linea) {

            $partes = explode(',', $linea);

        }

        echo print_r($partes);

        
        




    }



    // Hay una session
}else{
    echo "No tienes acesso por no estar registrado";

}







?>










<!DOCTYPE html>
<html>
<head>
<style>
div.unstyledTable {
  border: 1px solid #000000;
  width: 100%;
  height: 700px;
}
.divTable.unstyledTable .divTableCell, .divTable.unstyledTable .divTableHead {
  border: 1px solid #AAAAAA;
}
.unstyledTable .tableFootStyle {
  font-weight: normal;
  height: 50px;
  border-top: 1px solid #000000;
}
/* DivTable.com */
.divTable{ display: table; }
.divTableRow { display: table-row; }
.divTableHeading { display: table-header-group;}
.divTableCell, .divTableHead { display: table-cell;}
.divTableHeading { display: table-header-group;}
.divTableFoot { display: table-footer-group;}
.divTableBody { display: table-row-group;}
</style>
</head>
<body>
<h1><center>CONVERSOR CSV2JSON</center></h1>
<h3><center>¡Hola usuario!</center></h3>
<form action="" method="post" enctype= "multipart/form-data">
<div class="divTable unstyledTable">
	<div class="divTableBody">
	<div class="divTableRow">
		<div class="divTableCell">
			<input type="textarea" id="csv">Aquí va el código CSV</input>
		</div>
		<div class="divTableCell">
			<input type="textarea" id="json">Aquí va el código JSON</input>
		</div>
	</div>
	</div>
	<div class="divTableFoot tableFootStyle">
		<div class="divTableRow">
			<div class="divTableCell">
				<input type="file" name ="fichero"/>
			</div>
			<div class="divTableCell">
				<center>
				<input type="submit" value="Convertir" name="enviar"/>
				</center>
			</div>
		</div>
	</div>
</div>
</form>
<center>
	<p>
	<input type="submit" value="Salir"/>
</center>
</body>


</html>