<?php

echo print_r ($consulta);



?>


<form action="../Controller/controlador.php" method="post">
    <label for="nick">Nick</label>
    <input type="text" id="nick" name="nick"></br>
    <label for="email">email</label>
    <input type="email" id="email" name="email"></br>
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre"></br>
    <label for="apellidos">Apellidos</label>
    <input type="text" id="apel" name="apel"></br>
    <label for="password">Password</label>
    <input type="password" id="contra" name="contra"></br>
    <input type="submit" value="Enviar" name="tmp_boton_registro">
</form>