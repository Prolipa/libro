
$('.enc').click(function(){

	if ($(this).hasClass('selecImg')) {
		$(this).removeClass('selecImg');
		
	}else { 
		$(this).addClass('selecImg');
		
	}
	
	/*if ($(this).hasClass('encierra')) {
		$(this).addClass('subrayar')
	}else {
		$(this).addClass('encierra')
	}*/
	
});


function resolverN51() {
	
	if ($('.enc').hasClass('selecImg')) {
		
		total = 10;
		$('#txtNota').html(total.toFixed(2)+' ');
	}else { 
		total = 0;
		$('#txtNota').html(total.toFixed(2)+' ');
	}

		
	
}








