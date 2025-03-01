<?php
require_once '../db/db.php';


Class  dbUsuario{


    public static function comprobarEmail($email){
        try{    
        $conexion = Conectar::ConectarBd(); // Para establecer conexion con la base de datos
        //Preparamos la query con prepare y bin params. utilizo smt
        $stmt = $conexion->prepare("SELECT * FROM usuario WHERE email =?");
        //Ligamos los parametros que no hemos pasado
        $stmt->execute([$email]);
        //Debemos ontener la consulta
        $resultados = $stmt->fetch(PDO::FETCH_ASSOC);
        return $resultados;
        }catch (PDOException $e){
        // Manejar errores de la base de datos
        error_log("Error en ConsultarporEmail: " . $e->getMessage());
        return null;
        }finally{
            Conectar::cerrarConexion();
        }
    }


    public static function insertarUsuario($nick,$email,$nombre,$apellidos,$pass){
        try{
            $conexion = Conectar::ConectarBd(); 
            $sql = "INSERT INTO USUARIO (NICK,EMAIL,NOMBRE,APELLIDOS,PASSWORD) VALUES (:NICK,:EMAIL,:NOMBRE,:APELLIDOS,:PASSWORD)";
            $stmt = $conexion->prepare($sql);
            //aQUI VENDRIA ENLAZARLOS CON LOS PARAMETROS
            $stmt->bindParam(":NICK", $nick,PDO::PARAM_STR);
            $stmt->bindParam(":EMAIL",$email,PDO::PARAM_STR);
            $stmt->bindParam(":NOMBRE",$nombre,PDO::PARAM_STR);
            $stmt->bindParam(":APELLIDOS",$apellidos,PDO::PARAM_STR);
            $stmt->bindParam(":PASSWORD",$pass,PDO::PARAM_STR);

            //Tenemos que ejecutar
            $stmt->execute();
            echo "El usuario se ha insertado correctamente";
           
        }catch(PDOException $e){
            echo "Error: " . $e->getMessage();
        }finally{
            Conectar::cerrarConexion();
        }

    }


    public static function usuariosTotales(){

        try{
            $conexion = Conectar::ConectarBd();
            $sql = "SELECT * FROM USUARIO";
            $stmt = $conexion->prepare($sql);
            $stmt->execute();
            $resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $resultado;
        }catch(PDOException $e){
            return null;
        }finally{
            Conectar::cerrarConexion();
        }

    }


    public static function sacarDatosID($id){

        try{
            //Conexion
            $conexion = Conectar::ConectarBd();
            $sql = "SELECT * FROM USUARIO WHERE ID = ?";
            $stmt =$conexion->prepare($sql);
            $stmt->execute([$id]);
            $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
            return $resultado;
        }catch(PDOException $e){
            return null;
        }finally{
            Conectar::cerrarConexion();
        }


    }

























}





























?>