<?php


interface TableColumnsSQL
{
    public function getTableName();
    public function getAllColumnsWithTypeAsString();
    public function __get( $name);



}