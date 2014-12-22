<?php
/**
 * Created by PhpStorm.
 * User: Eldhelion
 * Date: 22/12/2014
 * Time: 10:38
 */
include_once (ABSPATH . WPINC.'/general-template.php');
get_header();
?>

<script>
	$(function() {
		$( "#dialog" ).dialog();
	});
	$(document).ready(function (){
		$("#cielo-form").submit();
	});
</script>
<div id="dialog" title="Atenção">
	<p>Por favor, aguente um instante enquanto fazemos o redirecionamento para o site da Cielo.</p>
</div>
<div style="display: none;">
	<form id="cielo-form" action="https://cieloecommerce.cielo.com.br/Transactional/Order/Index" method="post">
	<?php
	foreach ($data as $index => $input) {
		echo "<input name='$index' value='$input'>";
	}
	?>
	</form>
</div>
<?php
get_footer();
?>