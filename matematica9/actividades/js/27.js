  titulos = "aplico";
  function Inicio() {
      $('#alertHelp').slideUp('slow');
      $("#r0").css("background-color", "white");
      $("#r1").css("background-color", "white");
      $("#r2").css("background-color", "white");
      $("#r3").css("background-color", "white");
      $("#r4").css("background-color", "white");
      $("#r5").css("background-color", "white");
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $("#r0 option:selected").text();
      $("#r1 option:selected").text();
      $("#r2 option:selected").text();
      $("#r3 option:selected").text();
      $("#r4 option:selected").text();
      $("#r5 option:selected").text();
      $('#contenido').html('');
      var i = 0;
      var valoresA = ["V", "V", "F", "F"];
      var valoresB = ["V", "F", "V", "F"];
      var valoresC = ["V", "F", "V", "V"];
      for (var i = 0; i <= 3; i++) {
          $("#contenido").append('<tr><td><label>' + valoresA[i] + '</label></td><td><label>' + valoresB[i] + '</label></td><td><label>' + valoresC[i] + '</label></td><td style="text-align:center"><select required="required" class="form-control" name="servicio" id="a' + i + '"><option value="0" selected="selected">Seleccione una opción</option><option value="F">F</option><option value="V">V</option></select></td><td style="text-align:center">' + '<select required="required" class="form-control" name="servicio" id="b' + i + '"><option value="0" selected="selected">Seleccione una opción</option><option value="F">F</option><option value="V">V</option></select>' + '</td><td style="text-align:center">' + '<select required="required" class="form-control" name="servicio" id="c' + i + '"><option value="0" selected="selected">Seleccione una opción</option><option value="F">F</option><option value="V">V</option></select>' + '</td></tr>');
      }

  };

  function Cargar() {
      $('#contenido').html('');
      Inicio();
  };
  $(document).ready(function() {
    var titulos = 0;
      $("#Calificar").click(function() {
          var nota = 0;
          //Variables Fila 1
          //Variables Fila Respuesta
          var res1 = [];
          var res2 = [];
          var res3 = [];
          res1[0] = $("#a0 option:selected").text();
          res1[1] = $("#a1 option:selected").text();
          res1[2] = $("#a2 option:selected").text();
          res1[3] = $("#a3 option:selected").text();
          res2[0] = $("#b0 option:selected").text();
          res2[1] = $("#b1 option:selected").text();
          res2[2] = $("#b2 option:selected").text();
          res2[3] = $("#b3 option:selected").text();
          res3[0] = $("#c0 option:selected").text();
          res3[1] = $("#c1 option:selected").text();
          res3[2] = $("#c2 option:selected").text();
          res3[3] = $("#c3 option:selected").text();
          conta = 0;
          for (var i = 0; i <= 3; i++) {
              if (res1[i] == "Seleccione una opción")
                  $('#a' + i).css("background-color", "red");
              if (res2[i] == "Seleccione una opción")
                  $('#b' + i).css("background-color", "red");
              if (res3[i] == "Seleccione una opción")
                  $('#c' + i).css("background-color", "red");
              if (i == 0) {
                  if (res3[i] == "F") {
                      if (res1[i] == "V" && res2[i] == "F") {
                          nota = nota + 1;
                          $('#a' + i).css("background-color", "green");
                          $('#b' + i).css("background-color", "green");
                          $('#c' + i).css("background-color", "green");

                      } else {
                          $('#a' + i).css("background-color", "red");
                          $('#b' + i).css("background-color", "red");
                          $('#c' + i).css("background-color", "red");
                      }
                  } else {
                      $('#a' + i).css("background-color", "red");
                      $('#b' + i).css("background-color", "red");
                      $('#c' + i).css("background-color", "red");
                  }
              }
              if (i == 1) {
                  if (res3[i] == "F") {
                      if (res1[i] == "F" && res2[i] == "F") {
                          nota = nota + 1;
                          $('#a' + i).css("background-color", "green");
                          $('#b' + i).css("background-color", "green");
                          $('#c' + i).css("background-color", "green");

                      } else {
                          $('#a' + i).css("background-color", "red");
                          $('#b' + i).css("background-color", "red");
                          $('#c' + i).css("background-color", "red");
                      }
                  } else {
                      $('#a' + i).css("background-color", "red");
                      $('#b' + i).css("background-color", "red");
                      $('#c' + i).css("background-color", "red");
                  }
              }
              if (i == 2) {
                  if (res3[i] == "F") {
                      if (res1[i] == "F" && res2[i] == "V") {
                          nota = nota + 1;
                          $('#a' + i).css("background-color", "green");
                          $('#b' + i).css("background-color", "green");
                          $('#c' + i).css("background-color", "green");

                      } else {
                          $('#a' + i).css("background-color", "red");
                          $('#b' + i).css("background-color", "red");
                          $('#c' + i).css("background-color", "red");
                      }
                  } else {
                      $('#a' + i).css("background-color", "red");
                      $('#b' + i).css("background-color", "red");
                      $('#c' + i).css("background-color", "red");
                  }
              }
              if (i == 3) {
                  if (res3[i] == "F") {
                      if (res1[i] == "F" && res2[i] == "V") {
                          nota = nota + 1;
                          $('#a' + i).css("background-color", "green");
                          $('#b' + i).css("background-color", "green");
                          $('#c' + i).css("background-color", "green");

                      } else {
                          $('#a' + i).css("background-color", "red");
                          $('#b' + i).css("background-color", "red");
                          $('#c' + i).css("background-color", "red");
                      }
                  } else {
                      $('#a' + i).css("background-color", "red");
                      $('#b' + i).css("background-color", "red");
                      $('#c' + i).css("background-color", "red");
                  }
              }
          }
          var notaFinal = (nota * 10) / 4;
          notaFinal = notaFinal.toFixed(2)
          $("#txtNota").text(notaFinal + "/10");
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
      Inicio();
  });