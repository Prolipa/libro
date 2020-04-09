var titulos = "refuerzo";

  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $('#contenido').append('');
      var valoresA = [];
      var contenido1 = [];
      var patron = Math.round(Math.random() * (10 - 1) + 1);
      var patron1 = Math.round(Math.random() * (10 - 1) + 1);
      var suc = [];
      for (var i = 0; i <= 10; i++) {
          valoresA[i] = Math.round(Math.random() * (20 - 1) + 1);
      }
      valoresA = jQuery.unique(valoresA);
      contenido1[0] = '<label>Patrón</label><input type="number" placeholder=0 id="patron1" class="patron"><input type="number" placeholder=0 id="patron2" class="patron">&nbsp;<label><strong>→</strong></label>&nbsp;' +
          '<label id="numero1">' + (valoresA[0] + patron) + '</label>' +
          '&nbsp;<label>-</label>&nbsp;' +
          '<label id="numero2">' + (valoresA[0]) + '</label>' +
          '&nbsp;<label>=</label>&nbsp;' +
          '<input type="number" id="res1" placeholder=0 class="Respuesta">;' +
          '<label id="numero3">' + (valoresA[1] + patron1) + '</label>' +
          '&nbsp;<label>-</label>&nbsp;' +
          '<label id="numero4">' + (valoresA[1]) + '</label>' +
          '&nbsp;<label>=</label>&nbsp;' +
          '<input type="number" id="res2" placeholder=0 class="Respuesta">;' +
          '<label id="numero5">' + (valoresA[2] + patron) + '</label>' +
          '&nbsp;<label>-</label>&nbsp;' +
          '<label id="numero6">' + (valoresA[2]) + '</label>' +
          '&nbsp;<label>=</label>&nbsp;' +
          '<input type="number" id="res3" placeholder=0 class="Respuesta">;' +
          '<label id="numero7">' + (valoresA[3] + patron1) + '</label>' +
          '&nbsp;<label>-</label>&nbsp;' +
          '<label id="numero8">' + (valoresA[3]) + '</label>' +
          '&nbsp;<label>=</label>&nbsp;' +
          '<input type="number" id="res4" placeholder=0 class="Respuesta">;';
      suc[0] = valoresA[0];
      suc[1] = suc[0] + patron;
      suc[2] = suc[1] + patron1;
      suc[3] = suc[2] + patron;


      var sucesion = '<label>Sucesión</label>&nbsp;&nbsp;' +
          '<label>' + suc[0] + '</label>&nbsp;&nbsp;' +
          '<label>' + suc[1] + '</label>&nbsp;&nbsp;' +
          '<label>' + suc[2] + '</label>&nbsp;&nbsp;' +
          '<label id="ini">' + suc[3] + '</label>&nbsp;&nbsp;' +
          '<input type="number" id="s1" class="rS">&nbsp;&nbsp;' +
          '<input type="number" id="s2" class="rS">&nbsp;&nbsp;' +
          '<input type="number" id="s3" class="rS">';


      $("#sucesion").append(sucesion);
      $("#contenido1").append(contenido1);
  };

  function Cargar() {
      $('#sucesion').html('');
      $('#contenido1').html('');
      Inicio();
  }
  $(document).ready(function() {
      Inicio();
      $("#Calificar").click(function() {
          var nota = 0;
          //Variables Respuestas Txt
          var resp = [];
          resp[1] = parseInt($("#numero1").text()) - parseInt($("#numero2").text());
          resp[2] = parseInt($("#numero3").text()) - parseInt($("#numero4").text());
          resp[3] = parseInt($("#numero5").text()) - parseInt($("#numero6").text());
          resp[4] = parseInt($("#numero7").text()) - parseInt($("#numero8").text());
          for (var i = 1; i <= 4; i++) {
              if (i == 1 || i == 3) {
                  if (($("#res" + i).val()) == resp[1]) {
                      nota = nota + 1;
                      $('#res' + i).css("background-color", "green");
                  } else {
                      $('#res' + i).css("background-color", "red");
                  }
              } else {
                  if (($("#res" + i).val()) == resp[i]) {
                      nota = nota + 1;
                      $('#res' + i).css("background-color", "green");
                  } else {
                      $('#res' + i).css("background-color", "red");
                  }
              }
          }
          if ($("#patron1").val() == resp[1]) {
              nota = nota + 1;
              $('#patron1').css("background-color", "green");
          } else {
              $('#patron1').css("background-color", "red");
          }
          if ($("#patron2").val() == resp[2]) {
              nota = nota + 1;
              $('#patron2').css("background-color", "green");
          } else {
              $('#patron2').css("background-color", "red");
          }
          debugger;
          console.log(parseInt($("#ini").text()) + resp[1]);

          if ($("#s1").val() == parseInt($("#ini").text()) + resp[1]) {
              nota = nota + 1;
              $('#s1').css("background-color", "green");
          } else {
              $('#s1').css("background-color", "red");
          }
          if ($("#s2").val() == parseInt($("#ini").text()) + resp[1] + resp[2]) {
              nota = nota + 1;
              $('#s2').css("background-color", "green");
          } else {
              $('#s2').css("background-color", "red");
          }
          if ($("#s3").val() == parseInt($("#ini").text()) + resp[1] + resp[2] + resp[3]) {
              nota = nota + 1;
              $('#s3').css("background-color", "green");
          } else {
              $('#s3').css("background-color", "red");
          }




          var notaFinal = (nota * 10) / 12;
          notaFinal = notaFinal.toFixed(2);
          $("#txtNota").text(notaFinal + "/10");
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });