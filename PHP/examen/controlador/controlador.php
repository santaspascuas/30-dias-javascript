<?php

require_once "../modelo/consultas.php";
require_once "../vista/vista.php";

class Controller{



    // MOSTRAMOS EL CONTENIDO

    public function mostrarDatos(){
        $resultado = Atlas::mostrardatosBase();
        if($resultado){
            Vista::Mostrardatosenlavista($resultado);//Mostramos los datos

        }
    }

    public function buscarDatos(){
        if(isset($_POST['buscar'])){
            echo " Estoy en la pagina de buscar datos";
            Vista::MostrarBuscardor();
        }else{
            Vista::MostrarIndex();
        }
    }





    // eSTOY EN EL BUSCADOR Y VOY A BUSCA
    public function buscardatosdesdeBuscador(){

        if(isset($_POST['tmp_buscar'])){
            $capital ="";
            $pais = "";
            Vista::MostrarBuscardor();

            if(isset($_POST['pais'])){
                if(!empty($_POST['pais'])){
                    $pais = $_POST['pais'];
                }
            }

            if(isset($_POST['capital'])){
                if(!empty($_POST['capital'])){
                    $capital = $_POST['capital'];
                }
            }

            $resultado = Atlas::buscarPais($pais);
            if($resultado){
                echo "El pais buscado es :".  $resultado['pais'];

            }else{
                echo "El pais buscado no existe en la base de datos";
            }

        }else{
            Vista::MostrarIndex();
        }
    }


    //Registro de pais 


    public function mostrarRegistro(){
        if(isset($_POST['nueva'])){
            Vista::MostarRegistro();
        }
    }

    public function registroPais(){

        if(isset($_POST['tmp_añadir_pais'])){
            $capital ="";
            $pais = "";
            Vista::MostarRegistro();

            if(isset($_POST['pais'])){
                if(!empty($_POST['pais'])){
                    $pais = $_POST['pais'];
                }
            }

            if(isset($_POST['capital'])){
                if(!empty($_POST['capital'])){
                    $capital = $_POST['capital'];
                }
            }


            $resultado = Atlas::buscarPais($pais);

            if(!$resultado){
                Atlas::insertarDatos($pais,$capital);
                echo "Se han añadido los datos correctamente";
            }else{
                echo "El pais ya existe en la base de datos";
            }

        }else{
            Vista::MostrarIndex();
        }

    }


    /// Eliminar Paises 


    public function eliminarPaises(){
        if(isset($_POST['eliminar'])){
            //Vamos a llamar a la funcion de los datos
            $resultado = Atlas::mostrardatosBase();
            Vista::MostrardatosenlavistaEliminar($resultado);    
        }else{
            Vista::MostrarIndex();
        }
    }

    public function eliminarPaisesdesdeEliminar(){

        if(isset($_POST['tmp_eliminar_paises'])){
                $capital ="";
                $pais = ""; 
    
                if(isset($_POST['pais'])){
                    if(!empty($_POST['pais'])){
                        $pais = $_POST['pais'];
                    }
                }
    
                if(isset($_POST['capital'])){
                    if(!empty($_POST['capital'])){
                        $capital = $_POST['capital'];
                    }
                }
                //Funcion de eliminar los datos   
                Atlas::borrarDatos($pais);

        
    }
}

public function MostrarVistaUpdate(){
    if(isset($_POST['modificar'])){
        Vista::MostarUpdateRegistros();
    }else{
        Vista::MostrarIndex();
    }
}


public function modificarDatosdesdeUpdate(){

    if(isset($_POST['tmp_modificar_datos_update'])){

        $capital ="";
        $pais = "";

        //Mostramos los datos
        $resultado = Atlas::mostrardatosBase();
        //
        Vista::MostarUpdateRegistrosconDatos($resultado);
        if(isset($_POST['pais'])){
            if(!empty($_POST['pais'])){
                $pais = $_POST['pais'];
            }
        }

        if(isset($_POST['capital'])){
            if(!empty($_POST['capital'])){
                $capital = $_POST['capital'];
            }
        }

        Atlas:: modificarDatos($pais,$capital);
        echo " Se ha modificado el pais correctamente";
    }






}




















}

$accion = new Controller();



if(isset($_POST['mostrar'])){
    $accion->mostrarDatos();
}

if(isset($_POST['buscar'])){
    $accion ->buscarDatos();
}

if(isset($_POST['tmp_buscar'])){
    $accion ->buscardatosdesdeBuscador();
}


if(isset($_POST['nueva'])){
    $accion ->mostrarRegistro();
}

if(isset($_POST['tmp_añadir_pais'])){

    $accion ->registroPais();
}

if(isset($_POST['eliminar'])){

    $accion ->eliminarPaises();
}

if(isset($_POST['tmp_eliminar_paises'])){
    $accion ->eliminarPaisesdesdeEliminar();
}

if(isset($_POST['tmp_eliminar_paises'])){
    $accion ->eliminarPaisesdesdeEliminar();
}

if(isset($_POST['modificar'])){
    $accion ->MostrarVistaUpdate();
}

if(isset($_POST['tmp_modificar_datos_update'])){
    $accion ->modificarDatosdesdeUpdate();
}



















?>