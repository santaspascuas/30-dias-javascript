<?php



class db{

    private static $conexion;
    
    public static function conectarBase(){

        $dsn = "mysql:dbname=dwes;host=127.0.0.1";
		$usuario = "root";
		$password = "";

        try{
            self:: $conexion = new PDO($dsn,$usuario,$password);
            echo "Conexion";
        }catch(PDOException $e){
            echo "Hay un error". $e->getMessage();
        }
        return self::$conexion;
    }

    public static function cerrarBase(){
        self::$conexion = null;
    }















}
















?>