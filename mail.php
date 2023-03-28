<?php

$name = $_POST['name'];
$email = $_POST['email'];
$telephone = $_POST['telephone'];
$message = $_POST['message'];

$subject = "Надання адвокатських послуг";

$mailHeader = "From :".$name."<".$email.">\r\n Tel : ".$telephone."\r\n";

$recipient = "deasmond228@gmail.com";

mail($recipient,$subject,$message,$mailHeader) or die("Error!");

echo"Message send";
?>