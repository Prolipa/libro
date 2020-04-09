var titulos="aplico"
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }

function Preg1(){
	 var valoresA = [];
      var contenido1 = [];
      var patron = Math.round(Math.random() * (10 - 1) + 1);
      var patron1 = Math.round(Math.random() * (10000) + 1);
      var patron2 = Math.round(Math.random() * (10 - 1) + 1);
      var patron3 = Math.round(Math.random() * (10 - 1) + 1);
      var patron4 = Math.round(Math.random() * (10 - 1) + 1);
      var patron5 = Math.round(Math.random() * (10 - 1) + 1);

      var suc = [];
      var suc1 = [];
      var suc2 = [];
      var suc3 = [];
      var suc4 = [];
      var suc5 = [];

      for (var i = 0; i <= 10; i++) {
          valoresA[i] = Math.round(Math.random() * (20 - 1) + 1);
      }

      valoresA = jQuery.unique(valoresA);

      suc[0] = patron * valoresA[0];
      suc[1] = suc[0] * valoresA[0];
      suc[2] = suc[1] * valoresA[0];
      suc[3] = suc[2] * valoresA[0];
      suc[4] = suc[3] * valoresA[0];
      suc[5] = patron1 + valoresA[1];
      suc[6] = suc[5] + valoresA[1];
      suc[7] = suc[6] + valoresA[1];
      suc[8] = suc[7] + valoresA[1];
      suc[9] = suc[8] + valoresA[1];


      var sucesion = [];
      sucesion[0] = '<label>a) Sucesión: </label>&nbsp;&nbsp;' +
          '<span class="label label-success" style="font-size: 18px;">' +
          '<label id="s0">' + suc[0] + '</label>&nbsp;&nbsp;' +         
          '<label id="s1">' + suc[1] + '</label>&nbsp;&nbsp;' +
          '<label id="s2">' + suc[2] + '</label>&nbsp;&nbsp;' +
          '<label id="s3">' + suc[3] + '</label>&nbsp;&nbsp;' +
          '<label id="s4">' + suc[4] + '</label></span>&nbsp;&nbsp;&nbsp;&nbsp;' +
          '<label>Patrón:&nbsp;&nbsp;</label><input class="form-control" type="number" id="patron0"><br>'+
          ' La sucesión es , <select class="form-control" id="sel1"> ' +                                   
                             '<option value="decreciente">decreciente</option>' +
                             '<option value="creciente">creciente</option>' +
                         '</select> basada en multiplicaciones. El patrón se calcula dividiendo un término para el término' +  
                         '<select class="form-control" id="sel2">' +
                             '<option value="posterior">posterior</option>' +                             
                             '<option value="anterior">anterior</option>' +
                         '</select>:<br><br>' +
          '<label id="s1">' + suc[1] + '</label>&nbsp;/ &nbsp;<label id="s0">' + suc[0] + '</label> = <input class="form-control" style="width: 90px;" type="number" id="Resp0">;&nbsp;&nbsp;&nbsp;&nbsp;' +
          '<label id="s2">' + suc[2] + '</label>&nbsp; / &nbsp;<label id="s1">' + suc[1] + '</label> = <input class="form-control" style="width: 90px; type="number" id="Resp1">;&nbsp;&nbsp;&nbsp;&nbsp;' +
          '<label id="s3">' + suc[3] + '</label>&nbsp;/ &nbsp;<label id="s2">' + suc[2] + '</label> = <input class="form-control" style="width: 90px; type="number" id="Resp2">;&nbsp;&nbsp;&nbsp;&nbsp;' +
          '<label id="s4">' + suc[4] + '</label>&nbsp; / &nbsp;<label id="s3">' + suc[3] + '</label> = <input class="form-control" style="width: 90px; type="number" id="Resp3">;<br>';
   

        sucesion[1] = '<br><label>b) Sucesión: </label>&nbsp;&nbsp;' +
          '<span class="label label-primary" style="font-size: 18px;">' +
          '<label id="s5">' + suc[5] + '</label>&nbsp;&nbsp;' +         
          '<label id="s6">' + suc[6] + '</label>&nbsp;&nbsp;' +
          '<label id="s7">' + suc[7] + '</label>&nbsp;&nbsp;' +
          '<label id="s8">' + suc[8] + '</label>&nbsp;&nbsp;' +
          '<label id="s9">' + suc[9] + '</label></span>&nbsp;&nbsp;&nbsp;&nbsp;' +
          '<label>Patrón:&nbsp;&nbsp;</label><input class="form-control" type="number" id="patron1"><br>' +
          ' La sucesión es , <select class="form-control" id="sel3"> ' +
                             '<option value="decreciente">decreciente</option>' +
                             '<option value="creciente">creciente</option>' +                            
                         '</select>, basada en sumas. El patrón se calcula restando un término a un término ' +  
                         '<select class="form-control inline-block" id="sel4">' +
                         '<option value="anterior">anterior</option>' +
                             '<option value="posterior">posterior</option>' +                                                          
                         '</select>:<br><br>' +
          '<label id="s6">' + suc[6] + '</label>&nbsp; - &nbsp;<label id="s5">' + suc[5] + '</label> = <input class="form-control" style="width: 90px; type="number" id="Resp4">;&nbsp;&nbsp;&nbsp;&nbsp;' +
          '<label id="s7">' + suc[7] + '</label>&nbsp; - &nbsp;<label id="s6">' + suc[6] + '</label> = <input class="form-control" style="width: 90px; type="number" id="Resp5">;&nbsp;&nbsp;&nbsp;&nbsp;' +
          '<label id="s8">' + suc[8] + '</label>&nbsp; - &nbsp;<label id="s7">' + suc[7] + '</label> = <input class="form-control" style="width: 90px; type="number" id="Resp6">;&nbsp;&nbsp;&nbsp;&nbsp;' +
          '<label id="s9">' + suc[9] + '</label>&nbsp; - &nbsp;<label id="s8">' + suc[8] + '</label> = <input class="form-control" style="width: 90px; type="number" id="Resp7">;';


      $("#sucesion1").append(sucesion[0]);
      $("#sucesion2").append(sucesion[1]);
}


