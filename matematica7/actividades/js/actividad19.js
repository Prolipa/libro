      var val = [];
var titulos = "aplico";

      function Inicio() {
          $('#nota-informativa').slideUp('slow');
          $("#Calificar").removeAttr("disabled");
          $('#Refrescar').attr('disabled', true);
          $('#area1').css("background-color", "white");
          $('#area2').css("background-color", "white");
          $('#area3').css("background-color", "white");

          var filas1 = [];
          var col1 = [];
          var filas2 = [];
          var col2 = [];
          var filas3 = [];
          var col3 = [];
          for (var i = 0; i <= 4; i++)
              val[i] = Math.round(Math.random() * (10 - 2) + 2);

          debugger;
          val = jQuery.unique(val);
          console.log(val)

          for (var j = 1; j <= val[0]; j++) {
              col1[j] = '<td class="tb1"></td>';
          }
          for (var j1 = 1; j1 <= val[0]; j1++) {
              filas1[j1] = '<tr>' + col1 + '</tr>';
          }

          for (var k = 1; k <= val[1]; k++) {
              col2[k] = '<td class="tb2"></td>';
          }
          for (var k1 = 1; k1 <= val[1]; k1++) {
              filas2[k1] = '<tr>' + col2 + '</tr>';
          }
          for (var l = 1; l <= val[2]; l++) {
              col3[l] = '<td class="tb3"></td>';
          }
          for (var l1 = 1; l1 <= val[2]; l1++) {
              filas3[l1] = '<tr>' + col3 + '</tr>';
          }
          $('#base1').append(val[0]);
          $('#base2').append(val[1]);
          $('#base3').append(val[2]);
          $('#contenido1').append(filas1);
          $('#contenido2').append(filas2);
          $('#contenido3').append(filas3);

      }

      function Cargar() {
          $('#contenido1').html('');
          $('#contenido2').html('');
          $('#contenido3').html('');
          $('#area1').val(" ");
          $('#area2').val(" ");
          $('#area3').val(" ");


          Inicio();
      }
      $(document).ready(function() {
          Inicio();
          $("#Calificar").click(function() {
              var nota = 0;
              //Variables Fila 1
              debugger;
              var respuestas = [];
              respuestas[0] = String(Math.pow(parseInt($("#base1").text()), 2)) + " u";
              respuestas[1] = String(Math.pow(parseInt($("#base2").text()), 2)) + " u";
              respuestas[2] = String(Math.pow(parseInt($("#base3").text()), 2)) + " u";
              respuestas[3] = String(Math.pow(parseInt(val[0]), 2)) + " unidades cuadradas";
              respuestas[4] = String(Math.pow(parseInt(val[1]), 2)) + " unidades cuadradas";
              respuestas[5] = String(Math.pow(parseInt(val[2]), 2)) + " unidades cuadradas";

              if ($("#area1").val().toLowerCase() == respuestas[3]) {
                  nota = nota + 1;
                  band = 1;
                  $('#area1').css("background-color", "green");
              } else {
                  $('#area1').css("background-color", "red");
              }
              if ($("#area2").val().toLowerCase() == respuestas[4]) {
                  nota = nota + 1;
                  band = 1;
                  $('#area2').css("background-color", "green");
              } else {
                  $('#area2').css("background-color", "red");
              }
              if ($("#area3").val().toLowerCase() == respuestas[5]) {
                  nota = nota + 1;
                  band = 1;
                  $('#area3').css("background-color", "green");
              } else {
                  $('#area3').css("background-color", "red");
              }


              console.log(nota)
              var notaFinal = 0;
              notaFinal = (nota * 10) / 3;
              notaFinal = notaFinal.toFixed(2)
              $("#txtNota").text(notaFinal + "/" + 10);
              $('#Calificar').attr('disabled', true);
              $('#Refrescar').attr('disabled', false);
          });
      });