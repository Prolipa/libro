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
      var valoresA = ["V", "V", "V", "V", "F", "F", "F", "F"];
      var valoresB = ["V", "V", "F", "F", "V", "V", "F", "F"];
      var valoresC = ["V", "F", "V", "F", "V", "F", "V", "F"];
      var valoresD = ["V", "V", "F", "F", "F", "F", "V", "V"];
      var opcionesA = [];
      var opcionesB = [];
      var opcionesC = [];
      var opcionesD = [];

      for (var i = 0; i <= 7; i++) {
          opcionesA[i] = '<select required="required" class="form-control" name="servicio" id="a' + i + '">' +
              '<option value="0" selected="selected">Seleccione una opción</option>' +
              '<option value="F">F</option>' +
              '<option value="V">V</option>' +
              '</select>';
          opcionesB[i] = '<select required="required" class="form-control" name="servicio" id="b' + i + '">' +
              '<option value="0" selected="selected">Seleccione una opción</option>' +
              '<option value="F">F</option>' +
              '<option value="V">V</option>' +
              '</select>';
          opcionesC[i] = '<select required="required" class="form-control" name="servicio" id="c' + i + '">' +
              '<option value="0" selected="selected">Seleccione una opción</option>' +
              '<option value="F">F</option>' +
              '<option value="V">V</option>' +
              '</select>';
          opcionesD[i] = '<select required="required" class="form-control" name="servicio" id="d' + i + '">' +
              '<option value="0" selected="selected">Seleccione una opción</option>' +
              '<option value="F">F</option>' +
              '<option value="V">V</option>' +
              '</select>';
      }
      for (var i = 0; i <= 7; i++) {
          $("#contenido").append('<tr>' +
              '<td><label>' + valoresA[i] + '</label></td>' +
              '<td><label>' + valoresB[i] + '</label></td>' +
              '<td><label>' + valoresC[i] + '</label></td>' +
              '<td>' + opcionesA[i] + '</td>' +
              '<td>' + opcionesB[i] + '</td>' +
              '<td>' + opcionesC[i] + '</td>');
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
          var res4 = [];
          res1[0] = $("#a0 option:selected").text();
          res1[1] = $("#a1 option:selected").text();
          res1[2] = $("#a2 option:selected").text();
          res1[3] = $("#a3 option:selected").text();
          res1[4] = $("#a4 option:selected").text();
          res1[5] = $("#a5 option:selected").text();
          res1[6] = $("#a6 option:selected").text();
          res1[7] = $("#a7 option:selected").text();

          res2[0] = $("#b0 option:selected").text();
          res2[1] = $("#b1 option:selected").text();
          res2[2] = $("#b2 option:selected").text();
          res2[3] = $("#b3 option:selected").text();
          res2[4] = $("#b4 option:selected").text();
          res2[5] = $("#b5 option:selected").text();
          res2[6] = $("#b6 option:selected").text();
          res2[7] = $("#b7 option:selected").text();

          res3[0] = $("#c0 option:selected").text();
          res3[1] = $("#c1 option:selected").text();
          res3[2] = $("#c2 option:selected").text();
          res3[3] = $("#c3 option:selected").text();
          res3[4] = $("#c4 option:selected").text();
          res3[5] = $("#c5 option:selected").text();
          res3[6] = $("#c6 option:selected").text();
          res3[7] = $("#c7 option:selected").text();

          conta = 0;
          for (var i = 0; i <= 7; i++) {
              if (res1[i] == "Seleccione una opción")
                  $('#a' + i).css("background-color", "red");
              if (res2[i] == "Seleccione una opción")
                  $('#b' + i).css("background-color", "red");
              if (res3[i] == "Seleccione una opción")
                  $('#c' + i).css("background-color", "red");
              if (res3[i] == "Seleccione una opción")
                  $('#c' + i).css("background-color", "red");

              if (i == 0) {
                  if (res3[i] == "V") {
                      if (res1[i] == "V" && res2[i] == "V") {
                          nota = nota + 1;
                          $('#a' + i).css("background-color", "green");
                          $('#b' + i).css("background-color", "green");
                          $('#c' + i).css("background-color", "green");
                          $('#d' + i).css("background-color", "green");

                      } else {
                          $('#a' + i).css("background-color", "red");
                          $('#b' + i).css("background-color", "red");
                          $('#c' + i).css("background-color", "red");
                          $('#d' + i).css("background-color", "red");

                      }
                  } else {
                      $('#a' + i).css("background-color", "red");
                      $('#b' + i).css("background-color", "red");
                      $('#c' + i).css("background-color", "red");
                      $('#d' + i).css("background-color", "red");
                  }
              }
              if (i == 1) {
                  if (res3[i] == "F") {
                      if (res1[i] == "V" && res2[i] == "F") {
                          nota = nota + 1;
                          $('#a' + i).css("background-color", "green");
                          $('#b' + i).css("background-color", "green");
                          $('#c' + i).css("background-color", "green");
                          $('#d' + i).css("background-color", "green");


                      } else {
                          $('#a' + i).css("background-color", "red");
                          $('#b' + i).css("background-color", "red");
                          $('#c' + i).css("background-color", "red");
                          $('#d' + i).css("background-color", "red");
                      }
                  } else {
                      $('#a' + i).css("background-color", "red");
                      $('#b' + i).css("background-color", "red");
                      $('#c' + i).css("background-color", "red");
                      $('#d' + i).css("background-color", "red");
                  }
              }
              if (i == 2) {
                  if (res3[i] == "F") {
                      if (res1[i] == "F" && res2[i] == "V") {
                          nota = nota + 1;
                          $('#a' + i).css("background-color", "green");
                          $('#b' + i).css("background-color", "green");
                          $('#c' + i).css("background-color", "green");
                          $('#d' + i).css("background-color", "green");
                      } else {
                          $('#a' + i).css("background-color", "red");
                          $('#b' + i).css("background-color", "red");
                          $('#c' + i).css("background-color", "red");
                          $('#d' + i).css("background-color", "red");
                      }
                  } else {
                      $('#a' + i).css("background-color", "red");
                      $('#b' + i).css("background-color", "red");
                      $('#c' + i).css("background-color", "red");
                      $('#d' + i).css("background-color", "red");
                  }
              }
              if (i == 3) {
                  if (res3[i] == "V") {
                      if (res1[i] == "F" && res2[i] == "F") {
                          nota = nota + 1;
                          $('#a' + i).css("background-color", "green");
                          $('#b' + i).css("background-color", "green");
                          $('#c' + i).css("background-color", "green");
                          $('#d' + i).css("background-color", "green");


                      } else {
                          $('#a' + i).css("background-color", "red");
                          $('#b' + i).css("background-color", "red");
                          $('#c' + i).css("background-color", "red");
                          $('#d' + i).css("background-color", "red");
                      }
                  } else {
                      $('#a' + i).css("background-color", "red");
                      $('#b' + i).css("background-color", "red");
                      $('#c' + i).css("background-color", "red");
                      $('#d' + i).css("background-color", "red");
                  }
              }
              if (i == 4) {
                  if (res3[i] == "F") {
                      if (res1[i] == "F" && res2[i] == "V") {
                          nota = nota + 1;
                          $('#a' + i).css("background-color", "green");
                          $('#b' + i).css("background-color", "green");
                          $('#c' + i).css("background-color", "green");
                          $('#d' + i).css("background-color", "green");


                      } else {
                          $('#a' + i).css("background-color", "red");
                          $('#b' + i).css("background-color", "red");
                          $('#c' + i).css("background-color", "red");
                          $('#d' + i).css("background-color", "red");
                      }
                  } else {
                      $('#a' + i).css("background-color", "red");
                      $('#b' + i).css("background-color", "red");
                      $('#c' + i).css("background-color", "red");
                      $('#d' + i).css("background-color", "red");
                  }
              }
              if (i == 5) {
                  if (res3[i] == "F") {
                      if (res1[i] == "F" && res2[i] == "V") {
                          nota = nota + 1;
                          $('#a' + i).css("background-color", "green");
                          $('#b' + i).css("background-color", "green");
                          $('#c' + i).css("background-color", "green");
                          $('#d' + i).css("background-color", "green");


                      } else {
                          $('#a' + i).css("background-color", "red");
                          $('#b' + i).css("background-color", "red");
                          $('#c' + i).css("background-color", "red");
                          $('#d' + i).css("background-color", "red");
                      }
                  } else {
                      $('#a' + i).css("background-color", "red");
                      $('#b' + i).css("background-color", "red");
                      $('#c' + i).css("background-color", "red");
                      $('#d' + i).css("background-color", "red");
                  }
              }
              if (i == 6) {
                  if (res3[i] == "F") {
                      if (res1[i] == "F" && res2[i] == "V") {
                          nota = nota + 1;
                          $('#a' + i).css("background-color", "green");
                          $('#b' + i).css("background-color", "green");
                          $('#c' + i).css("background-color", "green");
                          $('#d' + i).css("background-color", "green");


                      } else {
                          $('#a' + i).css("background-color", "red");
                          $('#b' + i).css("background-color", "red");
                          $('#c' + i).css("background-color", "red");
                          $('#d' + i).css("background-color", "red");
                      }
                  } else {
                      $('#a' + i).css("background-color", "red");
                      $('#b' + i).css("background-color", "red");
                      $('#c' + i).css("background-color", "red");
                      $('#d' + i).css("background-color", "red");
                  }
              }
              if (i == 7) {
                  if (res3[i] == "F") {
                      if (res1[i] == "F" && res2[i] == "V") {
                          nota = nota + 1;
                          $('#a' + i).css("background-color", "green");
                          $('#b' + i).css("background-color", "green");
                          $('#c' + i).css("background-color", "green");
                          $('#d' + i).css("background-color", "green");


                      } else {
                          $('#a' + i).css("background-color", "red");
                          $('#b' + i).css("background-color", "red");
                          $('#c' + i).css("background-color", "red");
                          $('#d' + i).css("background-color", "red");
                      }
                  } else {
                      $('#a' + i).css("background-color", "red");
                      $('#b' + i).css("background-color", "red");
                      $('#c' + i).css("background-color", "red");
                      $('#d' + i).css("background-color", "red");
                  }
              }
          }
          var notaFinal = (nota * 10) / 8;
          notaFinal = notaFinal.toFixed(2)
          $("#txtNota").text(notaFinal + "/10");
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
      Inicio();
  });