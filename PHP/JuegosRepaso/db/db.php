<?php



class Basedb{

    private static $conexion;

    public static function conectarBD(){

        $dns="mysql:dbname=trabajoluis;host=127.0.0.1";
        $usuario="root";
        $password ="";

        try{
            self::$conexion = new PDO($dns,$usuario,$password);
            echo "Conexion establecida";
        }catch(PDOException $e){
            echo "Error de conexion". $e->getMessage();
        }
        return self:: $conexion;
    }


    public static function cerrarBase(){
        self::$conexion=null;
    }















}

























?>