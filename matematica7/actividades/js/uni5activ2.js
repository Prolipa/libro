
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
	    contenidos[0] = '<span>Patrón:&nbsp;&nbsp;' +
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

    var rImgKg1 = 0;
    var rImgKg2 = 0;
    var rImgKg3 = 0;
    var rImgKg4 = 0;
    var rImgKg5 = 0;
    function Preg2(){
        var destinosKg = [
        '<div align="center"><span class="dest"> 270, 220, 170, 120, 70, 20 </span><br> <div class="r_imgKg i_imgKg1"></div></div>',
        '<div align="center"><span class="dest"> 3 000, 2 500, 2 000, 1 500 </span><br> <div class="r_imgKg i_imgKg2"></div></div>',
        '<div align="center"><span class="dest"> 380, 290, 200, 110, 20 </span><br> <div class="r_imgKg i_imgKg3"></div></div>',
        '<div align="center"><span class="dest"> 48, 192, 768, 3 072, 12 288 </span><br> <div class="r_imgKg i_imgKg4"></div></div>',
        '<div align="center"><span class="dest"> 5 346, 1 782, 594, 198, 66 </span><br> <div class="r_imgKg i_imgKg5"></div></div>',
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<img src='img/i1_p179_act2.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'>");
            imgKg.push("<img src='img/i2_p179_act2.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'>");
            imgKg.push("<img src='img/i3_p179_act2.png' class='imgKg3' id='imgKg3' style='cursor: pointer;'>");
            imgKg.push("<img src='img/i4_p179_act2.png' class='imgKg4' id='imgKg4' style='cursor: pointer;'>");
            imgKg.push("<img src='img/i5_p179_act2.png' class='imgKg5' id='imgKg5' style='cursor: pointer;'>");
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
                    if(ui.draggable.hasClass("imgKg3")){
                    rImgKg3++;
                }else {
                    if(ui.draggable.hasClass("imgKg4")){
                    rImgKg4++;
                }else {
                    rImgKg5++;
                }
                }
                }
            }

            ui.draggable.attr("style", ""); //vaciar estilos para ubicar la imagen sobre el destino
            $(this).append(ui.draggable); //añadir el contenido al destino
            $(this).find(ui.draggable).draggable({disabled:true});//deshabilitar el arrastre, despues de soltar en el destino

        }
        });
    }

    function Preg3(){

        var val0 = Math.round(Math.random() * (1000 - 100) + 100);
      var sig = Math.round(Math.random() * (4 - 1) + 1);
      var patron0 = Math.round(Math.random() * (20 - 10) + 10);
      var patron1 = Math.round(Math.random() * (20 - 10) + 10);

      var contenidos = [];
      contenidos[0] = '<span>Patrón:&nbsp;&nbsp;' +
          '<select class="form-control" id="rsel00" style="width: 60px; font-size: 17px;" display: inline-block;><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" id="rp00Patron0" class="form-control" style="width: 70px; display: inline-block;">,&nbsp;&nbsp;&nbsp;&nbsp; ' +
          '<select class="form-control" id="rselMul00" style="width: 60px; font-size: 17px; display: inline-block;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" id="rp00PatronMul0" class="form-control" style="width: 70px; display: inline-block;"><br><br> ' +
          'Sucesión: &nbsp;&nbsp;<span class="n1" id="rp00T0">' + (val0 + (patron0)) + '</span>, &nbsp;&nbsp; ' +
          '<span class="n1" id="rp00T0_0">' + (val0 + (patron0 * 2)) + '</span>, &nbsp;&nbsp; ' +
          '<span class="n1" id="rp00T0_1">' + ((val0 + (patron0 * 2)) * (patron1)) +
          ', &nbsp;&nbsp;' + (((val0 + (patron0 * 2)) * (patron1)) + (patron0)) +
          ', &nbsp;&nbsp;' + ((((val0 + (patron0 * 2)) * (patron1)) + (patron0)) * (patron1)) +
          ', &nbsp;&nbsp;<span class="n1" id="rp00T0_fin">' + (((((val0 + (patron0 * 2)) * (patron1)) + (patron0)) * (patron1)) + (patron0)) + '</span>, </span>' +
          '<input type="number" id="rsuc0MulP1" class="form-control" style="width: 120px; display: inline-block;">, ' +
          '<input type="number" id="rsuc0SumP1" class="form-control" style="width: 120px; display: inline-block;"><br>';


      $('#sucesion1').append(contenidos[0]);

    }

