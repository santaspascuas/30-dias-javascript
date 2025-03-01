<?php
require_once "../modelo/Usuariodb.php";


class Controlador{




    public function registroUsuario(){
        $nick = "";
        $email= "";
        $nombre ="";
        $apelli ="";
        $contra= "";

        if(isset($_POST['tmp_boton_registro'])){


            if(isset($_POST['nick'])){
                if(!empty($_POST['nick'])){
                    $nick = $_POST['nick'];
                }
            }

            
            if(isset($_POST['email'])){
                if(!empty($_POST['email'])){
                    $email = $_POST['email'];
                }
            }

            if(isset($_POST['nombre'])){
                if(!empty($_POST['nombre'])){
                    $nombre = $_POST['nombre'];
                }
            }

            if(isset($_POST['apel'])){
                if(!empty($_POST['apel'])){
                    $apelli = $_POST['apel'];
                }
            }

            if(isset($_POST['contra'])){
                if(!empty($_POST['contra'])){
                    $contra = $_POST['contra'];
                }
            }
            
            Usuariorequest::registraUsuario($nick,$email,$nombre,$apelli,$contra);
        }
    }




    public function comprobarEmail(){
        $correo="";
        $contra="";


        if(isset($_POST['correo'])){
            if(!empty($_POST['correo'])){
                $correo = $_POST['correo'];
            }
        }

        
        if(isset($_POST['contra'])){
            if(!empty($_POST['contra'])){
                $contra = $_POST['contra'];
            }
        }

        $consulta =  Usuariorequest::comprobarEmail($correo);

        if($consulta){
            echo "la consulta ha funcionado";
        }
    }



    public function actualizarDatos(){

        //Sacamos los datos

        $consulta = Usuariorequest::usuariosTotales();


       $consulta[0]['email'] = "bryan@gmail.com";

       // Aqui debemos hacer un update

       



    }














}


$accion = new Controlador();



if(isset($_POST['tmp_boton_registro'])){
 $accion ->registroUsuario();
}

if(isset($_POST['tmp_boton_login'])){

    $accion ->comprobarEmail();
   }

if(isset($_POST['tmp_usuarios_nuevos'])){
    $accion ->actualizarDatos();

}   





















?>
