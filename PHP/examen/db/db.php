<?php

class dbBase{

    private static $Conexion;
    
    public static function conectarBase(){

        $dsn = "mysql:dbname=dwes;host=127.0.0.1";
		$usuario = "root";
		$password = "";

        try{
            self:: $Conexion = new PDO($dsn,$usuario,$password);
        }catch(PDOException $e){
            echo "Hay un error". $e->getMessage();
        }
        return self::$Conexion;
    }

    public static function cerrarBase(){
        self::$Conexion = null;
    }

}






?>