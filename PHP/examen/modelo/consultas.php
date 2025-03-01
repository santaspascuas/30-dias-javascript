<?php
require_once "../db/db.php";

class Atlas{

    public static function mostrardatosBase(){

        try{
            $conexion = dbBase::conectarBase();
            $sql = "SELECT * FROM ATLAS";
            //Lanzo la consulta
            $stmt = $conexion->prepare($sql);
            $stmt->execute();
            $resultado = $stmt->fetchAll();
            return $resultado;

        }catch(PDOException $e){
            echo "Hay un error". $e->getMessage();
            return null;
        }finally{
            dbBase::cerrarBase();
        }

        }



    public static function buscarPais($pais){
        try{
            $conexion = dbBase::conectarBase();
            $sql = "SELECT * FROM ATLAS WHERE pais = :pais";
            $stmt = $conexion->prepare($sql);
            $stmt->bindParam(':pais',$pais,PDO::PARAM_STR);
            $stmt->execute();
            $resultado = $stmt->fetch();
            return $resultado;
        }catch(PDOException $e){
        echo "Hay un error". $e->getMessage();
    }finally{
        dbBase::cerrarBase();
    }
    }
    
    
    public static function insertarDatos($pais,$capital){
        try{
            $conexion = dbBase::conectarBase();
            $sql = "INSERT INTO ATLAS (pais,capital) values (:pais,:capital)";
            $stmt = $conexion->prepare($sql);
            $stmt->bindParam(':pais',$pais,PDO::PARAM_STR);
            $stmt->bindParam(':capital',$capital,PDO::PARAM_STR);
            $stmt->execute();
            echo "Se ha introducido los paises correctamente";
        }catch(PDOException $e){
            echo "Hay un error". $e->getMessage();
        }finally{
            dbBase::cerrarBase();
        }
    }


    public static function borrarDatos($pais){
        try{
            $conexion = dbBase::conectarBase();
            $sql = "DELETE FROM ATLAS WHERE pais = :pais";
            $stmt = $conexion->prepare($sql);
            $stmt->bindParam(':pais',$pais,PDO::PARAM_STR);
            $stmt->execute();
            echo "Se ha borrado el registro";
        }catch(PDOException $e){
            echo "Hay un error". $e->getMessage();
        }finally{
            dbBase::cerrarBase();
        }
      

    }


    public static function modificarDatos($pais,$capital){

        try{
            $conexion = dbBase::conectarBase();
            $sql = "UPDATE ATLAS SET capital = :capital WHERE pais = :pais";
            $stmt = $conexion->prepare($sql);
            $stmt->bindParam(':pais',$pais,PDO::PARAM_STR);
            $stmt->bindParam(':capital',$capital,PDO::PARAM_STR);
            $stmt->execute();
            echo "Se ha modificado el registro";
        }catch(PDOException $e){
            echo "Hay un error". $e->getMessage();
        }finally{
            dbBase::cerrarBase();
        }
    }




        











































    }










?>