<?php

$frm_name  = trim($_POST["sender_name"]);
$recepient = "wd@wdeveloper.hol.es ";
$sitename  = "Web Developer";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["sender_name"]);
$email = trim($_POST["sender_email"]);
$message = trim($_POST["sender_text"]);

$message = "
E-mail: $email <br>
Имя: $name <br>
Сообщение: $message
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
