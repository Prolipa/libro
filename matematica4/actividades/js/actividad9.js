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
      var valores2 = [];
      valores1[0] = valorIni1;
      valores2[0] = valorIni2;

      for (var i = 0; i <= 3; i++) {
          if (i > 0) {
              valores1[i] = valores1[i - 1] + aumento1;
              valores2[i] = valores2[i - 1] + aumento2;
          }
      }
      var FilaP1 = [];
      FilaP1[0] = '<tr>' +
          '<td><label id="ini">' + valores1[0] + '</label></td>' +
          '<td><label id="a">' + valores1[1] + '</label></td>' +
          '<td><label id="b">' + valores1[2] + '</label></td>' +
          '<td><label id="c">' + valores1[3] + '</label></td>' +
          '</tr>';
      FilaP1[1] = '<tr>' +
          '<td><input type="number" id="rest1a"></td>' +
          '<td><input type="number" id="rest1b"></td>' +
          '<td><input type="number" id="rest1c"></td>' +
          '<td><input type="number" id="rest1d"></td>' +
          '</tr>';

      var FilaP2 = [];
      FilaP2[0] = '<tr>' +
          '<td><label id="ini2">' + valores2[0] + '</label></td>' +
          '<td><label id="a2">' + valores2[1] + '</label></td>' +
          '<td><label id="b2">' + valores2[2] + '</label></td>' +
          '<td><label id="c2">' + valores2[3] + '</label></td>' +
          '</tr>';
      FilaP2[1] = '<tr>' +
          '<td><input type="number" id="rest2a"></td>' +
          '<td><input type="number" id="rest2b"></td>' +
          '<td><input type="number" id="rest2c"></td>' +
          '<td><input type="number" id="rest2d"></td>' +
          '</tr>';
      $("#Tab1").append(FilaP1);
      $("#Tab2").append(FilaP2);
  };

  function Cargar() {
      $('#contenido').html('');
      $("#Tab1").html('');
      $("#Tab2").html('');
      Inicio();
  }
  $(document).ready(function() {
      Inicio();
      $("#Calificar").click(function() {
          var nota = 0;
          var respuesta1 = parseInt($("#a").text()) - parseInt($("#ini").text());
          var respuesta2 = parseInt($("#a2").text()) - parseInt($("#ini2").text());
          debugger;
          if ($("#rest1a").val() == (parseInt($("#ini").text()) - respuesta1)) {
              nota = nota + 1;
              $('#rest1a').css("border", "4px solid green");

          } else {
              $('#rest1a').css("border", "4px solid red");
          }
          if ($("#rest1b").val() == $("#ini").text()) {
              nota = nota + 1;
              $('#rest1b').css("border", "4px solid green");

          } else {
              $('#rest1b').css("border", "4px solid red");
          }
          if ($("#rest1c").val() == $("#a").text()) {
              nota = nota + 1;
              $('#rest1c').css("border", "4px solid green");

          } else {
              $('#rest1c').css("border", "4px solid red");
          }
          if ($("#rest1d").val() == $("#b").text()) {
              nota = nota + 1;
              $('#rest1d').css("border", "4px solid green");

          } else {
              $('#rest1d').css("border", "4px solid red");
          }

          if ($("#rest2a").val() == (parseInt($("#ini2").text()) - respuesta2)) {
              nota = nota + 1;
              $('#rest2a').css("border", "4px solid green");

          } else {
              $('#rest2a').css("border", "4px solid red");
          }

          if ($("#rest2b").val() == $("#ini2").text()) {
              nota = nota + 1;
              $('#rest2b').css("border", "4px solid green");

          } else {
              $('#rest2b').css("border", "4px solid red");
          }
          if ($("#rest2c").val() == $("#a2").text()) {
              nota = nota + 1;
              $('#rest2c').css("border", "4px solid green");

          } else {
              $('#rest2c').css("border", "4px solid red");
          }
          if ($("#rest2d").val() == $("#b2").text()) {
              nota = nota + 1;
              $('#rest2d').css("border", "4px solid green");

          } else {
              $('#rest2d').css("border", "4px solid red");
          }

          if ($("#patron1").val() == respuesta1) {
              nota = nota + 1;
              $('#patron1').css("border", "4px solid green");

          } else {
              $('#patron1').css("border", "4px solid red");
          }
          if ($("#patron2").val() == respuesta2) {
              nota = nota + 1;
              $('#patron2').css("border", "4px solid green");

          } else {
              $('#patron2').css("border", "4px solid red");
          }





          var notaFinal = (nota * 10) / 10;
          notaFinal = notaFinal.toFixed(2)
          $("#txtNota").text(notaFinal + "/10");
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });