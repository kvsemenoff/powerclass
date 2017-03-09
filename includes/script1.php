<!-- across descriptor -->
<?php
$mass = 'header-top.php shtraf.php how.php testimonials.php tarif.php menu.php paralax.php want.php often.php questions.php';
$res = explode(' ', $mass);
$content = 
"<section class=\"section section_padding\">
<div class=\" container\">
	<div class=\"row\">
		<div class=\"col-md-12\">
		</div>
	</div>
</div>
</section>
";
$file1 = fopen('../index.php', 'w');
fwrite($file1, "<?php require_once('includes/header.php'); ?>\n");

for($i = 0; $i < count($res); $i++){
	echo `touch $res[$i]`;
	$file2 = fopen($res[$i], "w") or die('не удалось открыть файл');
	fwrite($file2, $content);
	fclose($file2);
	fwrite($file1, "<?php require_once('includes/$res[$i]'); ?>"."\n");
}
fwrite($file1, "\n</body>\n</html>");
fclose($file1);
?>





