$('.op1').click(function(){
	if($('span.op1').hasClass('enc')){
		
	}else{
		$('span.op1').addClass('enc');
		$('input.op1').addClass('resp');
		$('span.op2').removeClass('enc');
		$('span.op3').removeClass('enc');
	}
});

$('.op2').click(function(){
	if($('span.op2').hasClass('enc')){
		
	}else{
		$('span.op2').addClass('enc');
		$('input.op2').addClass('resp');
		$('span.op1').removeClass('enc');
		$('span.op3').removeClass('enc');
	}
});

$('.op3').click(function(){
	if($('span.op3').hasClass('enc')){
		
	}else{
		$('span.op3').addClass('enc');
		$('input.op3').addClass('resp');
		$('span.op1').removeClass('enc');
		$('span.op2').removeClass('enc');
	}
});

$('.op4').click(function(){
	if($('span.op4').hasClass('enc')){
		
	}else{
		$('span.op4').addClass('enc');
		$('input.op4').addClass('resp');
		$('span.op5').removeClass('enc');
		$('span.op6').removeClass('enc');
	}
});

$('.op5').click(function(){
	if($('span.op5').hasClass('enc')){
		
	}else{
		$('span.op5').addClass('enc');
		$('input.op5').addClass('resp');
		$('span.op4').removeClass('enc');
		$('span.op6').removeClass('enc');
	}
});

$('.op6').click(function(){
	if($('span.op6').hasClass('enc')){
		
	}else{
		$('span.op6').addClass('enc');
		$('input.op6').addClass('resp');
		$('span.op4').removeClass('enc');
		$('span.op5').removeClass('enc');
	}
});

$('.op7').click(function(){
	if($('span.op7').hasClass('enc')){
		
	}else{
		$('span.op7').addClass('enc');
		$('input.op7').addClass('resp');
		$('span.op8').removeClass('enc');
		$('span.op9').removeClass('enc');
	}
});

$('.op8').click(function(){
	if($('span.op8').hasClass('enc')){
		
	}else{
		$('span.op8').addClass('enc');
		$('input.op8').addClass('resp');
		$('span.op7').removeClass('enc');
		$('span.op9').removeClass('enc');
	}
});

$('.op9').click(function(){
	if($('span.op9').hasClass('enc')){
		
	}else{
		$('span.op9').addClass('enc');
		$('input.op9').addClass('resp');
		$('span.op7').removeClass('enc');
		$('span.op8').removeClass('enc');
	}
});

function califica(){
	if ($('input.op3').hasClass('resp')) {
		var nota1 = 3.3;
		$('span.op3').css({"border-color":"#33cc33","box-shadow":"2px 4px 4px #33cc33"});
		}else if ($('input.op2').hasClass('resp')){
			nota1 = 0;
			$('span.op2').css({"border-color":"#e83535","box-shadow":"2px 4px 4px #e83535"});
		}else{
			nota1 = 0;
			$('span.op1').css({"border-color":"#e83535","box-shadow":"2px 4px 4px #e83535"});
		}

		if ($('input.op6').hasClass('resp')) {
		var nota2 = 3.3;
		$('span.op6').css({"border-color":"#33cc33","box-shadow":"2px 4px 4px #33cc33"});
		}else if ($('input.op5').hasClass('resp')){
			nota2 = 0;
			$('span.op5').css({"border-color":"#e83535","box-shadow":"2px 4px 4px #e83535"});
		}else{
			nota2 = 0;
			$('span.op4').css({"border-color":"#e83535","box-shadow":"2px 4px 4px #e83535"});
		}

		if ($('input.op9').hasClass('resp')) {
		var nota3 = 3.4;
		$('span.op9').css({"border-color":"#33cc33","box-shadow":"2px 4px 4px #33cc33"});
		}else if ($('input.op8').hasClass('resp')){
			nota3 = 0;
			$('span.op8').css({"border-color":"#e83535","box-shadow":"2px 4px 4px #e83535"});
		}else{
			nota3 = 0;
			$('span.op7').css({"border-color":"#e83535","box-shadow":"2px 4px 4px #e83535"});
		}
		var nota = nota1+nota2+nota3
	document.getElementById('txtNota').innerHTML = nota.toFixed(2) + ' / 10';
	$(".btnCalificar").addClass('disabled')
}

