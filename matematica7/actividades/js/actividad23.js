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
      contenido1[0] = '<label>Patrón:</label>&nbsp;&nbsp;<label id="patron1">'+patron+'</label><label>,</label>&nbsp;&nbsp;<label id="patron2">'+patron1+'</label>';
      suc[0] = valoresA[0];
      suc[1] = suc[0] + patron;
      suc[2] = suc[1] + patron1;
      suc[3] = suc[2] + patron;


      var sucesion = '<input type="number" id="s1" class="rS">&nbsp;&nbsp;' +
                     '<input type="number" id="s2" class="rS">&nbsp;&nbsp;' +
                     '<input type="number" id="s3" class="rS">&nbsp;&nbsp;' +
                     '<input type="number" id="s4" class="rS">&nbsp;&nbsp;' +
                     '<input type="number" id="s5" class="rS">&nbsp;&nbsp;' +
                     '<input type="number" id="s6" class="rS">&nbsp;&nbsp;' +
                     '<input type="number" id="s7" class="rS">';


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
          resp[1] = parseInt($("#patron1").text()) + parseInt($("#s1").val());
          resp[2] = parseInt($("#patron1").text()) + parseInt($("#patron2").text()) + parseInt($("#s1").val());
          resp[3] = parseInt($("#patron1").text()) + parseInt($("#patron2").text()) + parseInt($("#patron1").text()) + parseInt($("#s1").val());
          resp[4] = parseInt($("#patron1").text()) + parseInt($("#patron2").text()) + parseInt($("#patron1").text()) + parseInt($("#patron2").text()) + parseInt($("#s1").val());
          resp[5] = parseInt($("#patron1").text()) + parseInt($("#patron2").text()) + parseInt($("#patron1").text()) + parseInt($("#patron2").text()) + parseInt($("#patron1").text()) + parseInt($("#s1").val());
          resp[6] = parseInt($("#patron1").text()) + parseInt($("#patron2").text()) + parseInt($("#patron1").text()) + parseInt($("#patron2").text()) + parseInt($("#patron1").text()) + parseInt($("#patron2").text()) + parseInt($("#s1").val());
          
          debugger;

          if ($("#s2").val() == resp[1]) {
              nota = nota + 1;
              $('#s2').css("background-color", "green");
          } else {
              $('#s2').css("background-color", "red");
          }
          if ($("#s3").val() == resp[2]) {
              nota = nota + 1;
              $('#s3').css("background-color", "green");
          } else {
              $('#s3').css("background-color", "red");
          }

          if ($("#s4").val() == resp[3]) {
              nota = nota + 1;
              $('#s4').css("background-color", "green");
          } else {
              $('#s4').css("background-color", "red");
          }
          if ($("#s5").val() == resp[4]) {
              nota = nota + 1;
              $('#s5').css("background-color", "green");
          } else {
              $('#s5').css("background-color", "red");
          }


          if ($("#s6").val() == resp[5]) {
              nota = nota + 1;
              $('#s6').css("background-color", "green");
          } else {
              $('#s6').css("background-color", "red");
          }

          if ($("#s7").val() == resp[6]) {
              nota = nota + 1;
              $('#s7').css("background-color", "green");
          } else {
              $('#s7').css("background-color", "red");
          }

          var notaFinal = (nota * 10) / 12;
          notaFinal = notaFinal.toFixed(2);
          $("#txtNota").text(notaFinal + "/10");
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });