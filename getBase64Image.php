<?php
$filname = "C:/Users/stagiaire/Downloads/USBWebserver v8.6/root/jquery/Ayoub/checkBox/img/off.png";
$fileContent = file_get_contents($filname);
echo base64_encode($fileContent);