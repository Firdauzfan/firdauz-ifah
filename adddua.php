<?php

// Check If form submitted, insert form data into users table.
if(isset($_POST['submitdua'])) {
$name = $_POST['nama'];
$hubungan = $_POST['hubungan'];
$email = $_POST['email'];
$handphone = $_POST['handphone'];
$alamat = $_POST['alamat'];
$doa = $_POST['doa'];

// include database connection file
include_once("db_connection.php");
$cek=mysqli_query($conn, "SELECT * from doaucapan where Nama_Pengirim='$name'");

// Insert user data into table
$result = mysqli_query($conn, "INSERT INTO doaucapan(Nama_Pengirim,Email,Alamat,Hubungan,Phone,UcapanDoa,DateCreated) VALUES('$name','$email','$alamat','$hubungan','$handphone','$doa',NOW()+ INTERVAL 7 HOUR)");

// Show message when user added
    if( $result ) {
        // kalau berhasil alihkan ke halaman index.php dengan status=sukses
        header('Location: index.php?status=sukses');
    } else {
        // kalau gagal alihkan ke halaman indek.php dengan status=gagal
        header('Location: index.php?status=gagal');
    }
}
?>