$('.op1').click(function(){
	if($('img.op1').hasClass('enc')){
		
	}else{
		$('img.op1').addClass('enc');
		$('input.op1').addClass('resp');
		$('img.op2').removeClass('enc');
		$('img.op3').removeClass('enc');
	}
});

$('.op2').click(function(){
	if($('img.op2').hasClass('enc')){
		
	}else{
		$('img.op2').addClass('enc');
		$('input.op2').addClass('resp');
		$('img.op1').removeClass('enc');
		$('img.op3').removeClass('enc');
	}
});

$('.op3').click(function(){
	if($('img.op3').hasClass('enc')){
		
	}else{
		$('img.op3').addClass('enc');
		$('input.op3').addClass('resp');
		$('img.op1').removeClass('enc');
		$('img.op2').removeClass('enc');
	}
});

$('.op4').click(function(){
	if($('img.op4').hasClass('enc')){
		
	}else{
		$('img.op4').addClass('enc');
		$('input.op4').addClass('resp');
		$('img.op5').removeClass('enc');
		$('img.op6').removeClass('enc');
	}
});

$('.op5').click(function(){
	if($('img.op5').hasClass('enc')){
		
	}else{
		$('img.op5').addClass('enc');
		$('input.op5').addClass('resp');
		$('img.op4').removeClass('enc');
		$('img.op6').removeClass('enc');
	}
});

$('.op6').click(function(){
	if($('img.op6').hasClass('enc')){
		
	}else{
		$('img.op6').addClass('enc');
		$('input.op6').addClass('resp');
		$('img.op4').removeClass('enc');
		$('img.op5').removeClass('enc');
	}
});

$('.op7').click(function(){
	if($('img.op7').hasClass('enc')){
		
	}else{
		$('img.op7').addClass('enc');
		$('input.op7').addClass('resp');
		$('img.op8').removeClass('enc');
		$('img.op9').removeClass('enc');
	}
});

$('.op8').click(function(){
	if($('img.op8').hasClass('enc')){
		
	}else{
		$('img.op8').addClass('enc');
		$('input.op8').addClass('resp');
		$('img.op7').removeClass('enc');
		$('img.op9').removeClass('enc');
	}
});

$('.op9').click(function(){
	if($('img.op9').hasClass('enc')){
		
	}else{
		$('img.op9').addClass('enc');
		$('input.op9').addClass('resp');
		$('img.op7').removeClass('enc');
		$('img.op8').removeClass('enc');
	}
});

function califica(){
	if ($('input.op3').hasClass('resp')) {
		var nota1 = 3.3;
		$('img.op3').css({"border-color":"#33cc33","box-shadow":"2px 4px 4px #33cc33"});
		}else if ($('input.op2').hasClass('resp')){
			nota1 = 0;
			$('img.op2').css({"border-color":"#e83535","box-shadow":"2px 4px 4px #e83535"});
		}else{
			nota1 = 0;
			$('img.op1').css({"border-color":"#e83535","box-shadow":"2px 4px 4px #e83535"});
		}

		if ($('input.op6').hasClass('resp')) {
		var nota2 = 3.3;
		$('img.op6').css({"border-color":"#33cc33","box-shadow":"2px 4px 4px #33cc33"});
		}else if ($('input.op5').hasClass('resp')){
			nota2 = 0;
			$('img.op5').css({"border-color":"#e83535","box-shadow":"2px 4px 4px #e83535"});
		}else{
			nota2 = 0;
			$('img.op4').css({"border-color":"#e83535","box-shadow":"2px 4px 4px #e83535"});
		}

		if ($('input.op9').hasClass('resp')) {
		var nota3 = 3.4;
		$('img.op9').css({"border-color":"#33cc33","box-shadow":"2px 4px 4px #33cc33"});
		}else if ($('input.op8').hasClass('resp')){
			nota3 = 0;
			$('img.op8').css({"border-color":"#e83535","box-shadow":"2px 4px 4px #e83535"});
		}else{
			nota3 = 0;
			$('img.op7').css({"border-color":"#e83535","box-shadow":"2px 4px 4px #e83535"});
		}
		var nota = nota1+nota2+nota3
	document.getElementById('txtNota').innerHTML = nota.toFixed(2) + ' / 10';
	$(".btnCalificar").addClass('disabled')
}

