<?php
require_once "../modelo/productos.php";


class Controller {


    public function prepararCafe(){

        $limon =0;
        $agua = 0;
        $cafe = 0;
        $leche =0;
        $alcohol =0;

        //aCCIONES DE CAFE

        if(isset($_POST)){

            if(isset($_POST['cafe'])){
                if(!empty($_POST['cafe'])){
                    $cafe = $_POST['cafe'];
                }
            }

            if(isset($_POST['leche'])){

                if(!empty($_POST['leche'])){
                    $leche = $_POST['leche'];
                }
               
            }

    
            if(isset($_POST['agua'])){
                if(!empty($_POST['agua'])){
                    $agua = $_POST['agua'];
                }
               
            }
            
            if(isset($_POST['limon'])){
                if(!empty($_POST['limon'])){
                    $limon = $_POST['limon'];
                }
            }
                
            if(isset($_POST['alcohol'])){
                if(!empty($_POST['alcohol'])){
                    $alcohol = $_POST['alcohol'];
                }
            }

            if($cafe == 1 &&
              $leche == 0 &&
              $agua == 0 &&
              $limon == 0 &&
              $alcohol == 0){

                echo "Expresso";
                self::modificarCafetera($cafe,$leche,$agua,$limon,$alcohol);
              }


              if($cafe == 3 &&
              $leche == 0 &&
              $agua == 0 &&
              $limon == 0 &&
              $alcohol == 0){
                echo "Luengo";
                self::modificarCafetera($cafe,$leche,$agua,$limon,$alcohol);
              }


              if(($cafe > $leche) &&
              $agua == 0 &&
              $limon == 0 &&
              $alcohol == 0){
                echo "Macchiato";
                self::modificarCafetera($cafe,$leche,$agua,$limon,$alcohol);
              }

              if(($cafe > $leche)&&
              $agua == 0 &&
              $limon == 0 &&
              $alcohol == 0){
                echo "galao";
                self::modificarCafetera($cafe,$leche,$agua,$limon,$alcohol);
              }

        }
    }













    public function reponerProductos(){

        if(isset($_POST['reponer'])){

            Productos::updateDatos(9,9,9,9,9);
           
        }

    } 
    
    public function reinicioProductos(){

        if(isset($_POST['limpiar'])){

            Productos::updateDatos(0,0,0,0,0);
           
        }


    }
    
    public function modificarCafetera($cafe,$leche,$agua,$limon,$alcohol){
        $resultado = Productos::mostrarDatos();
        echo $resultado['cafe'] = $resultado['cafe']-$cafe;
        echo $resultado['leche'] = $resultado['leche']-$leche;
        echo $resultado['agua'] = $resultado['agua']-$agua;
        echo $resultado['limon'] = $resultado['limon']-$limon;
        echo $resultado['alcohol'] = $resultado['alcohol']-$alcohol;

        //insertando
        Productos::updateDatos($resultado['cafe'],$resultado['leche'],
        $resultado['agua'],$resultado['limon'],
        $resultado['alcohol']);
    }






}


$accion = new Controller;



if(isset($_POST['preparar'])){
    $accion ->prepararCafe();
}

if(isset($_POST['reponer'])){
    $accion ->reponerProductos();
}

if(isset($_POST['limpiar'])){
    $accion ->reinicioProductos();
}

















































?>