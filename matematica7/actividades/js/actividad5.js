 var titulos = "prueba";

  function Inicio() {
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      var aleatorio = Math.round(Math.random() * (7 - 1) + 1);
      var columnast2 = Math.round(Math.random() * (7 - 1) + 1);
      var filast2 = Math.round(Math.random() * (7 - 1) + 1);
      var columnast3 = Math.round(Math.random() * (7 - 1) + 1);
      var filast3 = Math.round(Math.random() * (7 - 1) + 1);
      var filast1 = [];
      var filast2a = [];
      var filast3a = [];
      var columnasB = [];
      var columnasC = [];
      var tabla1 = [];
      var tabla2 = [];
      var tabla3 = [];
      var imagenesC = [];
      var mariposas = ["", "img/i5_p12_act5.png", "img/i6_p12_act5.png", "img/i7_p12_act5.png", "img/i8_p12_act5.png"]

      filast1[1] = '<tr>' +
          '<td height="50" width="60" background="img/i2_p12_act5.png" style="background-repeat: no-repeat;"></td>' +
          '<td height="50" width="60" background="img/i1_p12_act1.png" style="background-repeat: no-repeat;"></td>' +
          '<td height="50" width="60" background="img/i3_p12_act5.png" style="background-repeat: no-repeat;"></td>' +
          '<td height="50" width="60" background="img/i1_p12_act1.png" style="background-repeat: no-repeat;"></td>' +
          '<td height="50" width="60" background="img/i2_p12_act5.png" style="background-repeat: no-repeat;"></td>' +
          '</tr>';
      filast1[2] = '<tr>' +
          '<td height="50" width="60" background="img/i3_p12_act5.png" style="background-repeat: no-repeat;"></td>' +
          '<td height="50" width="60" background="img/i2_p12_act5.png" style="background-repeat: no-repeat;"></td>' +
          '<td height="50" width="60" background="img/i1_p12_act1.png" style="background-repeat: no-repeat;"></td>' +
          '<td height="50" width="60" background="img/i3_p12_act5.png" style="background-repeat: no-repeat;"></td>' +
          '<td height="50" width="60" background="img/i1_p12_act1.png" style="background-repeat: no-repeat;"></td>' +
          '</tr>';
      for (var j = 0; j <= columnast2; j++) {
          columnasB[j] = '<td height="50" width="50" background="img/i4_p12_act5.png" style="background-repeat: no-repeat;"></td>';
      }
      for (var j = 0; j <= columnast3; j++) {
          imagenesC[j] = Math.round(Math.random() * (4 - 1) + 1);
          columnasC[j] = '<td height="50" width="50" background="' + mariposas[imagenesC[j]] + '" style="background-repeat: no-repeat;"></td>';
      }

      for (var k = 0; k <= filast2; k++)
          filast2a[k] = '<tr>' + columnasB + '</tr>';
      for (var l = 0; l <= filast3; l++)
          filast3a[l] = '<tr>' + columnasC + '</tr>';

      $("#contenido2").append(filast2a);
      $("#contenido3").append(filast3a);



      for (var i = 0; i <= aleatorio; i++) {
          if (i % 2 == 0)
              tabla1[i] = filast1[1];
          else
              tabla1[i] = filast1[2];
      }

      $("#contenido").append(tabla1);


  };

  function Cargar() {

      $('#contenido').html('');
      $('#contenido2').html('');
      $('#contenido3').html('');
      Inicio();
  }
  $(document).ready(function() {
      Inicio();
      $("#Calificar").click(function() {
          var nota = 0;
          //Variables Fila 1

          var nFilas1 = $("#tabla1 tr").length;
          var nColumnas1 = $("#tabla1 tr:last td").length;
          var nFilas2 = $("#tabla2 tr").length;
          var nColumnas2 = $("#tabla2 tr:last td").length;
          var nFilas3 = $("#tabla3 tr").length;
          var nColumnas3 = $("#tabla3 tr:last td").length;
          var conta = 0;
          var conta1 = 0;
          var contaB = 0;
          var conta1B = 0;
          var contaC = 0;
          var conta1C = 0;
         
          if (nFilas1 == $("#filaA").val()) {
              nota = nota + 1;
              conta = 1;
              $('#filaA').css("background-color", "green");
          } else {
              $('#filaA').css("background-color", "red");
          }
          if (nColumnas1 == $("#columnaA").val()) {
              nota = nota + 1;
              conta1 = 2;
              $('#columnaA').css("background-color", "green");
          } else {
              $('#columnaA').css("background-color", "red");
          }

          if (nFilas2 == $("#filaB").val()) {
              nota = nota + 1;
              contaB = 1;
              $('#filaB').css("background-color", "green");
          } else {
              $('#filaB').css("background-color", "red");
          }
          if (nColumnas2 == $("#columnaB").val()) {
              nota = nota + 1;
              conta1B = 2;
              $('#columnaB').css("background-color", "green");
          } else {
              $('#columnaB').css("background-color", "red");
          }

          if (nFilas3 == $("#filaC").val()) {
              nota = nota + 1;
              contaC = 1;
              $('#filaC').css("background-color", "green");
          } else {
              $('#filaC').css("background-color", "red");
          }
          if (nColumnas3 == $("#columnaC").val()) {
              nota = nota + 1;
              conta1C = 2;
              $('#columnaC').css("background-color", "green");
          } else {
              $('#columnaC').css("background-color", "red");
          }

          if (conta == 1 && conta1 == 2) {
              if ((parseInt($("#filaA").val()) * parseInt($("#columnaA").val())) == parseInt($("#resultadoA").val())) {
                  nota = nota + 1;
                  $('#resultadoA').css("background-color", "green");
              } else {
                  $('#resultadoA').css("background-color", "red");
              }
          } else {
              $('#resultadoA').css("background-color", "red");
          }
          if (contaB == 1 && conta1B == 2) {
              if ((parseInt($("#filaB").val()) * parseInt($("#columnaB").val())) == parseInt($("#resultadoB").val())) {
                  nota = nota + 1;
                  $('#resultadoB').css("background-color", "green");
              } else {
                  $('#resultadoB').css("background-color", "red");
              }
          } else {
              $('#resultadoB').css("background-color", "red");
          }
          if (contaC == 1 && conta1C == 2) {
              if ((parseInt($("#filaC").val()) * parseInt($("#columnaC").val())) == parseInt($("#resultadoC").val())) {
                  nota = nota + 1;
                  $('#resultadoC').css("background-color", "green");
              } else {
                  $('#resultadoC').css("background-color", "red");
              }
          } else {
              $('#resultadoC').css("background-color", "red");
          }
          var notaFinal = (nota * 10) / 9;
          notaFinal = notaFinal.toFixed(2)
          $("#txtNota").text(notaFinal + "/10");
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });