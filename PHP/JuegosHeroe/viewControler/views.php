<?php


class Vista{

    public static function  muestraLogin(){
        include_once '../Views/login.php';
    }

    public static function  muestraRegistro(){
        include_once '../Views/registro.php';
    }

    public static function  mostrarHome(){
        include_once '../Views/index.php';
    }

    public static function  mostrarAdmin(){
        include_once '../Views/admin.php';
    }

    public static function  mostrarUpdate(){
        include_once '../Views/update.php';
    }

    ///vISTAS CON DATOS

    // Cuando hasces un require tienes que ser concientes que solo se pueden usar los valores antes del require en este caso importa que se llamen igual
    
    public static function  mostrarDatosVistaAdmin($resultado){
        //La vista es una funcion que recibira
        require '../Views/admin.php';
    }

    public static function  mostrarDatosVistaUpdate($consulta){
        //La vista es una funcion que recibira
        require '../Views/update.php';
    }










}








?>