///////////////////////////////////////////////////////////////////

	var notaFinalP1 = 0;
	function Resp1() {
      if( $('#rETS1').val() == 'creciente' ){
        notaFinalP1++;
        $('#rETS1').css("background-color", "#5ED188");
      }else{
        $('#rETS1').css("background-color", "#EF87A7");
      }
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


  var notaFinalP2 = 0;
    function Resp2(){

        var cant = [rImgKg1,rImgKg2,rImgKg3,rImgKg4,rImgKg5];
        for(var i=1; i<6; i++){//cantidad de destinos

            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 1 ){ /// 1 = cantidad de imgs que debe contener cada destino
                    $('.i_imgKg'+i).css("background-color", "#5ED188");
                    notaFinalP2++;
                }else{
                    $('.i_imgKg'+i).css("background-color", "#EF87A7");
                }
            });

        }
    }

	var notaFinalP3 = 0;
  function Resp3() {
      var operacionSum = 0;
      var operacionMul = 0;
      for (var i = 0; i < 1; i++) {
          operacionSum = (parseInt($('#rp00T' + (i) + '_' + (i)).text())) - ((parseInt($('#rp00T' + (i)).text()))); //suma
          operacionMul = (parseInt($('#rp00T' + (i) + '_1').text())) / ((parseInt($('#rp00T' + (i) + '_' + (i)).text()))); //multiplicacion

          if (operacionSum == $('#rp00Patron' + i).val()) {
              notaFinalP3++;
              $('#rp00Patron' + i).css("background-color", "#5ED188");
              if ($('#rsel0' + i).val() == '+') {
                  notaFinalP3++;
                  $('#rsel0' + i).css("background-color", "#5ED188");
              } else {
                  $('#rsel0' + i).css("background-color", "#EF87A7");
              }
          } else {
              $('#rp00Patron' + i).css("background-color", "#EF87A7");
              $('#rsel0' + i).css("background-color", "#EF87A7");
          }

          if ($('#rsuc0SumP1').val() == (operacionSum + ($('#rp00T0_fin').text() * operacionMul))) {
              notaFinalP3++;
              $('#rsuc0SumP1').css("background-color", "#5ED188");
          } else {
              $('#rsuc0SumP1').css("background-color", "#EF87A7");
          }

          if (operacionMul == $('#rp00PatronMul' + i).val()) {
              notaFinalP3++;
              $('#rp00PatronMul' + i).css("background-color", "#5ED188");
              if ($('#rselMul0' + i).val() == 'x') {
                  notaFinalP3++;
                  $('#rselMul0' + i).css("background-color", "#5ED188");
              } else {
                  $('#rselMul0' + i).css("background-color", "#EF87A7");
              }
          } else {
              $('#rp00PatronMul' + i).css("background-color", "#EF87A7");
              $('#rselMul0' + i).css("background-color", "#EF87A7");
          }

          if ($('#rsuc0MulP1').val() == (operacionMul * ($('#rp00T0_fin').text()))) {
              notaFinalP3++;
              $('#rsuc0MulP1').css("background-color", "#5ED188");
          } else {
              $('#rsuc0MulP1').css("background-color", "#EF87A7");
          }
      }
  }



	var notaFinalP4 = 0;
	function Resp4(){
    var resp = ['12', '20', '30', '18', '22', '26', '+ 6, + 8, + 10...', '+ 4', 'Tendría 42 cuadrados azules y 30 amarillos.'];
      for( var i=1; i<10; i++ ){
        if( $('#rOCC'+i).val() == resp[i-1]){
            notaFinalP4++;
            $('#rOCC'+i).css("background-color", "#05D576");
          }else{
            $('#rOCC'+i).css("background-color", "#D50545");
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
        Preg2();
        Preg3();

        function confirmar() {
        	Resp1();
          Resp2();
          Resp3();
        	Resp4();

          
            var nota1 = (notaFinalP1*2.5)/7;
            var nota2 = (notaFinalP2*2.5)/5;
            var nota3 = (notaFinalP3*2.5)/6;
            var nota4 = (notaFinalP4*2.5)/9;
            

            var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
confirmar();/*
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
        }*/
      });    

});





