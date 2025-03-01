<?php

require_once "../db/db.php";




class Usuariorequest{


    public static function registraUsuario($nick,$email,$nombre,$apellidos,$pass){
        // Abrimos la conexion
        try{

            $conexion = Basedb::conectarBD();
            //stmt
            $sql = "INSERT INTO USUARIO (nick,email,nombre,apellidos,password) VALUES
            (:nick,:email,:nombre,:apellidos,:password)";
            $stmt = $conexion ->prepare($sql);
            //Aqui vamos a usar los params
            $stmt ->bindParam(":nick",$nick,PDO::PARAM_STR);
            $stmt ->bindParam(":email",$email,PDO::PARAM_STR);
            $stmt ->bindParam(":nombre",$nombre,PDO::PARAM_STR);
            $stmt ->bindParam(":apellidos",$apellidos,PDO::PARAM_STR);
            $stmt ->bindParam(":password",$pass,PDO::PARAM_STR);
            //tEMEOS QUE EJECUTAR

            $stmt->execute();

            echo "Se ha insertado el usuario correctamente";
        }catch(PDOException $e){
            echo "Error: " . $e->getMessage();
        }finally{
            Basedb::cerrarBase();
        }

    }



    public static function comprobarEmail($email){

        try{

            $conexion = Basedb::conectarBD();
            
            //stmt

            $stmt = $conexion->prepare("SELECT * FROM USUARIO WHERE EMAIL =?");
            $stmt->execute([$email]);
            $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
            return $resultado;

        }catch(PDOException $e){
            return null;
        }finally{
            Basedb::cerrarBase();
        }
    }


    public static function usuariosTotales(){

        try{
            $conexion = Basedb::conectarBD();
            //stmt
            $sql = "SELECT * FROM USUARIO";
            $stmt = $conexion->prepare($sql);
            //ejecutamos
            $stmt ->execute();

            $resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $resultado;
        }catch(PDOException $e){
            return null;
        }finally{
            Basedb::cerrarBase();
        }

    }


    public static function updateUsuario(){

        try{
            $conexion = Basedb::conectarBD();
            



        }catch(PDOException $e){
            return null;
        }finally{
            Basedb::cerrarBase();
        }







    }

    



}



























?>