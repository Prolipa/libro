var titulos = "aplico";

  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      var c1 = [];
      var c2 = [];
      var al = Math.round(Math.random() * (3 - 0) + 1);
      for (var i = 1; i <= 5; i++) {
          c1[i] = '<label>' + i + '</label><sup>2</sup> = <input type="text" id="valorA' + i + '">=<input type="number" id="resA' + i + '"><br>';
          c2[i] = '<label>' + (5 + i) + '</label><sup>2</sup> = <input type="text" id="valorB' + i + '">=<input type="number" id="resB' + i + '"><br>';
      }
      if (al == 1) {
          $('#contenido1').append(c1);
          $('#contenido2').append(c2);
      }
      if (al == 2){
          $('#contenido1').append(c1[1]+c1[2]+c1[5]+c1[3]+c1[4]);
          $('#contenido2').append(c2[3]+c2[2]+c2[5]+c2[1]+c2[4]);
      }
      if (al == 3){
          $('#contenido1').append(c1[3]+c1[4]+c1[1]+c1[2]+c2[5]);
          $('#contenido2').append(c2[2]+c2[3]+c2[4]+c2[1]+c2[5]);
      }
      if (al == 4){
          $('#contenido1').append(c1[5]+c1[1]+c1[4]+c1[2]+c2[3]);
          $('#contenido2').append(c2[5]+c2[3]+c2[1]+c2[2]+c2[4]);
      }

      console.log(al)


  }

  function Cargar() {
      $('#contenido1').html('');
      $('#contenido2').html('');
      $('#texto1').html('');
      $('#texto2').html('');


      Inicio();
  }
  $(document).ready(function() {
      Inicio();
      $("#Calificar").click(function() {
          var nota = 0;
          //Variables Fila 1
          debugger;
          if (($("#valorA1").val()).toLowerCase() == "1x1") {
              nota = nota + 1;
              band = 1;
              $('#valorA1').css("background-color", "green");
          } else {
              $('#valorA1').css("background-color", "red");
          }
          if (($("#valorA2").val()).toLowerCase() == "2x2") {
              nota = nota + 1;
              band = 1;
              $('#valorA2').css("background-color", "green");
          } else {
              $('#valorA2').css("background-color", "red");
          }
          if (($("#valorA3").val()).toLowerCase() == "3x3") {
              nota = nota + 1;
              band = 1;
              $('#valorA3').css("background-color", "green");
          } else {
              $('#valorA3').css("background-color", "red");
          }
          if (($("#valorA4").val()).toLowerCase() == "4x4") {
              nota = nota + 1;
              band = 1;
              $('#valorA4').css("background-color", "green");
          } else {
              $('#valorA4').css("background-color", "red");
          }
          if (($("#valorA5").val()).toLowerCase() == "5x5") {
              nota = nota + 1;
              band = 1;
              $('#valorA5').css("background-color", "green");
          } else {
              $('#valorA5').css("background-color", "red");
          }

          if (($("#valorB1").val()).toLowerCase() == "6x6") {
              nota = nota + 1;
              band = 1;
              $('#valorB1').css("background-color", "green");
          } else {
              $('#valorB1').css("background-color", "red");
          }
          if (($("#valorB2").val()).toLowerCase() == "7x7") {
              nota = nota + 1;
              band = 1;
              $('#valorB2').css("background-color", "green");
          } else {
              $('#valorB2').css("background-color", "red");
          }
          if (($("#valorB3").val()).toLowerCase() == "8x8") {
              nota = nota + 1;
              band = 1;
              $('#valorB3').css("background-color", "green");
          } else {
              $('#valorB3').css("background-color", "red");
          }
          if (($("#valorB4").val()).toLowerCase() == "9x9") {
              nota = nota + 1;
              band = 1;
              $('#valorB4').css("background-color", "green");
          } else {
              $('#valorB4').css("background-color", "red");
          }
          if (($("#valorB5").val()).toLowerCase() == "10x10") {
              nota = nota + 1;
              band = 1;
              $('#valorB5').css("background-color", "green");
          } else {
              $('#valorB5').css("background-color", "red");
          }

          if ($("#resA1").val() == "1") {
              nota = nota + 1;
              band = 1;
              $('#resA1').css("background-color", "green");
          } else {
              $('#resA1').css("background-color", "red");
          }
          if ($("#resA2").val() == "4") {
              nota = nota + 1;
              band = 1;
              $('#resA2').css("background-color", "green");
          } else {
              $('#resA2').css("background-color", "red");
          }
          if ($("#resA3").val() == "9") {
              nota = nota + 1;
              band = 1;
              $('#resA3').css("background-color", "green");
          } else {
              $('#resA3').css("background-color", "red");
          }
          if ($("#resA4").val() == "16") {
              nota = nota + 1;
              band = 1;
              $('#resA4').css("background-color", "green");
          } else {
              $('#resA4').css("background-color", "red");
          }
          if ($("#resA5").val() == "25") {
              nota = nota + 1;
              band = 1;
              $('#resA5').css("background-color", "green");
          } else {
              $('#resA5').css("background-color", "red");
          }

          if ($("#resB1").val() == "36") {
              nota = nota + 1;
              band = 1;
              $('#resB1').css("background-color", "green");
          } else {
              $('#resB1').css("background-color", "red");
          }
          if ($("#resB2").val() == "49") {
              nota = nota + 1;
              band = 1;
              $('#resB2').css("background-color", "green");
          } else {
              $('#resB2').css("background-color", "red");
          }
          if ($("#resB3").val() == "64") {
              nota = nota + 1;
              band = 1;
              $('#resB3').css("background-color", "green");
          } else {
              $('#resB3').css("background-color", "red");
          }
          if ($("#resB4").val() == "81") {
              nota = nota + 1;
              band = 1;
              $('#resB4').css("background-color", "green");
          } else {
              $('#resB4').css("background-color", "red");
          }
          if ($("#resB5").val() == "100") {
              nota = nota + 1;
              band = 1;
              $('#resB5').css("background-color", "green");
          } else {
              $('#resB5').css("background-color", "red");
          }




          console.log(nota)
          var notaFinal = 0;
          notaFinal = (nota * 10) / 20;
          notaFinal = notaFinal.toFixed(2)
          $("#txtNota").text(notaFinal + "/" + 10);
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });