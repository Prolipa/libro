
  function Inicio() {
      $(".panel-collapse").addClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    function Preg1(){

      	var val0 = Math.round(Math.random() * (1000 - 100) + 100);
	    var sig = Math.round(Math.random() * (4 - 1) + 1);
	    var patron0 = Math.round(Math.random() * (20 - 10) + 10);
	    var patron1 = Math.round(Math.random() * (20 - 10) + 10);

	    var contenidos = [];
	    contenidos[0] = '<span>a) &nbsp;Patrón:&nbsp;&nbsp;' +
	        '<select class="form-control" id="sel00" style="width: 60px; font-size: 17px;" display: inline-block;><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
	        '<input type="number" id="p00Patron0" class="form-control" style="width: 70px; display: inline-block;">,&nbsp;&nbsp;&nbsp;&nbsp; ' +
	        '<select class="form-control" id="selMul00" style="width: 60px; font-size: 17px; display: inline-block;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
	        '<input type="number" id="p00PatronMul0" class="form-control" style="width: 70px; display: inline-block;"><br><br> ' +
	        'Sucesión: &nbsp;&nbsp;<span class="n1" id="p00T0">' + (val0 + (patron0)) + '</span>, &nbsp;&nbsp; ' +
	        '<span class="n1" id="p00T0_0">' + (val0 + (patron0 * 2)) + '</span>, &nbsp;&nbsp; ' +
	        '<span class="n1" id="p00T0_1">' + ((val0 + (patron0 * 2)) * (patron1)) +
	        ', &nbsp;&nbsp;' + (((val0 + (patron0 * 2)) * (patron1)) + (patron0)) +
	        ', &nbsp;&nbsp;' + ((((val0 + (patron0 * 2)) * (patron1)) + (patron0)) * (patron1)) +
	        ', &nbsp;&nbsp;<span class="n1" id="p00T0_fin">' + (((((val0 + (patron0 * 2)) * (patron1)) + (patron0)) * (patron1)) + (patron0)) + '</span>, </span>' +
	        '<input type="number" id="suc0MulP1" class="form-control" style="width: 120px; display: inline-block;">, ' +
	        '<input type="number" id="suc0SumP1" class="form-control" style="width: 120px; display: inline-block;"><br>';


	    $('#sucesion0').append(contenidos[0]);

    }


    function Preg3(){
    	var ordena1 = [
 			'<div class="eq-c col-sm-12"> <li>&nbsp;&nbsp; <span class="n5"> <img src="img/i1_p176_act3.png" class="img-responsive" style="display: inline-block;">&nbsp;&nbsp; <input type="text" id="rOSF1" class="form-control respuestas" style="width: 90px;" placeholder="Ej: 1/2"> &nbsp;&nbsp;<&nbsp;&nbsp; <input type="text" id="rOSF2" class="form-control respuestas" style="width: 90px;" placeholder="Ej: 1/2"> &nbsp;&nbsp;<&nbsp;&nbsp; <input type="text" id="rOSF3" class="form-control respuestas" style="width: 90px;" placeholder="Ej: 1/2"> &nbsp;&nbsp;<&nbsp;&nbsp; <input type="text" id="rOSF4" class="form-control respuestas" style="width: 90px;" placeholder="Ej: 1/2"> &nbsp;&nbsp;<&nbsp;&nbsp; <input type="text" id="rOSF5" class="form-control respuestas" style="width: 90px;" placeholder="Ej: 1/2"> </span> </li><br><br> </div>',
 			'<div class="eq-c col-sm-12"> <li>&nbsp;&nbsp; <span class="n5"> <img src="img/i2_p176_act3.png" class="img-responsive" style="display: inline-block;">&nbsp;&nbsp; <input type="text" id="rOSF6" class="form-control respuestas" style="width: 90px;" placeholder="Ej: 1/2"> &nbsp;&nbsp;<&nbsp;&nbsp; <input type="text" id="rOSF7" class="form-control respuestas" style="width: 90px;" placeholder="Ej: 1/2"> &nbsp;&nbsp;<&nbsp;&nbsp; <input type="text" id="rOSF8" class="form-control respuestas" style="width: 90px;" placeholder="Ej: 1/2"> &nbsp;&nbsp;<&nbsp;&nbsp; <input type="text" id="rOSF9" class="form-control respuestas" style="width: 90px;" placeholder="Ej: 1/2"> &nbsp;&nbsp;<&nbsp;&nbsp; <input type="text" id="rOSF10" class="form-control respuestas" style="width: 90px;" placeholder="Ej: 1/2"> </span> </li><br><br> </div>',
    	];
    	ordena1.sort(f_randomico);
    	$('#ordena1').append(ordena1);
    }


    var rImgKg1 = 0;
    var rImgKg2 = 0;
    var rImgKg3 = 0;
    function Preg5(){
        var destinosKg = [
        '<div align="center"><span class="dest"> Se grafica con el uso de segmentos de recta. </span><br> <div class="r_imgKg i_imgKg1"></div></div>',
        '<div align="center"><span class="dest"> Es el gráfico de un círculo dividido en sectores. </span><br> <div class="r_imgKg i_imgKg2"></div></div>',
        '<div align="center"><span class="dest"> Se usan superficies rectangulares cuya altura es la frecuencia. </span><br> <div class="r_imgKg i_imgKg3"></div></div>',
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<img src='img/i2_p176_act5.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'>");
            imgKg.push("<img src='img/i3_p176_act5.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'>");
            imgKg.push("<img src='img/i1_p176_act5.png' class='imgKg3' id='imgKg3' style='cursor: pointer;'>");
        //imgKg.sort(f_randomico);
        $(".imgKg").append(imgKg);
        $(".imgKg img").draggable({ //arrastramos
            revert: "invalid",
            zIndex:5,
            containment: "#activity",
            scroll: false,
        });


        $(".r_imgKg").droppable({
        drop: function(e, ui) {
            if(ui.draggable.hasClass("imgKg1")){
                rImgKg1++;
            }else {
                if(ui.draggable.hasClass("imgKg2")){
                    rImgKg2++;
                }else {
                    rImgKg3++;
                }
            }

            ui.draggable.attr("style", ""); //vaciar estilos para ubicar la imagen sobre el destino
            $(this).append(ui.draggable); //añadir el contenido al destino
            $(this).find(ui.draggable).draggable({disabled:true});//deshabilitar el arrastre, despues de soltar en el destino

        }
        });
    }



    function Preg6(){
    	var observa1 = [
 			'<div class="col-sm-12"><li>&nbsp;&nbsp;¿Cuántos círculos tiene la imagen?&nbsp;&nbsp;<input type="number" id="rOIR9" class="form-control respuestas input-sm" style="width: 70px;"> </li><br></div>',
 			'<div class="col-sm-12"> <li>&nbsp;&nbsp; ¿Cuántos círculos hay de cada color?<br> <div class="col-sm-6" align="center" style="display: inline-block; margin-bottom: 5px;"> Verdes:&nbsp;&nbsp;<input type="number" id="rOIR1" class="form-control respuestas input-sm" style="width: 70px;"><br> </div> <div class="col-sm-6" align="center" style="display: inline-block; margin-bottom: 5px;"> Azules:&nbsp;&nbsp;<input type="number" id="rOIR2" class="form-control respuestas input-sm" style="width: 70px;"><br> </div> <div class="col-sm-6" align="center" style="display: inline-block; margin-bottom: 5px;"> Rojos:&nbsp;&nbsp;<input type="number" id="rOIR3" class="form-control respuestas input-sm" style="width: 70px;"><br> </div> <div class="col-sm-6" align="center" style="display: inline-block; margin-bottom: 5px;"> Amarillos:&nbsp;&nbsp;<input type="number" id="rOIR4" class="form-control respuestas input-sm" style="width: 70px;"><br> </div> </li><br><br> </div>',
 			'<div class="col-sm-12"><br> <li>&nbsp;&nbsp; <b>Expresa</b> la probabilidad de que salga cada color al girar la ruleta.<br> <div class="col-sm-6" align="center" style="display: inline-block; margin-bottom: 5px;"> <span style="background-color: #C8EEDA; border-radius: 10px; padding: 5px;">P<sub>verde</sub></span>&nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rOIR5" class="form-control respuestas input-sm" style="width: 90px;" placeholder="Ej: 1/2"><br> </div> <div class="col-sm-6" align="center" style="display: inline-block; margin-bottom: 5px;"> <span style="background-color: #C8D8EE; border-radius: 10px; padding: 5px;">P<sub>azul</sub></span>&nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rOIR6" class="form-control respuestas input-sm" style="width: 90px;" placeholder="Ej: 1/2"><br> </div> <div class="col-sm-6" align="center" style="display: inline-block; margin-bottom: 5px;"> <span style="background-color: #EEC8C8; border-radius: 10px; padding: 5px;">P<sub>rojo</sub></span>&nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rOIR7" class="form-control respuestas input-sm" style="width: 90px;" placeholder="Ej: 1/2"><br> </div> <div class="col-sm-6" align="center" style="display: inline-block; margin-bottom: 5px;"> <span style="background-color: #EEECC8; border-radius: 10px; padding: 5px;">P<sub>amarillo</sub></span>&nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rOIR8" class="form-control respuestas input-sm" style="width: 90px;" placeholder="Ej: 1/2"><br> </div> </li><br><br> </div>',
    	];
    	observa1.sort(f_randomico);
    	$('#observa1').append(observa1);
    }

///////////////////////////////////////////////////////////////////

	var notaFinalP1 = 0;
	function Resp1() {
	    var operacionSum = 0;
	    var operacionMul = 0;
	    for (var i = 0; i < 1; i++) {
	        operacionSum = (parseInt($('#p00T' + (i) + '_' + (i)).text())) - ((parseInt($('#p00T' + (i)).text()))); //suma
	        operacionMul = (parseInt($('#p00T' + (i) + '_1').text())) / ((parseInt($('#p00T' + (i) + '_' + (i)).text()))); //multiplicacion

	        if (operacionSum == $('#p00Patron' + i).val()) {
	            notaFinalP1++;
	            $('#p00Patron' + i).css("background-color", "#5ED188");
	            if ($('#sel0' + i).val() == '+') {
	                notaFinalP1++;
	                $('#sel0' + i).css("background-color", "#5ED188");
	            } else {
	                $('#sel0' + i).css("background-color", "#EF87A7");
	            }
	        } else {
	            $('#p00Patron' + i).css("background-color", "#EF87A7");
	            $('#sel0' + i).css("background-color", "#EF87A7");
	        }

	        if ($('#suc0SumP1').val() == (operacionSum + ($('#p00T0_fin').text() * operacionMul))) {
	            notaFinalP1++;
	            $('#suc0SumP1').css("background-color", "#5ED188");
	        } else {
	            $('#suc0SumP1').css("background-color", "#EF87A7");
	        }

	        if (operacionMul == $('#p00PatronMul' + i).val()) {
	            notaFinalP1++;
	            $('#p00PatronMul' + i).css("background-color", "#5ED188");
	            if ($('#selMul0' + i).val() == 'x') {
	                notaFinalP1++;
	                $('#selMul0' + i).css("background-color", "#5ED188");
	            } else {
	                $('#selMul0' + i).css("background-color", "#EF87A7");
	            }
	        } else {
	            $('#p00PatronMul' + i).css("background-color", "#EF87A7");
	            $('#selMul0' + i).css("background-color", "#EF87A7");
	        }

	        if ($('#suc0MulP1').val() == (operacionMul * ($('#p00T0_fin').text()))) {
	            notaFinalP1++;
	            $('#suc0MulP1').css("background-color", "#5ED188");
	        } else {
	            $('#suc0MulP1').css("background-color", "#EF87A7");
	        }
	    }
	}


	var notaFinalP3 = 0;
	function Resp3(){
     var resp = ['1/4', '3/4', '5/4', '7/4', '9/4', '1/3', '1/2', '5/8', '5/6', '11/8'];
        for( var j=1; j<11; j++ ){
          if( $('#rOSF'+j).val().replace(/ |\(|\)| /gi, "") == resp[j-1]){
            notaFinalP3++;
            $('#rOSF'+j).css("background-color", "#05D576");
          }else{
            $('#rOSF'+j).css("background-color", "#D50545");
          }
        }
	}



	var notaFinalP4 = 0;
	function Resp4(){
          if( $('#rENM1').val().replace(/ |\(|\)| /gi, "") == '5/4'){
            notaFinalP4++;
            $('#rENM1').css("background-color", "#05D576");
          }else{
            $('#rENM1').css("background-color", "#D50545");
          }
  }


  var notaFinalP5 = 0;
    function Resp5(){

        var cant = [rImgKg1,rImgKg2,rImgKg3];
        for(var i=1; i<4; i++){//cantidad de destinos

            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 1 ){ /// 1 = cantidad de imgs que debe contener cada destino
                    $('.i_imgKg'+i).css("background-color", "#5ED188");
                    notaFinalP5++;
                }else{
                    $('.i_imgKg'+i).css("background-color", "#EF87A7");
                }
            });

        }
    }



    var notaFinalP6 = 0;
	function Resp6(){
     var resp = ['6', '6', '3', '1', '6/16', '6/16', '3/16', '1/16', '16'];
        for( var j=1; j<10; j++ ){
          if( $('#rOIR'+j).val().replace(/ |\(|\)| /gi, "") == resp[j-1]){
            notaFinalP6++;
            $('#rOIR'+j).css("background-color", "#05D576");
          }else{
            $('#rOIR'+j).css("background-color", "#D50545");
          }
        }
	}



	var notaFinalP7 = 0;
	function Resp7(){
     var resp = ['1015202035', '10', '15', '20', '20', '35', '100', '100alumnos', 'cevichocho', 'Papasconcaucaraypapitasconcuero'];
        for( var j=1; j<11; j++ ){
          if( $('#rOSD'+j).val().replace(/ |\(|\)|,| /gi, "") == resp[j-1]){
            notaFinalP7++;
            $('#rOSD'+j).css("background-color", "#05D576");
          }else{
            $('#rOSD'+j).css("background-color", "#D50545");
          }
        }
	}
///////////////////////////////////////////////////////////////////

    function Cargar() {   
      location.reload(true);
    }


    $(document).ready(function() {
        Inicio();
        Preg1();
        Preg3();
        Preg5();
        Preg6();

        function confirmar() {
        	Resp1();
          	Resp3();
        	Resp4();
        	Resp5();
        	Resp6();
        	Resp7();

          
            var nota1 = (notaFinalP1*1.5)/6;
            var nota2 = parseFloat($('#calificacion2').val());
            var nota3 = (notaFinalP3*1.5)/10;
            var nota4 = (notaFinalP4);
            var nota5 = (notaFinalP5*1.5)/3;
            var nota6 = (notaFinalP6*1.5)/9;
            var nota7 = (notaFinalP7*1.5)/10;
            

            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {

        if( $('#calificacion2').val() !='' ){
          if( $('#calificacion2').val()<=1.5 && $('#calificacion2').val()>=0  ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
        }
      });    

});





