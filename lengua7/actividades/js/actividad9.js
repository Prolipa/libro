$("#txtNota").html("0");
$("#n_pagina").html("14");
var titulos = "aplico";
$('.enc').click(function(){
	
	if ($(this).hasClass('encierra')) {
		$(this).removeClass('encierra')
	}else{
		$(this).addClass('encierra')
	}
});
