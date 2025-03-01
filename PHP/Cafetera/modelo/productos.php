<?php
require_once "../db/db.php";



class  Productos {





    public static function mostrarDatos(){
        try{
            $conexion = db::conectarBase();

            //Hago la consulta
    
            $stmt = $conexion->prepare('SELECT * FROM CAFETERA');
    
            $stmt ->execute();
    
            $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
    
            return $resultado;
        }catch(PDOException $e){
            return nul;
        }finally{
            db::cerrarBase();
        }

    }

    public static function updateDatos($cafe,$leche,$agua,$limon,$alcohol){

        try{
            $conexion = db::conectarBase();
            //Hago la consulta
            $sql = "UPDATE CAFETERA 
                SET cafe = :cafe, leche = :leche, agua = :agua, limon = :limon, alcohol = :alcohol";
            
            $stmt = $conexion->prepare($sql);

            //Paramas
            $stmt ->bindParam(":cafe",$cafe,PDO::PARAM_INT);
            $stmt ->bindParam(":leche",$leche,PDO::PARAM_INT);
            $stmt ->bindParam(":agua",$agua,PDO::PARAM_INT);
            $stmt ->bindParam(":limon",$limon,PDO::PARAM_INT);
            $stmt ->bindParam(":alcohol",$alcohol,PDO::PARAM_INT);
            $stmt->execute();
            echo "Datos actualizados correctamente.";
        }catch(PDOException $e){
            echo "Error en la actualización: " . $e->getMessage();
        }finally{
            db::cerrarBase();
        }
    }    






















}










?>

