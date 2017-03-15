<?php require_once('includes/header.php'); ?>

<br><br>		
<a href="#" class="button-1">Узнать подробнее</a>	
<br><br>	
<h2>Пример заголовка</h2>
<br><br>
<span class="podzagolovok">Подзаголовок</span>

<form action="#">
	<input class="dd-input" type="text" value="" placeholder="Инпут тайп текст">		
	<input class="button-1 dd-submit" type="submit" value="Хочу попробовать" placeholder="">
</form>		
	
<div class="form-order">
	<form action="#">
		<span class="title">Рассчитайте ваш персональный тариф</span>
		<span class="subtitle">Ваша дневная норма: <i>3 472</i>ккал/день</span>
		<div class="info clearfix">
			<div class="half">
				<span>Рекомендуемый тариф:</span>
				<b>Спорт Плюс</b>
				<em>3 500 ккал/день</em>
			</div>
			<div class="half">
				<span>5-разовое питание, <br> 7 дней</span>
				<i>Дни доставки:</i>
				<i>Пн, Ср, Пт</i>
			</div>
			<div class="price">
				<span>Цена: <i>7 400</i>руб.</span>
				<span><b>1 172</b>руб./день</span>
			</div>
			<p>Оставьте ваши контактные данные для уточнения адреса и времени бесплатной доставки</p>
			<div class="input-wrap">
				<input type="text">
			</div>
			<div class="input-wrap">
				<input type="text">
			</div>
			<input class="button-1 dd-submit dd-submit-left" type="submit" value="Заказать по телефону" placeholder="">
			<input class="button-1 dd-submit" type="submit" value="Заказать онлайн" placeholder="">
		</div>
	</form>
</div>

<?php require_once('includes/footer.php'); ?>

	
</body>
</html>

