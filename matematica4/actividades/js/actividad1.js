$('.pnt').click(function(){

	if ($(this).hasClass('pinta')) {
		$(this).removeClass('pinta')
	}else{
		$(this).addClass('pinta')
	}

})

$('.enc').click(function(){

	if ($(this).hasClass('encierra')) {
		$(this).removeClass('encierra')
	}else{
		$(this).addClass('encierra')
	}

})