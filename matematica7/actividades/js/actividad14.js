var titulos = "reflexiono";

  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      var posicion = [];
      var respuestas = [];
      var encabezadop = ["Identificador 1", "", "signos", "", "Identificador 2"];
      var numero = [];

      for (var i = 0; i <= 3; i++) {
          numero[i] = Math.round(Math.random() * (1000000000 - 1) + 1);
      }
      var rot = [];
      var r2 = '<option value="0" selected="selected">Seleccione una opción</option>' +
          '<option value="menor"> < </option>' +
          '<option value="mayor"> > </option>' +
          '<option value="igual"> = </option>';

      for (var j = 0; j <= 4; j++) {
          rot[j] = '<th>' + encabezadop[j] + '</th>';
      }
      for (var i = 0; i <= 4; i++) {
          if (i == 0) {
              respuestas[i] = '<tr>' +
                  '<td><input type="number" id="valor1' + i + '"></td>' +
                  '<td><label id="num1' + i + '">' + numero[i] + '</label></td>' +
                  '<td><select id="signo' + i + '">' + r2 + '</select></td>' +
                  '<td><label id="num2' + i + '">' + (numero[i] + 1000) + '</label></td>' +
                  '<td><input type="number" id="valor2' + i + '"></td>' +
                  '</tr>'
          }
          if (i == 1) {
              respuestas[i] = '<tr>' +
                  '<td><input type="number" id="valor1' + i + '"></td>' +
                  '<td><label id="num1' + i + '">' + numero[i] + '</label></td>' +
                  '<td><select id="signo' + i + '">' + r2 + '</select></td>' +
                  '<td><label id="num2' + i + '">' + (numero[i] + 10000) + '</label></td>' +
                  '<td><input type="number" id="valor2' + i + '"></td>' +
                  '</tr>'
          }
          if (i == 2) {
              respuestas[i] = '<tr>' +
                  '<td><input type="number" id="valor1' + i + '"></td>' +
                  '<td><label id="num1' + i + '">' + numero[i] + '</label></td>' +
                  '<td><select id="signo' + i + '">' + r2 + '</select></td>' +
                  '<td><label id="num2' + i + '">' + (numero[i] + 100000) + '</label></td>' +
                  '<td><input type="number" id="valor2' + i + '"></td>' +
                  '</tr>'
          }
          if (i == 3) {
              respuestas[i] = '<tr>' +
                  '<td><input type="number" id="valor1' + i + '"></td>' +
                  '<td><label id="num1' + i + '">' + numero[i] + '</label></td>' +
                  '<td><select id="signo' + i + '">' + r2 + '</select></td>' +
                  '<td><label id="num2' + i + '">' + (numero[i] + 1000000) + '</label></td>' +
                  '<td><input type="number" id="valor2' + i + '"></td>' +
                  '</tr>'
          }
      }
      $("#contenido").append(respuestas);
      $("#encabezado").append(rot);
  };

  function Cargar() {
      $("#contenido").html('');
      $("#encabezado").html('');
      Inicio();
  }
  $(document).ready(function() {
      Inicio();
      $("#Calificar").click(function() {

          var nota = 0;
          var nu1 = [];
          var nu2 = [];
          var str1 = [];
          var str2 = [];
          var r1 = [];
          var r2 = [];
          var signos = [];
          for (var i = 0; i <= 3; i++) {
              nu1[i] = $("#num1" + i).text();
              nu2[i] = $("#num2" + i).text();
              str1 = nu1.toString()
              str2 = nu2.toString()
              r1[i] = str1.split("");
              r2[i] = str1.split("");
              signos[i] = $("#signo" + i).val();
          }
          
          debugger;

          for (var i = 0; i <= 3; i++) {
              if (i == 0) {
                  if ($("#valor1" + i).val() == r1[0][5]) {
                      nota = nota + 1;
                      $('#valor1' + i).css("border", "4px solid green");
                  } else {
                      $('#valor1' + i).css("border", "4px solid red");
                  }
                  if ($("#valor2" + i).val() == r2[0][5]) {
                      nota = nota + 1;
                      $('#valor2' + i).css("border", "4px solid green");
                  } else {
                      $('#valor2' + i).css("border", "4px solid red");
                  }
              }
              if (i == 1) {
                  if ($("#valor1" + i).val() == r1[1][4]) {
                      nota = nota + 1;
                      $('#valor1' + i).css("border", "4px solid green");
                  } else {
                      $('#valor1' + i).css("border", "4px solid red");
                  }
                  if ($("#valor2" + i).val() == r2[1][4]) {
                      nota = nota + 1;
                      $('#valor2' + i).css("border", "4px solid green");
                  } else {
                      $('#valor2' + i).css("border", "4px solid red");
                  }
              }
              if (i == 2) {
                  if ($("#valor1" + i).val() == r1[0][3]) {
                      nota = nota + 1;
                      $('#valor1' + i).css("border", "4px solid green");
                  } else {
                      $('#valor1' + i).css("border", "4px solid red");
                  }
                  if ($("#valor2" + i).val() == r2[0][3]) {
                      nota = nota + 1;
                      $('#valor2' + i).css("border", "4px solid green");
                  } else {
                      $('#valor2' + i).css("border", "4px solid red");
                  }
              }
              if (i == 3) {
                  if ($("#valor1" + i).val() == r1[0][2]) {
                      nota = nota + 1;
                      $('#valor1' + i).css("border", "4px solid green");
                  } else {
                      $('#valor1' + i).css("border", "4px solid red");
                  }
                  if ($("#valor2" + i).val() == r2[0][2]) {
                      nota = nota + 1;
                      $('#valor2' + i).css("border", "4px solid green");
                  } else {
                      $('#valor2' + i).css("border", "4px solid red");
                  }
              }
          }
          for (var i = 0; i <= 3; i++) {
              if (signos[i] == "mayor") {
                  if (nu1[i] > nu2[i]) {
                      nota = nota + 1;
                      $('#valor2' + i).css("border", "4px solid green");
                  } else {
                      $('#valor2' + i).css("border", "4px solid red");
                  }
              }
              if (signos[i] == "menor") {
                  if (nu1[i] < nu2[i]) {
                      nota = nota + 1;
                      $('#valor2' + i).css("border", "4px solid green");
                  } else {
                      $('#valor2' + i).css("border", "4px solid red");
                  }
              }
              if (signos[i] == "mayor") {
                  if (nu1[i] == nu2[i]) {
                      nota = nota + 1;
                      $('#valor2' + i).css("border", "4px solid green");
                  } else {
                      $('#valor2' + i).css("border", "4px solid red");
                  }
              }
          }





          debugger;
          var notaFinal = 0;
          notaFinal = (nota * 10);
          notaFinal = notaFinal / 18;
          notaFinal = notaFinal.toFixed(2);
          $("#txtNota").text(notaFinal + "/" + 10);
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });