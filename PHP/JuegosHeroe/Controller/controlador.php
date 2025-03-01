<?php

session_start();
require_once '../viewControler/views.php';
require_once '../modelo/dbUsuario.php';


class Controller{

    public function controlLogin(){
        $errores ="";
    
        //Debo de recibir los datos
        if(isset($_POST['tmp_boton_login'])){
            
            if(isset($_POST['correo']) && !empty($_POST['correo'])){
                $correo = $_POST['correo'];
               
            }
            if(isset($_POST['contra']) && !empty($_POST['contra'])){
                $contra = $_POST['contra'];
                //echo $contra;
            }

            if(empty($_POST['contra']) ||  empty($_POST['correo'])  ){
                echo "El email y la contraseña son obligatorios.";
                Vista::muestraLogin();
                return;
            }

            $consulta = dbUsuario::comprobarEmail($correo);

            if(!$consulta){
                echo "El usuario no existe";
                Vista::login();
                return; // Salir si no hay resultados
            }

            if($consulta){
                if($consulta['password']== $contra){
                    // Creamos una session.
                    $_SESSION['usuarioLogueado']=[
                        "id" => $consulta['id'],
                        "nick" => $consulta['nick'],
                        "email" => $consulta['email'],
                        "nombre" => $consulta['nombre'],
                        "apellidos" => $consulta['apellidos'],
                        "rol" => $consulta['rol'],
                    ];
                    echo print_r($_SESSION['usuarioLogueado']);
                    Vista::mostrarHome();
                }
            }
        }else{
            Vista::muestraLogin();
        }


    }



    public function revisaLogin(){

        if(isset($_POST['tmp_boton_registro'])){

            if(isset($_POST['nick']) && !empty($_POST['nick'])){
                $nick = $_POST['nick'];
            }

            if(isset($_POST['email']) && !empty($_POST['email'])){
                $email = $_POST['email'];
            }
            
            if(isset($_POST['nombre']) && !empty($_POST['nombre'])){
                $nombre = $_POST['nombre'];
            }

            if(isset($_POST['apel']) && !empty($_POST['apel'])){
                $apel = $_POST['apel'];
            }
            if(isset($_POST['contra']) && !empty($_POST['contra'])){
                $contra = $_POST['contra'];
            }

            // Recibimos los valores.
            //Hacer inyeccion.

            if(!empty($_POST['nick'])&&
            !empty($_POST['email'])&&
            !empty($_POST['nombre'])&&
            !empty($_POST['apel'])&&
            !empty($_POST['contra'])
        ){
            //Aqui
            dbUsuario::insertarUsuario($nick,$email,$nombre,$apel,$contra);
            Vista::mostrarAdmin();            
        }
        }else{
            Vista::muestraRegistro();
        }

    }

    function muestraDatosUsuario(){
        $resultado = dbUsuario::usuariosTotales();
        //Si quiero los resultados solo tengo que meter el require de la pagina que quiero
        //require  '../Views/admin.php';
        Vista::mostrarDatosVistaAdmin($resultado);  

    }



    //-----------------------------------------admin



    function updateBase(){

        if(isset($_GET['id']) && !empty($_GET['id'])){
            $indice = $_GET['id'];
            echo $indice;
        }

        if($indice){
            //LLmada y datos de la base de datos
            $consulta = dbUsuario::sacarDatosID($indice);
            if($consulta){

        //Si quiero los resultados solo tengo que meter el require de la pagina que quiero
        //require  '../Views/admin.php';
            Vista::mostrarDatosVistaUpdate($consulta);
            }

        }




        Vista::mostrarUpdate();



    }
    




















}










$evento = new Controller;


// Botones del index

//Botones del formulario

//botones de login

if(isset($_POST['tmp_boton_login'])){
    $evento ->controlLogin();
}



//Botones del registro
if(isset($_POST['tmp_boton_registro'])){

    $evento -> revisaLogin();
}


if(isset($_POST['tmp_admin_mostrar_datos'])){
    $evento -> muestraDatosUsuario();
}

if(isset($_GET['tmp_boton_update'])){
    $evento ->updateBase();
}













?>