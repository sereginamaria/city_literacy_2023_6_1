<?php


interface NoSqlSet
{
    public function getPassword( $login);
    public function isUserRegister( $login);
    public function getDataJSON( $login);


    public function setPassword( $login, $password);
    public function setUserRegisterTrue( $login);
    public function putDataJSON( $login, $json_data);



}