function Cargar() {   
      location.reload(true);
  }


$(document).ready(function() {
      Inicio();
      Preg1();

     function confirmar() {

                      var notas = []
                      var notaFinal = 0;
                      var nota1 = 0;
                      var nota2 = 0;
                      var nota3 = 0;

                      var rSuc=parseFloat($("#s2").text())/parseFloat($("#s1").text());

                      var rSuc2=parseFloat($("#s6").text()) - parseFloat($("#s5").text());

                      if(rSuc == $('#patron0').val()) {
                      	nota1=nota1+2;
							$('#patron0').css("background-color", "green");						
						}else{
                      		$('#patron0').css("background-color", "red");
                      	}

                      	if($('#sel1').val() == 'creciente' && $('#sel2').val() == 'anterior'){
                      		nota3=nota3+2;
                      		$('#sel1').css("background-color", "green");
                      		$('#sel2').css("background-color", "green");	
                      	}else{
                      		if($('#sel1').val() == 'creciente'){
                      			nota3=nota3+1;
							$('#sel1').css("background-color", "green");
                      		$('#sel2').css("background-color", "red");	
                      		}else{
                      			if($('#sel2').val() == 'anterior'){
								nota3=nota3+1;
							$('#sel1').css("background-color", "red");
                      		$('#sel2').css("background-color", "green");	
                      			}else{
                      				$('#sel1').css("background-color", "red");
                      				$('#sel2').css("background-color", "red");	
                      			}
                      		}                      		
                      	}

                      	if($('#sel3').val() == 'creciente' && $('#sel4').val() == 'posterior'){
                      		nota3=nota3+2;
                      		$('#sel3').css("background-color", "green");
                      		$('#sel4').css("background-color", "green");	
                      	}else{
                      		if($('#sel3').val() == 'creciente'){
                      			nota3=nota3+1;
							$('#sel3').css("background-color", "green");
                      		$('#sel4').css("background-color", "red");	
                      		}else{
                      			if($('#sel4').val() == 'posterior'){
								nota3=nota3+1;
							$('#sel3').css("background-color", "red");
                      		$('#sel4').css("background-color", "green");	
                      			}else{
                      				$('#sel3').css("background-color", "red");
                      				$('#sel4').css("background-color", "red");	
                      			}
                      		}                      		
                      	}

                      	for (var i = 0; i < 4; i++) {
							if($('#Resp'+i).val() == rSuc){
								nota2=nota2+0.25;
							$('#Resp'+i).css("background-color", "green");
							}else{
							$('#Resp'+i).css("background-color", "red");	
							}
						}


                      if(rSuc2 == $('#patron1').val()) {
                      	nota1=nota1+2;
							$('#patron1').css("background-color", "green");						
						}else{
                      		$('#patron1').css("background-color", "red");
                      	}
                      	for (var i = 4; i < 8; i++) {
							if($('#Resp'+i).val() == rSuc2){
								nota2=nota2+0.25;
							$('#Resp'+i).css("background-color", "green");
							}else{
							$('#Resp'+i).css("background-color", "red");	
							}
						}
               
                      notaFinal = nota1+nota2+nota3;
                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);
                 
           
              return false
          }
      

      $("#Calificar").click(function() {
          confirmar();
      });

      });
