<?php


class Conectar{

    private static $conexion;

    public static function ConectarBd(){
        //Recibo los parametros

        $dns = 'mysql:host=localhost;dbname=trabajoluis';
        $usuario = 'root';
        $password = "";

        try{
            self::$conexion = new PDO($dns,$usuario,$password);
            //Falta la asignacion de la conexion a si misma con self
            echo "Conexion exitosa";
        }catch (PDOException $e){
            echo 'Falló la conexión: ' . $e->getMessage();
        }
        return self::$conexion;

    }
            //Cerramos conexion
            public static function cerrarConexion() {
                self::$conexion = null;
            }
    }



































?>