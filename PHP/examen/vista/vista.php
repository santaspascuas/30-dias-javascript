<?php

class Vista{


    public static function MostrarVistadeDatos(){

        include_once "../pages/datos.php";
    }

    public static function MostrarBuscardor(){

        include_once "../pages/buscarDatos.php";
    }

    public static function MostrarIndex(){

        include_once "../pages/index.php";
    }




    public static function MostarRegistro(){

        include_once "../pages/registro.php";
    }


    public static function MostarEliminarDatos(){
        include_once "../pages/eliminarDatos.php";
    }


    public static function MostarUpdateRegistros(){
        include_once "../pages/updateDatos.php";
    }









    ////vISTAS CON DATOS 

    public static function Mostrardatosenlavista($resultado){
        require "../pages/datos.php";
    }

    public static function MostrardatosenlavistaEliminar($resultado){
        require "../pages/eliminarDatos.php";
    }

    public static function MostarUpdateRegistrosconDatos($resultado){
        require "../pages/updateDatos.php";
    }










    }



















?>