var titulos="aplico"
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }

function Preg1(){
	 var valoresA = [];

      var patron1 = Math.round(Math.random() * (10000) + 1);

      var suc = [];
      var suc1 = [];

      for (var i = 0; i <= 10; i++) {
          valoresA[i] = Math.round(Math.random() * (20 - 1) + 1);
      }

      valoresA = jQuery.unique(valoresA);

      suc[0] = patron1 * valoresA[0];
      suc[1] = patron1 * valoresA[1];



      var sucesion = [];


      sucesion[0] = '<span>a) Patrón: </span>' +
                         '<sup><input type="number" id="patron1" style="width: 90px; border-color: #D5B61D; margin-left: 85px; margin-right: 20px;" class="form-control redondeado"></sup>' +
                         '<sup><input type="number" id="patron2" style="width: 90px; border-color: #D5B61D;  margin-right: 20px" class="form-control redondeado"></sup>' +
                         '<sup><input type="number" id="patron3" style="width: 90px; border-color: #D5B61D;  margin-right: 20px" class="form-control redondeado"></sup>' +
                         '<sup><input type="number" id="patron4" style="width: 90px; border-color: #D5B61D;  margin-right: 20px" class="form-control redondeado"></sup>' +
                         '<sup><input type="number" id="patron5" style="width: 90px; border-color: #D5B61D;" class="form-control redondeado"></sup>&nbsp;&nbsp;';

      sucesion[1] = '<span>Sucesión: </span>' +
                         '<input type="number" class="form-control" id="suc0" value="'+suc[0]+'" style="width: 90px; border-color: #25D1BF; margin-right: 20px;margin-left: 20px;">' +
                         '<input type="number" class="form-control" id="suc1" style="width: 90px; border-color: #25D1BF;  margin-right: 20px">' +
                         '<input type="number" class="form-control" id="suc2" style="width: 90px; border-color: #25D1BF;  margin-right: 20px">' +
                         '<input type="number" class="form-control" id="suc3" style="width: 90px; border-color: #25D1BF;  margin-right: 20px">' +
                         '<input type="number" class="form-control" id="suc4" style="width: 90px; border-color: #25D1BF;  margin-right: 20px">' +
                         '<input type="number" class="form-control" id="suc5" style="width: 90px; border-color: #25D1BF;">&nbsp;&nbsp;';
      

      sucesion[2] = '<span>b) Patrón: </span>' +
                         '<sup><input type="number" id="patron7" style="width: 90px; border-color: #D5B61D; margin-left: 85px; margin-right: 20px;" class="form-control redondeado"></sup>' +
                         '<sup><input type="number" id="patron8" style="width: 90px; border-color: #D5B61D;  margin-right: 20px" class="form-control redondeado"></sup>' +
                         '<sup><input type="number" id="patron9" style="width: 90px; border-color: #D5B61D;  margin-right: 20px" class="form-control redondeado"></sup>' +
                         '<sup><input type="number" id="patron10" style="width: 90px; border-color: #D5B61D;  margin-right: 20px" class="form-control redondeado"></sup>' +
                         '<sup><input type="number" id="patron11" style="width: 90px; border-color: #D5B61D;" class="form-control redondeado"></sup>&nbsp;&nbsp;';

      sucesion[3] = '<span>Sucesión: </span>' +
                         '<input type="number" class="form-control" id="suc6" value="'+suc[1]+'" style="width: 90px; border-color: #25D1BF; margin-right: 20px;margin-left: 20px;">' +
                         '<input type="number" class="form-control" id="suc7" style="width: 90px; border-color: #25D1BF;  margin-right: 20px">' +
                         '<input type="number" class="form-control" id="suc8" style="width: 90px; border-color: #25D1BF;  margin-right: 20px">' +
                         '<input type="number" class="form-control" id="suc9" style="width: 90px; border-color: #25D1BF;  margin-right: 20px">' +
                         '<input type="number" class="form-control" id="suc10" style="width: 90px; border-color: #25D1BF;  margin-right: 20px">' +
                         '<input type="number" class="form-control" id="suc11" style="width: 90px; border-color: #25D1BF;">&nbsp;&nbsp;';                         

      $("#sucesion1").append(sucesion[0]);
      $("#sucesion2").append(sucesion[1]);
      $("#sucesion3").append(sucesion[2]);
      $("#sucesion4").append(sucesion[3]);

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
              var sec = 0;


      for(var i=1; i<6; i++){ 
        if( $('#patron'+i).val() != '' && $('#suc'+i).val() != ''){
          if(($('#patron'+i).val() * $('#suc'+(i-1)).val()) == $('#suc'+i).val()) {
                nota1++;
                $('#patron'+i).css("background-color", "#5ED188");
                $('#suc'+i).css("background-color", "#5ED188");
              }else{
                $('#patron'+i).css("background-color", "#EF87A7");
                $('#suc'+i).css("background-color", "#EF87A7");
              }   
            }else{
              $('#patron'+i).css("background-color", "#EF87A7");
              $('#suc'+i).css("background-color", "#EF87A7");
            }        
        }

      for(var i=7; i<12; i++){              

        if( $('#patron'+i).val() != '' && $('#suc'+i).val() != ''){
          if(($('#patron'+i).val() * $('#suc'+(i-1)).val()) == $('#suc'+i).val()){
                nota1++;
                $('#patron'+i).css("background-color", "#5ED188");
                $('#suc'+i).css("background-color", "#5ED188");
            }else{
              $('#patron'+i).css("background-color", "#EF87A7");
                $('#suc'+i).css("background-color", "#EF87A7");
          }  
        }else{
          $('#patron'+i).css("background-color", "#EF87A7");
           $('#suc'+i).css("background-color", "#EF87A7");
        }                       
      }
                      notaFinal = nota1;
                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);
                 
           
              return false
          }
      

      $("#Calificar").click(function() {
              confirmar(); 
      });

 });
