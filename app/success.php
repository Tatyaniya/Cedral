<?php

header("Content-Type: text/html; charset=utf-8");
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$email = htmlspecialchars($_POST["email"]);
$radioS1 = htmlspecialchars($_POST["radioS1"]);
$radioS2 = htmlspecialchars($_POST["radioS2"]);
$color = htmlspecialchars($_POST["color"]);


$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "tatyaniya@bigmir.net"; // e-mail администратора


// Отправка письма администратору сайта

$tema = "Cedral прислал новое сообщение";
$message_to_myemail = "Текст письма:
<br><br>
Имя: $name<br>
Телефон: $tel<br>
E-mail: $email<br>
Фактура 1: $radioS1<br>
Фактура 2: $radioS2<br>
Цвет: $color<br>
Источник (ссылка): $refferer
";

mail($myemail, $tema, $message_to_myemail, "From: Cedral <tatyaniya@bigmir.net> \r\n Reply-To: Barber shop \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


// Сохранение инфо о лидах в файл leads.xls

$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$name</td> <td>$tel</td>   <td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);

?>