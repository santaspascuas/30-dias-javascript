<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Olvido la contraseña</title>
</head>
<body>
<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>"   method ="post">
<label for="email">Introduce tu e-mail</label>
<input type="email" placeholder =" Ingresa tu email"  name="email" value="">
<br>
<br>
<br>
<input type="submit" value="Enviar" name="boton">

</form>
    
</body>
</html>