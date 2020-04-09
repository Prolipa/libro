var titulos = "aplico";

  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $('#contenido').append('');
      var valoresA = [];
      var contenido1 = [];
      for (var i = 0; i <= 4; i++) {
          valoresA[i] = Math.round(Math.random() * (20 - 1) + 1);
      }
      valoresA = jQuery.unique(valoresA);
      contenido1[0] = '<br><label id="valor1">' + valoresA[0] + '</label><sup>3</sup>&nbsp;=&nbsp;' +
          '<input type="number" id="numA1"><label>&nbsp;X&nbsp;</label>' +
          '<input type="number" id="numA2"><label>&nbsp;X&nbsp;</label>' +
          '<input type="number" id="numA3"><label>&nbsp;=&nbsp;</label>' +
          '<input class="resA" type="number" id="resA1"><br>';

      contenido1[1] = '<br><label id="valor2">' + valoresA[1] + '</label><sup>3</sup>&nbsp;=&nbsp;' +
          '<input type="number" id="numB1"><label>&nbsp;X&nbsp;</label>' +
          '<input type="number" id="numB2"><label>&nbsp;X&nbsp;</label>' +
          '<input type="number" id="numB3"><label>&nbsp;=&nbsp;</label>' +
          '<input class="resA" type="number" id="resB1"><br>';

      contenido1[2] = '<br><label id="valor3">' + valoresA[2] + '</label><sup>3</sup>&nbsp;=&nbsp;' +
          '<input type="number" id="numC1"><label>&nbsp;X&nbsp;</label>' +
          '<input type="number" id="numC2"><label>&nbsp;X&nbsp;</label>' +
          '<input type="number" id="numC3"><label>&nbsp;=&nbsp;</label>' +
          '<input class="resA" type="number" id="resC1"><br>';

      contenido1[3] = '<br><label id="valor4">' + valoresA[3] + '</label><sup>3</sup>&nbsp;=&nbsp;' +
          '<input type="number" id="numD1"><label>&nbsp;X&nbsp;</label>' +
          '<input type="number" id="numD2"><label>&nbsp;X&nbsp;</label>' +
          '<input type="number" id="numD3"><label>&nbsp;=&nbsp;</label>' +
          '<input class="resA" type="number" id="resD1"><br>';

      $("#contenido").append(contenido1);
  };

  function Cargar() {
      $('#contenido').html('');
      Inicio();
  }
  $(document).ready(function() {
      Inicio();
      $("#Calificar").click(function() {
          var nota = 0;
          //Variables Respuestas Txt
          var valA = [];
          var valB = [];
          var valC = [];
          var valD = [];
          var resp = [];

          for (var i = 1; i <= 3; i++) {
              valA[i] = parseInt($("#numA" + i).val());
              valB[i] = parseInt($("#numB" + i).val());
              valC[i] = parseInt($("#numC" + i).val());
              valD[i] = parseInt($("#numD" + i).val());
          }
          for (var j = 1; j <= 3; j++) {
              if (valA[j] == $("#valor1").text()) {
                  nota = nota + 1;
                  $('#numA' + j).css("background-color", "green");
              } else {
                  $('#numA' + j).css("background-color", "red");
              }
              if (valB[j] == $("#valor2").text()) {
                  nota = nota + 1;
                  $('#numB' + j).css("background-color", "green");
              } else {
                  $('#numB' + j).css("background-color", "red");
              }
              if (valC[j] == $("#valor3").text()) {
                  nota = nota + 1;
                  $('#numC' + j).css("background-color", "green");
              } else {
                  $('#numC' + j).css("background-color", "red");
              }
              if (valD[j] == $("#valor4").text()) {
                  nota = nota + 1;
                  $('#numD' + j).css("background-color", "green");
              } else {
                  $('#numD' + j).css("background-color", "red");
              }
          }

          if (parseInt($("#resA1").val()) == Math.pow(parseInt($("#valor1").text()), 3)) {
              nota = nota + 1;
              $('#resA1').css("background-color", "green");
          } else {
              $('#resA1').css("background-color", "red");
          }
          if (parseInt($("#resB1").val()) == Math.pow(parseInt($("#valor2").text()), 3)) {
              nota = nota + 1;
              $('#resB1').css("background-color", "green");
          } else {
              $('#resB1').css("background-color", "red");
          }
          if (parseInt($("#resC1").val()) == Math.pow(parseInt($("#valor3").text()), 3)) {
              nota = nota + 1;
              $('#resC1').css("background-color", "green");
          } else {
              $('#resC1').css("background-color", "red");
          }
          if (parseInt($("#resD1").val()) == Math.pow(parseInt($("#valor4").text()), 3)) {
              nota = nota + 1;
              $('#resD1').css("background-color", "green");
          } else {
              $('#resD1').css("background-color", "red");
          }
          var notaFinal = (nota * 10) / 16;
          notaFinal = notaFinal.toFixed(2)
          $("#txtNota").text(notaFinal + "/10");
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });