<?php

$name = $_POST['name'];
$email = $_POST['email'];
$telephone = $_POST['telephone'];
$message = $_POST['message'];



$mailHeader = "From :".$name."<".$email.">\r\n Tel : ".$telephone."\r\n";

$recipient = "deasmond228@gmail.com";

mail($recipient,"Надання адвокатських послуг",$message,$mailHeader) or die("Error!");

echo"Message send";
?>