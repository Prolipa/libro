var titulos = "aplico";

  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      var valorIni1 = Math.round(Math.random() * (1000 - 1) + 1);
      var aumento1 = Math.round(Math.random() * (500 - 1) + 1);
      var valores1 = [];
      var valorIni2 = Math.round(Math.random() * (1000 - 1) + 1);
      var aumento2 = Math.round(Math.random() * (500 - 1) + 1);
      var valorIni3 = Math.round(Math.random() * (1000 - 1) + 1);
      var aumento3 = Math.round(Math.random() * (500 - 1) + 1);
      var valores2 = [];
      var valores3 = [];
      valores1[0] = valorIni1;
      valores2[0] = valorIni2;
      valores3[0] = valorIni3;

      for (var i = 0; i <= 4; i++) {
          if (i > 0) {
              valores1[i] = valores1[i - 1] + aumento1;
              valores2[i] = valores2[i - 1] + aumento2;
              valores3[i] = valores3[i - 1] + aumento3;

          }
      }
      var FilaP1 = "";
      FilaP1 = '<tr>' +
          '<td><label id="ini">' + valores1[0] + '</label></td>' +
          '<td><input type="number" id="rest1a"></td>' +
          '<td><label id="a">' + valores1[2] + '</label></td>' +
          '<td><label id="b">' + valores1[3] + '</label></td>' +
          '<td><label id="c">' + valores1[4] + '</label></td>' +
          '<td><input type="number" id="rest1b"></td>' +
          '<td><input type="number" id="rest1c"></td>' +
          '</tr>';

      var FilaP2 = "";
      FilaP2 = '<tr>' +
          '<td><input type="number" id="rest2a"></td>' +
          '<td><label id="ini2">' + valores2[0] + '</label></td>' +
          '<td><label id="a2">' + valores2[1] + '</label></td>' +
          '<td><label id="b2">' + valores2[2] + '</label></td>' +
          '<td><label id="c2">' + valores2[3] + '</label></td>' +
          '<td><input type="number" id="rest2b"></td>' +
          '</tr>';
      var FilaP3 = "";
      FilaP3 = '<tr>' +
          '<td><label id="ini3">' + valores3[0] + '</label></td>' +
          '<td><label id="a3">' + valores3[1] + '</label></td>' +
          '<td><label id="b3">' + valores3[2] + '</label></td>' +
          '<td><label id="c3">' + valores3[3] + '</label></td>' +
          '<td><input type="number" id="rest3a"></td>' +
          '<td><input type="number" id="rest3b"></td>' +
          '</tr>';
      $("#Tab1").append(FilaP1);
      $("#Tab2").append(FilaP2);
      $("#Tab3").append(FilaP3);

  };

  function Cargar() {
      $('#contenido').html('');
      $("#Tab1").html('');
      $("#Tab2").html('');
      $("#Tab3").html('');
      Inicio();
  }
  $(document).ready(function() {
      Inicio();
      $("#Calificar").click(function() {
          var nota = 0;
          var respuesta1 = parseInt($("#b").text()) - parseInt($("#a").text());
          var respuesta2 = parseInt($("#a2").text()) - parseInt($("#ini2").text());
          var respuesta3 = parseInt($("#a3").text()) - parseInt($("#ini3").text());
          debugger;
          if ($("#rest1a").val() == (parseInt($("#ini").text()) + respuesta1)) {
              nota = nota + 1;
              $('#rest1a').css("border", "4px solid green");

          } else {
              $('#rest1a').css("border", "4px solid red");
          }
          if ($("#rest1b").val() == parseInt($("#c").text()) + respuesta1) {
              nota = nota + 1;
              $('#rest1b').css("border", "4px solid green");

          } else {
              $('#rest1b').css("border", "4px solid red");
          }
          if ($("#rest1c").val() == parseInt($("#c").text()) + (2 * respuesta1)) {
              nota = nota + 1;
              $('#rest1c').css("border", "4px solid green");

          } else {
              $('#rest1c').css("border", "4px solid red");
          }


          if ($("#rest2a").val() == (parseInt($("#ini2").text()) - respuesta2)) {
              nota = nota + 1;
              $('#rest2a').css("border", "4px solid green");

          } else {
              $('#rest2a').css("border", "4px solid red");
          }

          if ($("#rest2b").val() == parseInt($("#c2").text()) + respuesta2) {
              nota = nota + 1;
              $('#rest2b').css("border", "4px solid green");

          } else {
              $('#rest2b').css("border", "4px solid red");
          }

          if ($("#rest3a").val() == (parseInt($("#c3").text()) + respuesta3)) {
              nota = nota + 1;
              $('#rest3a').css("border", "4px solid green");

          } else {
              $('#rest3a').css("border", "4px solid red");
          }

          if ($("#rest3b").val() == parseInt($("#c3").text()) + (2 * respuesta3)) {
              nota = nota + 1;
              $('#rest3b').css("border", "4px solid green");

          } else {
              $('#rest3b').css("border", "4px solid red");
          }


          if ($("#resp1").val() == respuesta1) {
              nota = nota + 1;
              $('#resp1').css("background-color", "green");

          } else {
              $('#resp1').css("background-color", "red");
          }
          if ($("#resp2").val() == respuesta2) {
              nota = nota + 1;
              $('#resp2').css("background-color", "green");

          } else {
              $('#resp2').css("background-color", "red");
          }
          if ($("#resp3").val() == respuesta3) {
              nota = nota + 1;
              $('#resp3').css("background-color", "green");

          } else {
              $('#resp3').css("background-color", "red");
          }

          var notaFinal = (nota * 10) / 10;
          notaFinal = notaFinal.toFixed(2)
          $("#txtNota").text(notaFinal + "/10");
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });