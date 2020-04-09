var titulos = "aplico";

  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $('#contenido').append('');
      var valoresA = [];
      var contenido1 = [];
      for (var i = 0; i <= 24; i++) {
          valoresA[i] = Math.round(Math.random() * (12 - 1) + 1);
      }
      valoresA = jQuery.unique(valoresA);
      contenido1[0] = '<tr>' +
          '<td class="n1">Form exponencial</td>' +
          '<td><label id="valA0">0</label><sup>3</sup></td>' +
          '<td><label id="valA1">' + valoresA[0] + '</label><sup>3</sup></td>' +
          '<td><input type="number" id="valA2"><sup>3</sup></input></td>' +
          '<td><input type="number" id="valA3"/><sup>3</sup></td>' +
          '<td><input type="number" id="valA4"/><sup>3</sup></td>' +
          '<td><label id="valA5">' + valoresA[1] + '</label><sup>3</sup></td>' +
          '<td><input type="number" id="valA6"/><sup>3</sup></td>' +
          '</tr>';

      contenido1[1] = '<tr>' +
          '<td class="n2">Potencia desarrollada</td>' +
          '<td><label id="valB0">0</label></td>' +
          '<td><input type="number" id="valB1"/></td>' +
          '<td><label id="valB2">' + Math.pow(valoresA[2], 3) + '</label></td>' +
          '<td><input type="number" id="valB3"/></td>' +
          '<td><label id="valB4">' + Math.pow(valoresA[3], 3) + '<label></td>' +
          '<td><input type="number" id="valB5"/></td>' +
          '<td><label id="valB6">' + Math.pow(valoresA[4], 3) + '<label></td>' +
          '</tr>';

      contenido1[2] = '<tr>' +
          '<td class="n3">Representación de volumen</td>' +
          '<td><label id="valC0">0 u</label><sup>3</sup></td>' +
          '<td><input type="text" id="valC1"/><sup>3</sup></td>' +
          '<td><input type="text" id="valC2"/><sup>3</sup></td>' +
          '<td><label id="valC3">' + Math.pow(valoresA[5], 3) + '</label>u<sup>3</sup></td>' +
          '<td><input type="text" id="valC4"/><sup>3</sup></td>' +
          '<td><input type="text" id="valC5"/><sup>3</sup></td>' +
          '<td><input type="text" id="valC6"/><sup>3</sup></td>' +
          '</tr>';

      $("#tabla1").append(contenido1);
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
          if (($("#valB1").val()) == Math.pow(parseInt($("#valA1").text()), 3)) {
              nota = nota + 1;
              $('#valB1').css("background-color", "green");
          } else {
              $('#valB1').css("background-color", "red");
          }
          
          if ($("#valC1").val() ==  String(Math.pow(parseInt($("#valA1").text()), 3))+" u") {
              nota = nota + 1;
              $('#valC1').css("background-color", "green");
          } else {
              $('#valC1').css("background-color", "red");
          }
          console.log(Math.pow($("#valB2").text(),1/3).toFixed(0)) 
          if ($("#valA2").val() == Math.pow($("#valB2").text(),1/3).toFixed(0)) {
              nota = nota + 1;
              $('#valA2').css("background-color", "green");
          } else {
              $('#valA2').css("background-color", "red");
          }

          if (($("#valC2").val()) == String($("#valB2").text()) + " u") {
              nota = nota + 1;
              $('#valC2').css("background-color", "green");
          } else {
              $('#valC2').css("background-color", "red");
          }

          if (($("#valA3").val()) == Math.pow($("#valC3").text(),1/3).toFixed(0)) {
              nota = nota + 1;
              $('#valA3').css("background-color", "green");
          } else {
              $('#valA3').css("background-color", "red");
          }
          if (($("#valB3").val()) == $("#valC3").text()) {
              nota = nota + 1;
              $('#valB3').css("background-color", "green");
          } else {
              $('#valB3').css("background-color", "red");
          }

          if (($("#valA4").val()) == Math.pow($("#valB4").text(),1/3).toFixed(0)) {
              nota = nota + 1;
              $('#valA4').css("background-color", "green");
          } else {
              $('#valA4').css("background-color", "red");
          }

          if ($("#valC4").val() == String($("#valB4").text()) + " u") {
              nota = nota + 1;
              $('#valC4').css("background-color", "green");
          } else {
              $('#valC4').css("background-color", "red");
          }

          console.log(Math.pow(parseInt($("#valA5").text()), 3))

          if (($("#valB5").val()) == Math.pow(parseInt($("#valA5").text()), 3)) {
              nota = nota + 1;
              $('#valB5').css("background-color", "green");
          } else {
              $('#valB5').css("background-color", "red");
          }

          if (($("#valC5").val()) == String(Math.pow(parseInt($("#valA5").text()), 3)) + " u") {
              nota = nota + 1;
              $('#valC5').css("background-color", "green");
          } else {
              $('#valC5').css("background-color", "red");
          }

          if (($("#valA6").val()) == Math.pow($("#valB6").text(),1/3).toFixed(0)) {
              nota = nota + 1;
              $('#valA6').css("background-color", "green");
          } else {
              $('#valA6').css("background-color", "red");
          }

          if (($("#valC6").val()) == String($("#valB6").text()) + " u") {
              nota = nota + 1;
              $('#valC6').css("background-color", "green");
          } else {
              $('#valC6').css("background-color", "red");
          }
          var notaFinal = (nota * 10) / 12;
          notaFinal = notaFinal.toFixed(2)
          $("#txtNota").text(notaFinal + "/10");
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });