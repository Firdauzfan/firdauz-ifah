<?php
$server = "db4free.net";
$user = "firdauz";
$password = "webkuafansolo";
$nama_database = "nikahan";

$conn = mysqli_connect($server, $user, $password, $nama_database);

if( !$conn ){
    die("Gagal terhubung dengan database: " . mysqli_connect_error());
}
   
?>