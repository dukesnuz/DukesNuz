<?php 
#Register login logout retrieve password as in ch 18 - mysqli_connect.php

DEFINE('DB_USER','root');
DEFINE('DB_PASSWORD', 'salvatore');
DEFINE('DB_HOST', 'localhost');
DEFINE('DB_NAME', 'ch18');

$dbc = @mysqli_connect (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);


//error handler below used instead of usong die()
if(!$dbc)
   {
   triger_error('Could not connect to MySQL:' . mysqli_connect_error() );
   }else{
   mysqli_set_charset($dbc, 'utf8');
   }
