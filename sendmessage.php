<?php
$to = "powerclass17@gmail.com";
$phone = $_POST['phone'];
$email = $_POST['email'];
$uname = $_POST['uname'];
$text = $_POST['text'];
$checkbox_1 = $_POST['checkbox'];
$checkbox_2 = $_POST['checkbox2'];

$kkalklient = $_POST['kkalklient'];
$tarif = $_POST['tarif'];
$food = $_POST['food'];
$days = $_POST['days'];
$tarif_price = $_POST['tarif_price'];
$tarif_calory = $_POST['tarif_kalory'];
$how_much = $_POST['how_much'];
$how_much_day = $_POST['how_much_day'];

$city = $_POST['city'];
$ylica = $_POST['ylica'];
$house = $_POST['house'];
$podezd = $_POST['podezd'];
$domofon = $_POST['domofon'];
$etaj = $_POST['etaj'];
$numberkv = $_POST['numberkv'];
$what_day = $_POST['whatday'];
$timepackage = $_POST['timepackage'];



// Формирование заголовка письма
$subject  = "Новое сообщение";
$headers  = "From: info@starlight.space" . "\r\n";
$headers .= "Reply-To: info@starlight.space".  "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body>";
$msg .= "<h2>Новое сообщение</h2>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$uname."</p>\r\n";
$msg .= "<p><strong>Email:</strong> ".$email."</p>\r\n";
$msg .= "<p><strong>Сообщение:</strong> ".$text."</p>\r\n";
$msg .= "<p><strong>Выбрана радио кнопка:</strong> ".$checkbox_1."</p>\r\n";
$msg .= "<p><strong>Отмечен чекбокс:</strong> ".$checkbox_2."</p>\r\n";
$msg .= "<p><strong>День первой доставки:</strong> ".$what_day."</p>\r\n";
$msg .= "<p><strong>Время первой доставки:</strong> ".$timepackage."</p>\r\n";

$msg .= "<p><strong>Каллории клиента:</strong> ".$kkalklient."</p>\r\n";
$msg .= "<p><strong>Тариф:</strong> ".$tarif."</p>\r\n";
$msg .= "<p><strong>Стоимость:</strong> ".$tarif_price."</p>\r\n";
$msg .= "<p><strong>Кол-во калорий в выбранном тарифе:</strong> ".$tarif_calory."</p>\r\n";
$msg .= "<p><strong>Кол-во приемов пищи:</strong> ".$how_much."</p>\r\n";
$msg .= "<p><strong>Кол-во дней приема:</strong> ".$how_much_day."</p>\r\n";
$msg .= "<p><strong>Еды в день:</strong> ".$food."</p>\r\n";
$msg .= "<p><strong>Дней в неделю:</strong> ".$days."</p>\r\n";

$msg .= "<p><strong>Город:</strong> ".$city."</p>\r\n";
$msg .= "<p><strong>Улица:</strong> ".$ylica."</p>\r\n";
$msg .= "<p><strong>Дом:</strong> ".$house."</p>\r\n";
$msg .= "<p><strong>Подъезд:</strong> ".$podezd."</p>\r\n";
$msg .= "<p><strong>Домофон:</strong> ".$domofon."</p>\r\n";
$msg .= "<p><strong>Этаж:</strong> ".$etaj."</p>\r\n";
$msg .= "<p><strong>Номер квартиры/офиса:</strong> ".$numberkv."</p>\r\n";


$msg .= "</body></html>";


// отправка сообщения
@mail($to, $subject, $msg, $headers);

?>